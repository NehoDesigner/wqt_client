import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)



//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './router/index'
const router = new VueRouter({
  routes
});


//字体
import './static/css/font.css';

//httpService
import httpService from './service/httpService';
window.httpService = httpService;

//sessionHelper
import sessionHelper from './service/sessionHelper';
//扩展
import './extend/mixin'

//base css
import './static/css/base.css';

//animate.css
import 'animate.css'


//vuex
import store from './vuex'



window.ROOT_APP = new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App),
  methods:{
  	login:function(value){
  		sessionHelper.setToken(value);
  		this.$store.dispatch('loginStatus',true);
  		this.goto('/index');
  	},
  	logout:function(){
  		localStorage.clear();
  		this.$store.dispatch('loginStatus',false);
  		this.$message('账号注销成功！');
  		this.goto('/');
  	}
  },
  created:function(){
  	if(sessionHelper.isOnline()){
  		this.$store.dispatch('loginStatus',true);
  		this.goto('/index');
  	}
  }
})
