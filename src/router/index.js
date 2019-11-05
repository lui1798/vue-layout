import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'


Vue.use(Router)

export default new Router({
  routes: [
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
        },
        {
          path: 'profile',
          name: 'Profile',
          component: () => import('@/components/user/profile'),
          meta: { icon: 'warning', title: '个人中心' }
        },
        {
          path: 'person',
          name: 'Person',
          component: () => import('@/components/user/person'),
          meta: { icon: 'warning', title: '修改头像' }
        }
      ]
    }
  ]

})
