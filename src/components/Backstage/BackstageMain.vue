<style> 
  .fl{float:left;}
  .fr{float:right;}
  .cf{clear:both; overflow: hidden;}
  
  .BackstageMain li{
    padding-top: 10px; padding-bottom: 10px; line-height: 20px;
  }
  .BackstageMain .nav_contianer{
    width:1170px;
    margin:auto; padding:5px 0px; height:auto;
  }
  .BackstageMain .m_container{
    width:1170px; margin:auto;
  }
  .BackstageMain .m_header{
    margin-bottom: 30px;
  }
  .BackstageMain .m_body{
    width:auto; 
    padding: 30px 0px;
/*    height:1000px;*/
    background: #efefef;
  }
  .BackstageMain .left{
    width: 25%; padding: 15px;
    height:500px;
  }
  .BackstageMain .left .box {
    width: 100%; height: 100%; padding: 50px 0px;
    background: #fefefe;
  }
  .BackstageMain .left .header{width: 100%; background: #bcafbd;}
  .BackstageMain .left .header p{
    width: 100%; font-size: 23px;
    padding: 5px 0px;
    margin-left:30px;
  }
  .BackstageMain .left .content{width:100%; padding: 10px;}
  .BackstageMain .left .content img{
    width: 20px; height: 20px; background: #000000;
  }
  
  .BackstageMain .right{
    width: 74%; padding: 15px 20px;
    margin-right: 1%;
    height:auto;
    background: #aaa55a;
  }
</style>

<template>
  <div class="BackstageMain">
    <!--  -->
    <nav class="navbar navbar-default navbar-static-top">
      <div class="nav_contianer">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/MainPage/Page2">
                中午好, {{user.name}}[退出]
              </router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/MainPage/Page2">主页</router-link></li>
            <li><router-link to="/MainPage/Page2">个人空间</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- -->
    <div class="m_container">
      <div class="page-header m_header">
        <h1>Example page header <small>Subtext for header</small></h1>
      </div>
      <div class="m_body cf">
        <div class="left fl">
          <div class="box">
            <div class="item1">
              <div class="header">
                <p>主要的东西</p>
              </div>
              <div class="content">
                <ul>
                  <li>
                    <img src="">
                    <span><router-link to="./">文章</router-link></span>
                  </li>
                  <li>
                    <img src="">
                    <span><router-link to="./CreateContent">写文章</router-link></span>
                  </li>
                </ul>
                
              </div>
            </div>
            <div class="item2">
              <div class="header">
                <p>次要的东西</p>
              </div>
              <div class="content">
                <img src="">
                <span>管理</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right fl">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackstageMain',
  data () {
    return {
      user: {
        id: '123',
        name: 'darktong'
      }
    }
  }
}
</script>