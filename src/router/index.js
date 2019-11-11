import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Repos from '@/components/Repos'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id', //use parameter id for github username, 
      name: 'User',
      component: User
    },
    {
      path: '/:id/:repos', //and repos for selected repository
      name: 'Repos',
      component: Repos
    }
  ]
})