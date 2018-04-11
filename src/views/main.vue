<template>
	<div class="index">
		<div class="top">
			<index-top></index-top>
		</div>
		<div class="body">
			<index-banner></index-banner>
			<index-main></index-main>
		</div>
		<div class="footer">
			<index-footer></index-footer>
		</div>
	</div>
</template>
<script>
import indexTop from "../components/header.vue"
import indexBanner from '../views/banner.vue'
import indexMain from '../views/index.vue'
import indexFooter from '../components/footer.vue'
export default{
	data(){
		return{

		}
	},
	components:{
  	indexTop,
  	indexBanner,
  	indexMain,
  	indexFooter
  }
}
</script>
<style>
	.index{
		.top{
			
		}
		.body{
			
		}

	}
</style>	