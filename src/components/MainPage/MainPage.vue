<style>
.m_container{
    width:1170px;
    margin:auto;
}

.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}
    .MainPage > .box{
          width:1170px;
          margin:auto;
    }
    
.MainPage > .box .left{
    width:810px;
    height:auto;
}
.MainPage > .box .right{
    width:345px;
    height: auto
}
.logo img{
    padding-left: 50px;
    }
.MainPage > nav .zhuye{
    background-color: #00645D;
    
    }
.MainPage > nav .zhuye div ul li a{
    color: #fff;
}
.MainPage > nav .zhuye div ul li a:hover{
     color: yellow;
    }
.MainPage > nav{
        width: 100%;
        background-color: #00645D;
    }
</style>

<template>
    <div class="MainPage">
      <div class="page-header logo  m_container">
          <img src="../../../static/image/logo.gif">
<!--        <h1>Example page header <small>Subtext for header</small></h1>-->
      </div>

      <nav class="navbar navbar-default">
        <div class="container-fluid zhuye  m_container">
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav ziti">
<!-- >>>>>>> a3f08916e0a5779b6b569e7a1adb4e317fec6721 -->
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
          <template v-if="activeIdx === 2">
            <VueInterviewing></VueInterviewing>  
          </template>
          
          <template v-if="activeIdx === 99">
            <ContentDetailInfo v-bind:contentInfo="now_content"></ContentDetailInfo>
          </template>
        </div>
        <div class="right fr">
          <template v-if="activeIdx === 2"><pushlisherInfo name="pushlisherInfo"></pushlisherInfo></template>
          <column_vp v-bind:columnList="columnList" class="column-vp" name="column_vp"></column_vp>
          <recommend_vp class="recommend-vp" name="recommend_vp"></recommend_vp>
        </div>
      </div>
<!-- <<<<<<< HEAD
      <div class="MainBox cf" v-show="isMainPage_Page0"> -->
<!-- ======= -->
      <div class="m_container MainBox cf" v-show="isMainPage_Page0">
<!-- >>>>>>> a3f08916e0a5779b6b569e7a1adb4e317fec6721 -->
        <router-view name="MainPage_Page0"></router-view>
      </div>
      <div class=""></div>
    </div>
</template>

<script>
import ColumnList from '@/components/MainPage/ColumnList'
import RecommendList from '@/components/MainPage/RecommendList'
import VueInterviewing from '@/components/MainPage/VueInterviewing'
import ContentDetailInfo from '@/components/MainPage/ContentDetailInfo'
import PushlisherInfo from '@/components/MainPage/PushlisherInfo'
export default {
  name: 'MainPage',
  data () {
    return {
      activeIdx: 0,
      isMainPage_Page0: true,
      userInfo: JSON.parse(this.getCookie("user")),
      columnList:[],
      now_content: null
    }
  },
  create () {
    //this.userInfo = JSON.parse(this.getCookie("username"))
    // console.log("adasd")
    // this.userInfo = this.getCookie("username")
    this.NavClickEvent(0)
    console.log(activeIdx)
  },
  components: {
    'VueInterviewing': VueInterviewing,
    'column_vp': ColumnList,
    'recommend_vp': RecommendList,
    'ContentDetailInfo': ContentDetailInfo,
    'pushlisherInfo': PushlisherInfo
  },
  methods: {
    NavClickEvent: function (_activeIdx) {
      this.activeIdx = _activeIdx

      if (_activeIdx === 0) this.isMainPage_Page0 = true
      else this.isMainPage_Page0 = false
    },
    UpdataColumnListIfo: function (listInfo){
        this.columnList = listInfo;
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