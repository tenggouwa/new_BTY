<template>
	<div class="footer">
		<div class="footer-main">
			<ul>
				<li>
					<div @click="jump">
						<i class="iconfont icon-weixin"></i>
					</div>
					<p>微信</p>
				</li>
				<li>
					<div @click="jump">
						<i class="iconfont icon-qq"></i>
					</div>
					<p>QQ</p>
				</li>
				<li>
					<a href="https://twitter.com/bityuanofficial" target="_blank">
						<div>
							<i class="iconfont icon-twitter"></i>
						</div>
					</a>
					<p>Twitter</p>
				</li>
				<li>
					<a href="https://t.me/bityuan" target="_blank">
						<div>
							<i class="iconfont icon-ai-connection"></i>
						</div>
					</a>
					<p>电报群</p>
				</li>
				<li>
					<a href="https://www.reddit.com/r/bityuan/" target="_blank">
						<div>
							<i class="iconfont icon-redditalien"></i>
						</div>
					</a>
					<p>Reddit</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			jump(){
				document.documentElement.scrollTop = window.pageYOffset = document.body.scrollTop=0;
			}
		}
	}
</script>
<style scoped>
	.footer{
		width: 100%;
		height: 300px;
		background: #0c0d11;
		padding-top: 80px;
		.footer-main{
			width: 520px;
			margin: 0 auto;
			ul{
				overflow: hidden;
				li{
					float: left;
					width: 20%;
					text-align: center;
					cursor: pointer;
					a{
						text-decoration: none;
						color: #000;
					}
					div{
						width: 83.2px;
						height: 83.2px;
						border-radius: 50%;
						background: #6dbef1;
						line-height: 83.2px;
						margin-left: 10.4px;
						i{
							font-size: 40px;
							line-height: 1;
						}
					}
					p{
						margin-top :20px; 
						color: #6dbef1;
						font-size: 16px;
					}
				} 
			}
		}
	}
	@media screen and (max-width: 1200px) {
	  .footer{
			width: 100%;
			height: 160px;
			background: #0c0d11;
			padding-top: 40px;
			.footer-main{
				width: 100%;
				margin: 0 auto;
				ul{
					overflow: hidden;
					li{
						float: left;
						width: 20%;
						text-align: center;
						cursor: pointer;
						a{
							text-decoration: none;
							color: #000;
						}
						div{
							width: 60px;
							height: 60px;
							margin: 0 auto;
							border-radius: 50%;
							background: #6dbef1;
							line-height: 60px;
							/*margin-left: 10.4px;*/
							i{
								font-size: 40px;
							}
						}
						p{
							margin-top :20px; 
							color: #6dbef1;
							font-size: 16px;
						}
					} 
				}
			}
		}
	}
</style>