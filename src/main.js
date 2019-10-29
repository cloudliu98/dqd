import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

// 导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 导入懒加载
import {
  Lazyload
} from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

// 导入导航栏
import {
  NavBar
} from 'vant';
Vue.use(NavBar);

// 导入单元格
import {
  Cell,
  CellGroup
} from 'vant';
Vue.use(Cell).use(CellGroup);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')