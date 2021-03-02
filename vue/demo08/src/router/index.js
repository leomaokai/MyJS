import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/user/User'
import Student from '@/components/student/Student'
import UserAdd from '@/components/user/UserAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'add',
          name: 'UserAdd',
          component: UserAdd
        }
      ]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
