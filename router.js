import Vue from 'vue'
import Router from 'vue-router'

// import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import Contact from '~/pages/contact.vue'
import Portfolio from '~/pages/portfolio.vue'
import Project from '~/pages/project/_id.vue'
import ProjectSlug from '~/pages/project/slug/index.vue'
import CookiePolicy from '~/pages/cookie-policy.vue'

// const Index = () => import(/* webpackChunkName: "index" */ '~/pages/index.vue')
// const About = () => import(/* webpackChunkName: "index" */ '~/pages/about.vue')
// const Contact = () => import(/* webpackChunkName: "index" */ '~/pages/contact.vue')
// const Portfolio = () => import(/* webpackChunkName: "index" */ '~/pages/portfolio.vue')
// const Project = () => import(/* webpackChunkName: "index" */ '~/pages/project/_id.vue')
// const ProjectSlug = () => import(/* webpackChunkName: "index" */ '~/pages/project/slug/index.vue')
// const CookiePolicy = () => import(/* webpackChunkName: "index" */ '~/pages/cookie-policy.vue')

// component: () => import("../views/welcome.vue")
// component: () => import(/* webpackChunkName: "b2b" */ '@/views/B2BHarvardPilgrimSelection'),

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        // component: Index
        component: () => import(/* webpackChunkName: "index" */ '~/pages/index.vue').then((m) => {
          // console.log('m', m)
          return m.default || m
        })
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/portfolio',
        component: Portfolio
      },
      {
        path: '/project/:id',
        component: Project,
        children: [
          {
            path: ':slug',
            component: ProjectSlug,
            name: 'project'
          }
        ]
      },
      {
        path: '/cookie-policy',
        component: CookiePolicy
      }
    ]
  })
}
