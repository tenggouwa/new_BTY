 /*null或者undefined的处理*/
 var isNull=function(temptime){
   if(temptime==undefined || temptime !== null){
    temptime=""
   }
    return '';
 }
 /* 组件时间格式转换 */
var temptime=function(temptime){
    var gettype=Object.prototype.toString;
    if (temptime != '' && (gettype.call(temptime) == '[object Date]')) {
        temptime = temptime.getFullYear() + '-' + (temptime.getMonth() + 1) + '-' + temptime.getDate();
    }
    return temptime;
}
/* 时间戳转换函数 */
var getDataYear = function(format, timestamp) {
  // console.log(timestamp==0 )
  if(timestamp == null||timestamp == undefined||timestamp == 0){
    return ''
  }
    var date = new Date(timestamp ? (parseInt(timestamp) * 1000) : new Date().getTime());
    var FORMAT = new Object();
    FORMAT = {
        'Y': "date.getFullYear()",
        'M': "date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1",
        'D': "date.getDate() < 10 ? '0' + date.getDate() : date.getDate()",
        'h': "date.getHours() < 10 ? '0' + date.getHours() : date.getHours()",
        'm': "date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()",
        's': "date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()"
    }
    for (var i in FORMAT) {
      if (format.indexOf(i) != -1) {
        format = format.replace(i, eval(FORMAT[i]));
    }
  }
  return format;
}
//设置cookie
var setcookie=function(name,value,dateTime){//设置cookie的值
  // name="token";
  var Days =dateTime;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//获取cookie
var getcookie=function(name){//获取cookie的值
  // name="token";
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return unescape(arr[2]);
  } else{
    return null;
  }
}

//删除cookie
var delatecookie=function(){//清空cookie
  var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString();
    }
  }
}

//判断是否登录标识
var checkLogin=function(val){

  if(getcookie(val)==null){
    return false ;
  }
  return true;
}

//判断是否登录标识
var checkLogin=function(val){

  if(getcookie(val)==null){
    return false ;
  }
  return true;
}
/* ajax请求 */
var ajax = function(that, url, params, success, method) {
  var token = getcookie('token');
  // console.log(token)
  // var openId = sessionStorage.getItem('openId');
  if(method=='GET'){
    that.axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type':'application/x-www-form-urlencoded;',
      },
     params:params,
    }).then((response) => {
      success(response.data);
    }).catch(function(response){
      console.log(response);
    })
  }else{
    params=that.querystring.stringify(params);
    that.axios({
      method: "POST",
      url: url,
      headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type':'application/x-www-form-urlencoded;',
      },
     data:params,
    }).then((response) => {
       success(response.data);
    }).catch(function(response){
      console.log('请求失败');
    })
  }
}
//登录接口
var sublogion=function(_this){//登录
  ajax(_this,_this.extendApi.userLogin,_this.login,function(res){
    console.log(res)
    if(res.code==200){
      _this.$notify({
        title: '提示',
        message: '登陆成功',
        type: 'success',
        duration:'2000'
      });
      setcookie('token',res.access_token,res.expires_in);
      setcookie('expires_in',res.expires_in,res.expires_in);
      _this.isshow=0;
      _this.username=_this.login.username;
      getUserInfo(_this);
      
    }else{
      _this.$notify({
        title: '提示',
        message: res.message,
        type: 'warning',
        duration:'2000'
      });
    }
  },'POST')
}
//注册接口
var subloginup=function(_this,pageindex){//注册
  ajax(_this,_this.extendApi.userLoginUp,_this.loginup,function(param){
    if(param.code == 200){
      console.log('注册成功')
    }else{
      console.log('注册失败')
    }
  },'POST')
}
//退出登录
var LoginOut=function(that){
  ajax(that,that.extendApi.userLoginout,'',function(param){
    if(param.code==200){
      that.$notify({
        title: '提示',
        message: '退出登录',
        type: 'success',
        duration:'2000'
      });
    }else{
      _this.$notify({
        title: '提示',
        message: res.message,
        type: 'warning',
        duration:'2000'
      });
    }
  },'GET')
}
//获取用户信息
var getUserInfo=function(that){
  ajax(that,that.extendApi.userInfo,'',function(res){
    console.log(res);
      // console.log(res.data);
    setcookie('username', res.username, getcookie('expires_in'));
    setcookie('id', res.id, getcookie('expires_in'));
    setcookie('phone', res.mobile,getcookie('expires_in'));
    setcookie('country', res.country, getcookie('expires_in'));
    setcookie('email', res.email,getcookie('expires_in'));
    setcookie('name', (res.name != null ? res.name : ''),getcookie('expires_in'));
    setcookie('ifverify', res.ifverify, getcookie('expires_in'));
    setcookie('mauth', res.mauth, getcookie('expires_in'));

    window.location.href="https://bityuan.com/finace.html";
    //跳转
    // if (window.location.pathname == "/" || window.location.pathname.indexOf("index.html") > 0) { //首页登录
    //   // window.location.href='/static/finace.htm';
    //   self.location='finace.html';
    //   // $.redirect('finace.html');
    //  } else {
    //   window.location.reload();
    //  }
  },'GET')
}
//获取用户资产信息
var getUserAsset=function(that,success){
  if(getcookie('token')!=undefined){
    ajax(that,that.extendApi.userAsset,'',function(res){
      if(res.code==200){
        // console.log(res);
        success(res.data);
      }else{
        console.log(res.message);
      }
      console.log(res)
    },'GET')
  }
  
}
var icopricenum = function(sysmbol) {
    let coinlist = {
      "BTC": 8,
      "ETH": 7,
    }
    return coinlist[sysmbol];
  }
  //价格输入框
