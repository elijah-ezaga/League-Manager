import Vue from 'vue'
import App from './App.vue'
import Router from './Router.js'

Vue.config.productionTip = false

const router = Router(Vue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')