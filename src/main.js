// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 	'element-ui/lib/theme-chalk/index.css' 
import "babel-polyfill"
import ApiConfig from './config/api-config.js'
import VueAxios from 'vue-axios'

var axios = require('axios'); 
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.extendApi = ApiConfig;
var querystring = require('querystring');
Vue.prototype.querystring=querystring;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
