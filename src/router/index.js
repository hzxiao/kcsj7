import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/MainPage'
    }, {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          name: 'Page2',
          path: 'Page2',
          component: Page2
        }
      ]
    }
  ]
})
