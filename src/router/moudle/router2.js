const router2 = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/user/login'),
    meta: {
      title: '登录'
    }
  },
]
export default router2
