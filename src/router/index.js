import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/index.js'
import router1 from './moudle/router1'
import router2 from './moudle/router2'
Vue.use(Router)


const commonRoutes = [
  { path: '/404', component: () => import('components/RouterError/404') },
  { path: '/401', component: () => import('components/RouterError/401') },
  { path: '*', redirect: '/' },
]

/** 分模块的路由，合并传入Router */
let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(router1,router2)
})
// 导航守卫，非登录状态先登录
// router.beforeEach((to, from, next) => {
//   let tmp = sessionStorage.getItem('user')
//   if (!tmp && to.name !== 'Login') {
//     next({ path: '/login' })
//     return
//   }
//   next()
// })
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
