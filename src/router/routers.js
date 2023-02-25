import Layout from '@/layout'

const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import('@/views/home/HomeView.vue')
      },
      {
        path: '/calendar',
        name: 'Calendar',
        meta: { title: '日历' },
        component: () => import('@/views/calendar/CalendarView')
      },
      {
        path: '/technology',
        name: 'Technology',
        meta: { title: '技术栈' },
        component: () => import('@/views/technology/TechnologyView')
      },
      {
        path: '/work',
        name: 'Work',
        meta: { title: '工作经历' },
        component: () => import('@/views/work/WorkView')
      },
      {
        path: '/project',
        name: 'Project',
        meta: { title: '项目经历' },
        component: () => import('@/views/project/ProjectView')
      },
      {
        path: '/private',
        name: 'Private',
        meta: { title: '个人项目' },
        component: () => import('@/views/private/PrivateView')
      },
      {
        path: '/hooks',
        name: 'Hooks',
        meta: { title: 'Hooks+' },
        component: () => import('@/views/hooks/HooksView')
      }
    ]
  }
]

export default constantRouterMap
