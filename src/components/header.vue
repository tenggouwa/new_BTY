<template>
	<div class="header">
		<div class="headermain">
			<img src="../assets/img/logo.png" width="32" alt="">
			<span class="logo">BITYUAN</span>
			<div class="ultabli">
				<span>首页</span>
				<span>区块链浏览器</span>
				<span class="package">钱包</span>
				<span class="blue"><i class="iconfont icon-dianhuahover"></i>客服电话：95105528</span>
			</div>
		</div>
		<button class="header-login" @click="showtab"><i class="iconfont icon-dengluyemianyonghuming"></i>{{username}}</button>
		<!-- 登录 -->
		<index-login :show="this.isshow"></index-login>
	</div>

</template>
		
<script>
import indexLogin from '../views/login.vue'
export default{
	components:{
		indexLogin
	},
	data(){
		return{
      isshow:0,
      login:{
      	username:'',
      	password:'',
      	redirect_uri:'https://bityuan.com'
      },
      username:'登录',
		}
	},
	mounted(){

	},
	methods:{
		showtab(){
			if(this.isshow == 0){
				this.isshow = 1;
			}else if(this.isshow == 1){
				this.isshow = 0;
			}
		},
		showloginbox(){
			//判断是否是iPhone 或者 ipad
			if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {  
			    window.location.href="https://m.bityuan.com/pages/login/login.html";  
			} else{
				if(this.isshow == 1){
					this.isshow = 0;
				}else if(this.isshow == 0){
					this.isshow = 1;
				}
			}
			
		},
		showforget(){
			this.isshow=3;
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
<style scoped>
.header{
	width: 100%;
	height: 71px;
	background: #000;
	border-bottom: 1px solid #16252b; 
	.headermain{
		width: 1200px;
		height: 70px;
		margin: 0 auto;
		img{
			float: left;
			margin-top: 15px;
			margin-right: 10px;
		}
		.logo{
			color: #fbe16d;
			font-size: 20px;
			line-height: 70px;
		}
		.ultabli{
			float: right;
			line-height: 70px;
			margin-right: 180px;
			span{
				padding: 26px 20px 26px 20px;
				font-size: 16px;
				color: #aeafb0;
				cursor: pointer;
				i{
					margin-right: 10px;
					line-height: 1;
				}
			}
			.blue{
				color: #6dbef1;
			}
		}
		
	}
	.header-login{
		position: absolute;
		top: 15px;
		right: 30px;
		z-index: 9;
		height: 40px;
		background: #000;
		width: 110px;
		border: 1px solid #6dbef1;
		border-radius: 20px;
		outline: none;
		color: #6dbef1;
		font-size: 16px;
		cursor: pointer;
		i{
			line-height: 1;
			margin-top: -10px;
			display: inline-block;
			margin-right: 5px;
		}
	}

	/*登录弹框*/
	.headerLogin{
		position: absolute;
		top: 80px;
		right: 20px;
		width: 240px;
		height: auto;
		background-color: rgba(255,255,255,0.1);
		text-align: center;
		z-index: 2;
	}
	.headerLogin>h2{
		font-size: 14px;
		color: #fff;
		padding: 23px 0 17px 0;
	}
	.loginLine{
		width: auto;
		margin: 0 auto;
		display: inline-block;
	}
	.loginIcon{
		width: 36px;
		height: 36px;
		float: left;
		background-color: #ccc;
		margin-bottom: 7px;
	}
	.loginIcon>img{
		padding-top: 8px;
	}
	.loginInput{
		width: 159px;
		height: 36px;
		margin-bottom: 7px;
		padding-left: 10px;
		float: left;
		display: inline-block;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
		border: 0px;
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
		color: #fff;
		margin: 5px 0 10px;
		cursor: pointer;
	}
	.loginBtn{
		display: block;
		width: 173px;
		height: 35px;
		margin: 0 auto 10px;
		background-color: #fabf26;
		border-radius: 3px;
		line-height: 35px;
		color: #000;
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
		width: 118px;
		height: 36px;
		margin-bottom: 7px;
		float: left;
		display: inline-block;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
		padding-left: 10px;
		border: 0px;
	}
	.sendCode{
		display: block;
		float: left;
		width: 77px;
		height: 36px;
		line-height: 36px;
		background-color: #fabf26;
		color: #fff;
		font-size: 14px;
		border: 
	}
	.setNewPass{
		width: 100%;
		height: 36px;
		margin-bottom: 7px;
		padding-left: 10px;
		float: left;
		display: inline-block;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
		border: 0px;
	}
}
@media screen and (max-width: 1200px) {
  .header{
  	width: 100%;
		height: 123px;
		background: #000; 
		border:none;
		.headermain{ 
			background: #1e1e1e;
			width:100%;
			img{
				float: left;
				margin-top: 8px;
				margin-left: 10px;
			}
			.logo{
				color: #fbe16d;
				font-size: 18px;
				line-height: 70px;
			}
			.ultabli{
				width: 100%;
				line-height: 50px;
				margin-right: 0px;
				background: #1e1e1e; 
				border-top: 2px solid #000;
				span{
					/*box-sizing: border-box;*/
					padding: 0;
					font-size: 16px;
					color: #aeafb0;
					cursor: pointer;
					display: inline-block;
					width: 32%;
					text-align: center;
					border-right:2px solid #000;
					i{
						margin-right: 10px;
					}
				}
				.package{
					border-right: none;
				}
				.blue{
					color: #6dbef1;
					display: none;
				}
			}
			
		}
		.header-login{
			position: absolute;
			top: 0;
			right: 0;
			z-index: 9;
			height: 70px;
			background: #1e1e1e;
			width: 100px;
			border: none;
			outline: none;
			color: #bbb;
			font-size: 16px;
			i{
				color: #bbb;
				margin-right: 5px;
				font-size: 20px;
			}
		}
  }
}
</style>