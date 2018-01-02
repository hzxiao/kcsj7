<style>
.m_container{
    width:1170px;
    margin:auto;
}

.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}

.MainPage > .box .left{
    width:810px;
    height:auto;
}
.MainPage > .box .right{
    width:345px;
    height: auto
}
</style>

<template>
    <div class="MainPage m_container">
      <div class="page-header">
        <h1>Example page header <small>Subtext for header</small></h1>
      </div>

      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li v-bind:class="{active: activeIdx === 0}" @click="NavClickEvent(0)"><router-link to="/MainPage/page0">主页</router-link></li>
              <li v-bind:class="{active: activeIdx === 2}" @click="NavClickEvent(2)"><router-link to="/MainPage/Page2">前端面试通</router-link></li>
<!--              <li v-bind:class="{active: activeIdx === 3}" @click="NavClickEvent(3, 2, '/MainPage/page3', '大前端知识')"><router-link to="/MainPage/Page3">大前端知识</router-link></li>-->
<!--              <li><router-link to="/MainPage/Page0">匿名社区</router-link></li>-->
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <template v-if="this.userInfo === null">
                <li><router-link to="/Login">登录</router-link></li>
                <li><router-link to="/Register">注册</router-link></li>
              </template>
              <template v-else>
                <li><router-link to="/BackstageMain/">{{this.userInfo.username}}的后台</router-link></li>
                <li><router-link to="/MainPage/" @click.native="Logout()">注销</router-link></li>
              </template>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <!-- vp:viewport -->
      <div class="box cf" v-show="!isMainPage_Page0">
        <div class="left fl">
          <VueInterviewing v-show="activeIdx === 2"></VueInterviewing>
          <ContentDetailInfo></ContentDetailInfo>
        </div>
        <div class="right fr">
          <column_vp class="column-vp" name="column_vp"></column_vp>
          <recommend_vp class="recommend-vp" name="recommend_vp"></recommend_vp>
        </div>
      </div>
      <div class="MainBox cf" v-show="isMainPage_Page0">
        <router-view name="MainPage_Page0"></router-view>
      </div>
    </div>
</template>

<script>
import ColumnList from '@/components/MainPage/ColumnList'
import RecommendList from '@/components/MainPage/RecommendList'
import VueInterviewing from '@/components/MainPage/VueInterviewing'
import ContentDetailInfo from '@/components/MainPage/ContentDetailInfo'
export default {
  name: 'MainPage',
  data () {
    return {
      activeIdx: 0,
      isMainPage_Page0: true,
      userInfo: JSON.parse(this.getCookie("user"))
    }
  },
  create () {
    //this.userInfo = JSON.parse(this.getCookie("username"))
    // console.log("adasd")
    // this.userInfo = this.getCookie("username")
    this.NavClickEvent(0)
  },
  components: {
    'VueInterviewing': VueInterviewing,
    'column_vp': ColumnList,
    'recommend_vp': RecommendList,
    'ContentDetailInfo': ContentDetailInfo
  },
  methods: {
    NavClickEvent: function (_activeIdx) {
      this.activeIdx = _activeIdx

      if (_activeIdx === 0) this.isMainPage_Page0 = true
      else this.isMainPage_Page0 = false
    },
    Logout: function(){
      // console.log("Asdsadas")
      this.delCookie("user")
      this.userInfo = null
    },
    Debug: function(){
      console.log(this.userInfo)
      console.log(JSON.parse(this.getCookie("username")))
    }
  }
}
</script>