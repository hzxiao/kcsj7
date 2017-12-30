/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import PersonalSpace from '@/page/PersonalSpace'
import Register from '@/page/Register'
import Login from '@/page/Login'
import ContentList from '@/components/ContentList'
import RoadNav from '@/components/RoadNav'
import ColumnList from '@/components/ColumnList'
import RecommendList from '@/components/RecommendList'


Vue.use(Router);
Vue.use(VueResource);


export default new Router({
    routes: [{
        path: '/',
        // name: 'HelloWorld',
        // component: HelloWorld
        redirect: '/MainPage'
    }, {
        path: '/PersonalSpace',
        name: '/PersonalSpace',
        component: PersonalSpace
    }, {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage,
        children: [{
            name: 'Page2',
            path: 'Page2',
            components: {
                road_nav: RoadNav,
                content_vp: ContentList,
                column_vp: ColumnList,
                recommend_vp: RecommendList,
            }
        }]
    }, {
        path: '/Login',
        name: '/Login',
        component: Login
    }, {
        path: '/Register',
        name: '/Register',
        component: Register
    }]
})