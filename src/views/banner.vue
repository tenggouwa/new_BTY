<template>
	<div class="banner">
		<div class="banner-back">
			<ul>
				<li id="particle">
					<section class="container"></section>
				</li>
			</ul>
		</div>
		<div class="banner-tit">
			<h1>比 特 元</h1>
			<img class="banner-bakimg" src="../assets/img/banner2.png" alt="">
			<div class="banner-img">
				<div class="fl">
					<img src="../assets/img/weixin.png" height="109" width="109" alt="">
					<p>客服：bityuankefu</p>
				</div>
				<div class="fr">
					<img src="../assets/img/bityuan.png" height="109" width="109" alt="">
					<p>比特元公众号</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				liWidth:0,
				curIndex:0,
				ul:'',
				li:'',
			}
		},
		mounted(){
			
			this.ul = document.getElementsByTagName( 'ul' )[0];
			this.li = this.ul.getElementsByTagName( 'li' );
			this.init();
			//插件粒子运动API
			//注：Particleground下的三个对象都有着pause和open方法，用于暂停和开启动画
			var particle = new Particleground.particle( '#particle .container', {
				//全局透明度，默认0.8
				opacity: .8,
				//粒子颜色数组，默认随机色
				// color: [ 'rgba( 255, 255, 255, .5 )', 'red', 'green', 'blue' ],
				//粒子个数，默认为容器的0.1倍
				//传入[0, 1)显示容器相应倍数的值，或传入具体个数[1, +∞)
				num: .1,
				//运动速度[0, +∞]，默认1
				speed: .8,
				//粒子最大半径，默认2.4
				max: 2.4,
				//粒子最小半径，默认0.6
				min: .6,
				//连接线最大距离，默认180
				dis: 100,
				//连接线段的宽度，默认0.2
				lineWidth: .2,
				//范围越大，连接的点越多，默认240
				r: 240,
				//移动事件的元素,默认为canvas，或传入原生js选择元素
				// eventElem: document,
				//让画布宽高自适应窗口大小的改变，默认false
				resize: true
			});
			window.onresize = ()=>{
				this.init();
				// this.slideTab();
			};
			document.onkeyup = function( e ){
				switch( e.keyCode ){
					case 37:
						this.curIndex--;
						if( this.curIndex < 0 ){
							this.curIndex = li.length-1;
						}
						slideTab();
						break;
					case 39: 
						this.curIndex++;
						if( this.curIndex > li.length-1 ){
							this.curIndex = 0;
						}
						slideTab();
						break;
				}
			};
		},
		methods:{
		  init(){
				this.liWidth = document.documentElement.clientWidth;
				this.ul.style.width = this.liWidth * this.li.length + 'px';
				for( var i = 0; i < this.li.length; i++ ){
					this.li[ i ].style.width = this.liWidth + 'px';
				}
			},
			slideTab(){
				var translate = 'translate('+ -this.liWidth * this.curIndex +'px,0)';
				this.ul.style.transform = translate;
				this.ul.style.webkitTransform = translate;
				this.ul.style.mozTransform = translate;
				this.ul.style.msTransform = translate;
				document.querySelector( '#btn .active' ).removeAttribute( 'class' );
			}
		}
	}
</script>
<style scoped>
.banner{
	height: 685px;
	position: relative;
	.banner-back{
		/*z-index: -999;*/
		height: 685px;
		width: 100%;
		ul{
			margin: 0;
			padding: 0;
		}
		li{
			list-style: none;
		}
		ul, li, img, section{
			width: 100%;
			height: 100%;
		}
		ul{
			-webkit-transition: -webkit-transform 600ms;
			-moz-transition: -moz-transform 600ms;
			transition: transform 600ms;
		}
		li{
			float: left;
			position: relative;
		}
		#particle{
			background-color: #000;
		}
	}
	.banner-tit{
		width: 600px;
		position: absolute;
		/*z-index: 999;*/
		top: 170px;
		left: 50%;
		margin-left: -300px;
		/*background: #fff;*/
		/*padding-top: 180px;*/
		text-align: center;
		h1{
			color: #f7bf4c;
			font-size: 24px;
			margin-bottom: 20px;
		}
		.banner-bakimg{
			width: 600px;
		}
		.banner-img{
			width: 270px;
			margin: 0 auto;
			margin-top: 30px;
			color: #ccc;
			font-size: 14px;
			.fl{
				float: left;
			}
			.fr{
				float: right;
			}
		}
	}
}
@media screen and (max-width: 1200px) {
  .banner{
  	height: 360px;
  	.banner-back{
			height: 360px;
  	}
  	.banner-tit{
  		width: 300px;
			margin-left: -150px;
			top: 60px; 
			.banner-bakimg{
				width: 300px;
			}
  	}
  }
}
</style>