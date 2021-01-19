// profile
// import profilePage from '../pages/profile/ProfilePage.vue'
// import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import BlogPost from '../pages/BlogPost.vue'
// import successStories from '../pages/SuccessStories.vue'
// import solutions from '../pages/Solutions.vue'
// import plans from '../pages/Plans.vue'
// import workplaceCare from '../pages/WorkplaceCare.vue'
// import virtualCare from '../pages/VirtualCare.vue'
// import outpatientCare from '../pages/OutpatientCare.vue'
// import preventiveCare from '../pages/PreventiveCare.vue'
// import corporateCare from '../pages/CorporateCare.vue'
// import newsPage from '../pages/news/NewsPage.vue'
// import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'
// import payment from '../pages/Payment.vue'
// import schedule from '../pages/Schedule.vue'
// import connect from '../pages/Connect.vue'

// import { routePropResolver } from './util'
// import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: 'VueJS - Butter CMS Demo' }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  // {
  //   path: '/success-stories',
  //   name: 'success-stories',
  //   component: successStories,
  //   meta: { title: `${DOMAIN_TITLE} | Success Stories` }
  // },
  // {
  //   path: '/plans',
  //   name: 'plans',
  //   component: plans,
  //   meta: { title: `${DOMAIN_TITLE} | Plans` }
  // },
  // {
  //   path: '/solutions',
  //   name: 'solutions',
  //   component: solutions,
  //   meta: { title: `${DOMAIN_TITLE} | Solutions` }
  // },
  // {
  //   path: '/payment',
  //   name: 'payment',
  //   component: payment,
  //   meta: { title: `${DOMAIN_TITLE} | Payment` }
  // },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: schedule,
  //   meta: { title: `${DOMAIN_TITLE} | Schedule` }
  // },
  // {
  //   path: '/connect',
  //   name: 'connect',
  //   component: connect,
  //   meta: { title: `${DOMAIN_TITLE} | Connect` }
  // },
  // {
  //   path: '/workplace-care',
  //   name: 'workplace-care',
  //   component: workplaceCare,
  //   meta: { title: `${DOMAIN_TITLE} | Workplace care` }
  // },
  // {
  //   path: '/virtual-care',
  //   name: 'virtual-care',
  //   component: virtualCare,
  //   meta: { title: `${DOMAIN_TITLE} | Virtual care` }
  // },
  // {
  //   path: '/outpatient-care',
  //   name: 'outpatient-care',
  //   component: outpatientCare,
  //   meta: { title: `${DOMAIN_TITLE} | Outpatient care` }
  // },
  // {
  //   path: '/preventive-care',
  //   name: 'preventive-care',
  //   component: preventiveCare,
  //   meta: { title: `${DOMAIN_TITLE} | Preventive care` }
  // },
  // {
  //   path: '/corporate-care',
  //   name: 'corporate-care',
  //   component: corporateCare,
  //   meta: { title: `${DOMAIN_TITLE} | Corporate care` }
  // },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: newsPage,
  //   meta: { title: `${DOMAIN_TITLE} | news` },
  //   props: routePropResolver
  // },
  // {
  //   path: '/profile',
  //   component: profilePage,
  //   meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
  //   children: [
  //     {
  //       path: '',
  //       name: 'profile',
  //       component: profilePostsPage
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: loginPage,
  //   meta: { title: `${DOMAIN_TITLE} | login` }
  // },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: 'Page is not found' }
  }
]
