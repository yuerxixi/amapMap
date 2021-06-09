import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
  hacks: hacks
});

import 'swiper/dist/css/swiper.min.css'
// import 'swiper/dist/js/swiper.min'
import Swiper from 'swiper';

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import 'lib-flexible/flexible.js'

import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({

  key: '981251695e128d5ee32f96fbe66ebcaa',
  
  //插件
  
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation',
  'AMapUI.loadUI', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.PolyEditor', 'AMap.CircleEditor'],  
  // 默认高德 sdk 版本为 1.4.4  
  v: '1.4.4'
  
  });

Vue.use(mandMobile)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
