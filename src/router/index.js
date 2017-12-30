/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import VueQuillEditor from 'vue-quill-editor'

import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage/MainPage'
import PersonalSpace from '@/components/PersonalSpace/PersonalSpace'
import Register from '@/components/Register/Register'
import Login from '@/components/Login/Login'
import ContentList from '@/components/MainPage/ContentList'
import RoadNav from '@/components/MainPage/RoadNav'
import ColumnList from '@/components/MainPage/ColumnList'
import RecommendList from '@/components/MainPage/RecommendList'

import BackstageMain from '@/components/Backstage/BackstageMain'
import ShowContents from '@/components/Backstage/ShowContents'
import CreateContent from '@/components/Backstage/CreateContent'

Vue.use(VueQuillEditor)
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
    }, {
        path: '/BackstageMain/',
        name: 'BackstageMain',
        component: BackstageMain,
        children: [{
          path: '/',
          name: 'ShowContents',
          component: ShowContents
        }, {
          path: 'CreateContent',
          name: 'CreateContent',
          component: CreateContent
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