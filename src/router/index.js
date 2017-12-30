/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage/MainPage'
import PersonalSpace from '@/page/PersonalSpace'
import ContentList from '@/components/MainPage/ContentList'
import RoadNav from '@/components/MainPage/RoadNav'
import ColumnList from '@/components/MainPage/ColumnList'
import RecommendList from '@/components/MainPage/RecommendList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        // name: 'HelloWorld',
        // component: HelloWorld
        redirect: '/MainPage'
    }, , {
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
        }, {
            name: 'Page3',
            path: 'Page3',
            components: {
                road_nav: RoadNav,
                content_vp: ContentList,
                column_vp: ColumnList,
                recommend_vp: RecommendList,
            }
        }]
    }]
})