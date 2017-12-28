<style>
.m_container{
    width:1170px;
    margin:auto;
}
.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}
</style>

<template>
    <div class="MainPage">
        <div class="page-header">
          <h1>Example page header <small>Subtext for header</small></h1>
        </div>

        <nav class="navbar navbar-default m_container">
          <div class="container-fluid">
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul class="nav navbar-nav">
                <li class="active"><router-link to="/MainPage/page0">主页</router-link></li>
                <li><router-link to="/MainPage/Page2">前端面试通</router-link></li>
                <li><router-link to="/MainPage/Page1">大前端知识</router-link></li>
                <li><router-link to="/MainPage/Page1">匿名社区</router-link></li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>