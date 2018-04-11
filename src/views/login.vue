<template>
	<div class="newLogin">
		<!-- 登录框 -->
		<div class="headerLogin" v-show="isshow==1">
			<h2>登录比特元</h2>
			<div class="loginLine">
				<el-input class="loginInput"  type="text" placeholder="请输入您的账户" v-model="login.username">
					<template slot="prepend"><i class="iconfont icon-zhucedengluyonghuming"></i></template>
				</el-input>
			</div>
			<div class="loginLine">
				<el-input class="loginInput" type="password"  placeholder="请输入您的密码" v-model="login.password">
					<template slot="prepend"><i class="iconfont icon-zhucedenglumima"></i></template>
				</el-input>
			</div>
			<div class="clearBoth"></div>
			<a class="forget" @click="showforget">忘记密码？</a>
			<span class="loginBtn" @click="gotologin" >登录</span>
			<span class="errorTip"></span>
		</div>
		<!-- 验证框 -->
		<div class="headerLogin" v-show="isshow==2">
			<h2>忘记密码</h2>
			<div class="loginLine">
				<el-input type="text" class="verify" v-model="forget.name" placeholder="请输入账号">
				</el-input>
				<p class="sendCode" @click="sendCode">发送验证码</p>
			</div>
			<div class="loginLine">
				<el-input type="text" class="verify" v-model="forget.code" placeholder="请输入验证码">
				</el-input>
				<span class="sendCode" @click="commitcode">Go</span>
			</div>
			<div class="clearBoth"></div>
			<a class="forget" id="returnLogin" @click="backtoLogin">返回登录</a>
			<span class="errorTip"></span>
		</div>
		<!-- 找回密码框 -->
		<div class="headerLogin" v-show="isshow==3">
			<h2>提交密码</h2>
			<div class="loginLine">
				<el-input type="password" class="setNewPass" v-model="passOne" placeholder="设置您需要的新密码">
				</el-input>
			</div>
			<div class="loginLine">
				<el-input type="password" class="setNewPass" v-model="passTwo" id="resetPassValueAgain" placeholder="重复您需要的新密码">
				</el-input>
			</div>
			<div class="clearBoth"></div>
			<a class="forget" @click="showloginbox">返回登录</a>
			<span class="loginBtn" id="resetPassBtn" @click="resetlogin">提交密码</span>
			<!-- <span class="errorTip">验证码错误</span> -->
		</div>
	</div>
