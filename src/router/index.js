import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/components/login'),
      meta: {icon: 'warning', title: '登录'}
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
    },
    {
      path: '/home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Profile',
          component: () => import('@/components/user/profile'),
          meta: { icon: 'warning', title: '个人中心' }
        }
      ]
    },
    {
      path: '/person',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('@/components/user/person'),
          meta: { icon: 'warning', title: '修改头像' }
        }
      ]
    },
    {
      path: '/profile',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('@/components/user/profile'),
          meta: { icon: 'warning', title: '个人中心' }
        }
      ]
    }

  ]

})
