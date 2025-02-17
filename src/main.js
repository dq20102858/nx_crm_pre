import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss' // global css
import App from './App'
import router from './router/index'
import store from './store'
import './icons' //icons
import './permission' // permission control
import * as filters from './filters' // global filters
import eventBus from './utils/eventBus'
import authorityCode from './authorityCode'
// import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'

// Vue.prototype.$echarts = echarts
Vue.prototype.authorityCode = authorityCode
Vue.use(Element, {
  size: 'medium'
})
Vue.use(BaiduMap, {
  ak: 'FHrkORZnT5ZfiEWpGwCkOlw1BnsF7IWq'
})
Vue.use(eventBus)
// Vue.use(VueQuillEditor)
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