</template>
<script>
import api from '../config/api-config.js'
import { ajax , sublogion , subloginup } from '../assets/js/common.js'
	export default{
	props:['show'],
	data(){
		return{
      isshow:0,
      login:{
      	username:'',
      	password:'',
      	redirect_uri:'https://bityuan.com'
      },
      username:'登录',
      forget:{
      	name:'',
      	code:'',
      },
      passOne:'',
      passTwo:'',
		}
	},
	mounted(){

	},
	watch:{
		show: function (n, o) {
    this.updata();
   }
	},
	methods:{
		//重置密码
		resetlogin(){
			//判断是否有密码
			if(this.passOne && this.passTwo){
				//判断两次密码是否相等
				if(this.passOne == this.passTwo){
					//邮箱
					if((this.forget.name).indexOf('@')!= -1){
						//参数
						let param = {
							t:'sms',
							code:this.forget.code,
							password:this.passOne,
							country:'CN',
							mobile:'',
							email:this.forget.name,
						}
						ajax(this,this.extendApi.reset,param,(res)=>{
							if(res.code == 200){
								this.$notify({
					        title: '成功',
					        message: "成功",
					        type: 'success',
					        duration:'2000'
					      });
					      this.isshow = 1;
							}else{
								this.$notify({
					        title: '提示',
					        message: res.message,
					        type: 'warning',
					        duration:'2000'
					      });
							}
						},'POST')
					}else{//手机发送
						let param = {
							t:'sms',
							code:this.forget.code,
							password:this.passOne,
							country:'CN',
							mobile:this.forget.name,
							email:'',
						}
						ajax(this,this.extendApi.reset,param,(res)=>{
							if(res.code == 200){
								this.$notify({
					        title: '成功',
					        message: "成功",
					        type: 'success',
					        duration:'2000'
					      });
					      this.isshow = 1;
							}else{
								this.$notify({
					        title: '提示',
					        message: res.message,
					        type: 'warning',
					        duration:'2000'
					      });
							}
						},'POST')
					}
				}else{
					this.$notify({
		        title: '提示',
		        message: '两次密码不一致',
		        type: 'warning',
		        duration:'2000'
		      });
				}
			}else{
				this.$notify({
	        title: '提示',
	        message: '请输入密码',
	        type: 'warning',
	        duration:'2000'
	      });
			}
		},
		//校验code
		commitcode(){
			if(this.forget.code){
				
				if((this.forget.name).indexOf('@')!= -1){
					//参数
					let param = {
						t:'sms',
						email:this.forget.name,
						codetype:'reset',
						mobile:'',
						country:'CN',
						rcheck:0,
						code:this.forget.code,
					}
					ajax(this,this.extendApi.commit,param,(res)=>{
						if(res.code == 200){
							this.$notify({
				        title: '成功',
				        message: "成功",
				        type: 'success',
				        duration:'2000'
				      });
				      this.isshow = 3;
						}else{
							this.$notify({
				        title: '提示',
				        message: res.message,
				        type: 'warning',
				        duration:'2000'
				      });
						}
					},'POST')
				}else{//手机发送
					let param = {
						t:'sms',
						email:'',
						codetype:'reset',
						mobile:this.forget.name,
						country:'CN',
						rcheck:0,
						code:this.forget.code,
					}
					ajax(this,this.extendApi.commit,param,(res)=>{
						if(res.code == 200){
							this.$notify({
				        title: '成功',
				        message: "成功",
				        type: 'success',
				        duration:'2000'
				      });
				      this.isshow = 3;
						}else{
							this.$notify({
				        title: '提示',
				        message: res.message,
				        type: 'warning',
				        duration:'2000'
				      });
						}
					},'POST')
				}
			}else{
				this.$notify({
	        title: '提示',
	        message: "请输入验证码",
	        type: 'warning',
	        duration:'2000'
	      });
			}
		},
		//发送验证码
		sendCode(){
			//判断是否写入账户
			if(this.forget.name){
				//邮箱
				if((this.forget.name).indexOf('@')!= -1){
					//参数
					let param = {
						email:this.forget.name,
						tplid:1,
						vparam:this.forget.name+'|xjxrandom',
						codetype:'reset',
					}
					ajax(this,this.extendApi.sendemail,param,(res)=>{
						if(res.code == 200){
							this.$notify({
				        title: '成功',
				        message: "邮件发送成功，注意查收",
				        type: 'success',
				        duration:'2000'
				      });
						}else{
							this.$notify({
				        title: '提示',
				        message: res.message,
				        type: 'warning',
				        duration:'2000'
				      });
						}
					},'POST')
				}else{//手机发送
					let param = {
						mobile:this.forget.name,
						country:'CN',
						tplid:3,
						tplsign:3,
						vparam:'xjxrandom',
						codetype:'reset',
					}
					ajax(this,this.extendApi.sendmsg,param,(res)=>{
						if(res.code == 200){
							this.$notify({
				        title: '成功',
				        message: "短信发送成功，注意查收",
				        type: 'success',
				        duration:'2000'
				      });
						}else{
							this.$notify({
				        title: '提示',
				        message: res.message,
				        type: 'warning',
				        duration:'2000'
				      });
						}
					})
				}
			}else if(this.forget.name==""){
				this.$notify({
	        title: '提示',
	        message: "请输入账号",
	        type: 'warning',
	        duration:'2000'
	      });
			}
		},
		backtoLogin(){
			this.isshow = 1;
		},
		updata(){
			this.isshow = this.show;
		},
		showloginbox(){
			if(this.isshow == 1){
				this.isshow = 0;
			}else if(this.isshow == 0){
				this.isshow = 1;
			}else {
				this.isshow = 1;
			}
		},
		showforget(){
			this.isshow=2;
		},
		gotologin(){
			if(this.login.username==''||this.login.username==null||this.login.username==undefined){
				this.$notify({
	        title: '提示',
	        message: "请输入账号",
	        type: 'warning',
	        duration:'2000'
	      });
	      return;
			}
			if(this.login.password==''||this.login.password==null||this.login.password==undefined){
				this.$notify({
	        title: '提示',
	        message: "请输入密码",
	        type: 'warning',
	        duration:'2000'
	      });
	      return;
			}
			sublogion(this);
		}
	}
}
</script>
<style>
	.newLogin{
		.el-input-group__prepend{
			padding: 0 10px;
			background: #fff;
			i{
				color: #6dbef1;
				font-size: 20px;
				line-height: 1;
				/*margin-top: -10px;*/
			}
		}
		/*登录弹框*/
		.headerLogin{
			position: absolute;
			top: 80px;
			right: 20px;
			width: 300px;
			height: auto;
			border-radius: 6px;
			background-color: #fff;
			text-align: center;
			overflow: hidden;
			z-index: 2;
		}
		.headerLogin>h2{
			color: #6dbef1;
			font-size: 18px;
			padding: 16px 0 15px 0;
			background-color: #f8f8f8;
			border-bottom: 1px solid #e3e3e1;
			margin-bottom: 10px;
		}
		.loginLine{
			width: auto;
			margin: 0 auto;
			display: inline-block;
		}
		/*.loginIcon{
			width: 36px;
			height: 36px;
			float: left;
			background-color: #ccc;
			margin-bottom: 7px;
		}
		.loginIcon>img{
			padding-top: 8px;
		}*/
		.loginInput{
			width: 230px;
			height: 36px;
			margin-bottom: 7px;
			/*padding-left: 10px;*/
			float: left;
			/*display: inline-block;*/
			outline: none;
			-webkit-appearance: none;
			border-radius: 0;
			border: 0px;
			i{
				line-height: 1;
				display: inline-block;
				margin-top: -10px;
			}
		}
		.clearBoth{
			width: 0;
			height: 0;
			clear: both;
		}
		.forget{
			display: block;
			text-align: right;
			padding-right: 25px;
			font-size: 12px;
			color: #ababac;
			margin: 5px 0 10px;
			cursor: pointer;
		}
		.loginBtn{
			display: block;
			width: 230px;
			height: 40px;
			margin: 0 auto 20px;
			background-color: #6dbef1;
			border-radius: 3px;
			line-height: 40px;
			color: #fff;
			font-size: 16px;
			cursor: pointer;
		}
		.errorTip{
			color: #f00;
			font-size: 12px;
		}
		#loginType{
			display: none;
		}
		#checkType{
			display: none;
		}
		#forgetType{
			/*display: none;*/
		}
		/*忘记密码*/
		.verify{
			width: 160px;
			margin-bottom: 7px;
			float: left;
			display: inline-block;
			outline: none;
			-webkit-appearance: none;
			border-radius: 0;
			border: 0px;
		}
		.sendCode{
			display: block;
			float: left;
			width: 77px;
			height: 40px;
			line-height: 40px;
			border-radius: 4px;
			background-color: #fabf26;
			color: #fff;
			font-size: 14px;
			margin-left: 4px;
			cursor: pointer;
		}
		.setNewPass{
			width: 230px;
			height: 36px;
			margin-bottom: 7px;
			float: left;
			display: inline-block;
			outline: none;
			-webkit-appearance: none;
			border-radius: 0;
			border: 0px;
		}
	}
</style>