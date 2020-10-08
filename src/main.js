import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './plugins/vant.js'
import http from './utils/request'
import {
  gets,
  posts
} from './utils/api'

router.beforeEach((to, from, next) => {

  if (to.name == 'login') {
    let user_id = localStorage.getItem('user_id')
    if (user_id!=null) {
      // 去首页
      next('/home')
    }
    next()
  }
  next()
  
})
Vue.prototype.$http = http
// Vue.prototype.$get=gets
// Vue.prototype.$post=posts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')