var formatNumPrice = function(type, price) {
    price = Number(price);
    let coinlist = {
      "BCC": '4',
      "BTC": '4',
      "ETH": '4',
      "ETC": '4',
      "ZEC": '4',
      "LTC": '4',
    }
    if (coinlist[type] == undefined) {
      console.log("缺少币种配对配置");
      return false;
    } else if (coinlist[type] == 0) {
      return parseInt(price);
    } else {
      return parseFloat(price).toFixed(Number(coinlist[type]));
    }
  }
  //价格框输入保留位数
var formatcoinPrice = function(type, price) {
  price = price.toString();
  if (type == "ETH" || type == "ETC" || type == "ZEC" || type == "LTC" || type == "BTC" || type == "BCC") {
    return (price.match(/\d+(\.\d{0,4})?/) || [''])[0];
  }
}
  //格式化价格框保留位数
var formatcoinpriceHQ = function(type) {
    let coinlist = {
      "BTC": '4',
      "BCC": '4',
      "ETH": '4',
      "ETC": '4',
      "ZEC": '4',
      "LTC": '4',
    }
    if (coinlist[type] == undefined) {
      console.log("缺少币种配对配置");
      return false;
    } else {
      return coinlist[type];
    }
  }
  //格式化数量框
var formatcoinNum = function(type) {
  let coinlist = {
    "BTC": '3',
    "BCC": '3',
    "ETH": '3',
    "ETC": '3',
    "ZEC": '3',
    "LTC": '3'
  }
  if (coinlist[type] == undefined) {
    console.log("缺少币种配对配置");
    return false;
  } else {
    return coinlist[type];
  }
}
var numjs = function(type) {
    let coinlist = {
      "BTC": 1000,
      "BCC": 1000,
      "ETH": 1000,
      "ETC": 1000,
      "ZEC": 1000,
      "LTC": 1000
    }
    if (coinlist[type] == undefined) {
      console.log("缺少币种配对配置");
      return false;
    } else {
      return coinlist[type];
    }
  }
  //格式化价格框保留位数
var formatcoinprice = function(type) {
    let coinlist = {
      "BTC": '4',
      "BCC": '4',
      "ETH": '4',
      "ETC": '4',
      "ZEC": '4',
      "LTC": '4'
    }
    if (coinlist[type] == undefined) {
      console.log("缺少币种配对配置");
      return false;
    } else {
      return coinlist[type];
    }
  }
  //累加价格
var addformatcoinprice = function(type) {
    let coinlist = {
      "BTC": '10',
      "BCC": '1',
      "ETH": '1',
      "ETC": '1',
      "SC": '0.0005',
      "WTC": '0.0005',
      "NYCC": '0.005',
      "ZEC": '1',
      "BTS": '0.1',
      "LTC": '1'
    }
    if (coinlist[type] == undefined) {
      console.log("缺少币种配对配置");
      return false;
    } else {
      return coinlist[type];
    }
  }
  //累加数量
var addtradeNum = function(type) {
  let coinlist = {
    "BTC": '0.001',
    "BCC": '0.001',
    "ETH": '0.01',
    "ETC": '0.1',
    "SC": '100',
    "WTC": '100',
    "NYCC": '100',
    "ZEC": '0.01',
    "BTS": '1',
    "LTC": '0.1'
  }
  if (coinlist[type] == undefined) {
    console.log("缺少币种配对配置");
    return false;
  } else {
    return coinlist[type];
  }
}

var initCoinNum = function(type) {
  let coinlist = {
    "BTC": '0.0001',
    "BCC": '0.0001',
    "ETH": '0.0001',
    "ETC": '0.0001',
    "ZEC": '0.0001',
    "LTC": '0.0001'
  }
  if (coinlist[type] == undefined) {
    console.log("缺少币种配对配置");
    return false;
  } else {
    return coinlist[type];
  }
}
var getminPriceNUm = function(type, num) {
    num = num.toString();
    return (num.match(/\d+(\.\d{0,4})?/) || [''])[0];
}
  //最小交易量
var getmincoinNum = function(type, num) {
  num = num.toString();
  return (num.match(/\d+(\.\d{0,3})?/) || [''])[0];
}
var initINput = function(type) {
  return 0.001;
}
var cannel = function(_this, id) {
  _this.cancelparm.orderid = id;
  _this.cancelparm.currency = sessionStorage.getItem('symbol');
  ajax(_this, _this.extendApi.Cancel, _this.cancelparm, function(response) {
    if (response.code == 200) {
      setTimeout(function() {
        _this.gethistorylist();
        getusermoney(_this);
      }, 1000)
      _this.$notify({
        title: '成功',
        message: '撤单成功',
        type: 'success',
        duration: '1000',
      });
    } else {
      _this.$notify({
        title: '失败',
        message: '撤单失败',
        type: 'error',
        duration: '1000',
      });
    }
  })
}
export{
  temptime,
  getDataYear,
  ajax,
  delatecookie,
  sublogion,
  subloginup,
  getcookie,
  setcookie,
  isNull,
  checkLogin,
  getUserInfo,
  getUserAsset,
  LoginOut,

}
