<style>
.m_container{
    width:1170px;
}
.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}

/**********************************************************/
.ChildPage1 li,ul,p{list-style: none;padding: 0;margin:0;}
.ChildPage1 .M_header .box{
    height:100px;
    margin:auto;
    margin: 20px auto 25px auto;
}
.ChildPage1 .M_header .box .left{
    width: 100px;
    height: 100%;
    background-color: #3f3f3f;
    margin:0px 20px;
}
/* 外框 */
.MainPage .M_header .box .right .top{margin-bottom: 15px;}
.MainPage .M_header .box .right .top *{font-size:40px;}
.MainPage .M_header .box .right .bottom *{font-size:25px;}

.MainPage .M_nav{height:auto; width:100%;background-color: #74c2f7; padding: 12px 0px;}
.MainPage .M_nav .box{height:24px; margin: auto;}
.MainPage .M_nav .box ul li{float:left;margin:0px 15px;}
</style>

<template>
    <div class="MainPage">
        <header class="M_header">
            <div class="box m_container cf">
                <div class="left fl">
                    <img src="" alt="没图片">
                </div>
                <div class="right fl">
                    <div class="top"><p>郭智均</p></div>
                    <div class="bottom"><p>非常帅气、非常叼、能上天、能遁地</p></div>
                </div>
            </div>
        </header>
        <nav class="M_nav">
            <div class="box m_container cf">
                <ul class="fl">
                    <li><router-link to="./page0">主页</router-link></li>
                    <li><router-link to="./page1">前端面试通</router-link></li>
                    <li><router-link to="./page1">大前端知识</router-link></li>
                    <li><router-link to="./page1">匿名社区</router-link></li>
                </ul>
                <ul class="fr">
                    <li>登录</li>
                    <li>|</li>
                    <li>注册</li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>