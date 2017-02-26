import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/Form'
import Return from '@/components/Return'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/return',
      name: 'Return',
      component: Return
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
