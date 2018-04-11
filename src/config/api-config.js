/*
 * 端口域名配置
 * @type Object
 */
var apiUrl = {
    basehostUrl: 'https://zc.33.cn',
}
export default {

   userLogin:apiUrl.basehostUrl+'/api/token/gettoken',//用户登录token

   userLoginout:apiUrl.basehostUrl+'/api/member/loginout',//用户退出登录

   userInfo:apiUrl.basehostUrl+'/api/user/newinfo',//获取用户信息

   sendemail:apiUrl.basehostUrl+'/api/sms/mailsend',//发送邮件

   sendmsg:apiUrl.basehostUrl+'/api/sms/send',//发送短信

   commit:apiUrl.basehostUrl+'/api/sms/validate',//校验code

   reset:apiUrl.basehostUrl+'/api/account/reset',//修改密码

}
