import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
// import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Element)
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const WafCheck = () => import('./components/modules/WafCheck.vue')
const CdnDetect = () => import('./components/modules/CdnDetect.vue')
const EmailGather = () => import('./components/modules/EmailGather.vue')


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // Just use them normally in the route config
    { path: '/info_waf', component: WafCheck },
    { path: '/info_cdn', component: CdnDetect },
    { path: '/info_email', component: EmailGather }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});