/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import PersonalSpace from '@/page/PersonalSpace'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/MainPage',
        name: '/MainPage',
        component: MainPage
    }, {
        path: '/PersonalSpace',
        name: '/PersonalSpace',
        component: PersonalSpace
    }]
})