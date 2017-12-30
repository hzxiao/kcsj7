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
              <li class="active"><router-link to="/MainPage/page0">主页</router-link></li>
              <li><router-link to="/MainPage/Page2">前端面试通</router-link></li>
              <li><router-link to="/MainPage/Page3">大前端知识</router-link></li>
              <li><router-link to="/MainPage/Page1">匿名社区</router-link></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <!-- vp:viewport -->
      <div class="box cf">
        <div class="left fl">
          <router-view class="road-nav" name="road_nav"></router-view>
          <router-view class="content-vp" name="content_vp"></router-view>
        </div>
        <div class="right fr">
          <router-view class="column-vp" name="column_vp"></router-view>
          <router-view class="recommend-vp" name="recommend_vp"></router-view>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>