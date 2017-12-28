<template>
  <div class="c">
    <div id="headTop" class="gray">
      <div class="logo" title="网站主页"></div>
      <div id="topBar">
        <ul>
            <li><a href="#">网站主页</a></li>
            <li><a>我的资料</a></li>
            <li><a>我的空间</a></li>
            <li><a>注销</a></li>
            <li><a>帮助</a></li>
        </ul>
      </div>
    </div>

    <div id="head">
        <div id="spaceName" class="white">
            <h1><a href="#">个人空间</a></h1>
            <p>http:</p>
        </div>
        <ul id="navMenu" class="fLeftChild">
            <li class="thisClass"><a href="index.php?uid=smith"><span>首页</span></a></li>
            <li><a href="index.php?uid=smith&action=article"><span>文章</span></a></li>
            <li><a href="index.php?uid=smith&action=infos"><span>个人资料</span></a></li>
            <li><a href="index.php?uid=smith&action=guestbook"><span>留言板</span></a></li>
        </ul>
        <div ></div>
    </div>
    <!-- 主要内容 -->
    <div class="content mT10">
        <div class="leftSide">
            <dl class="border">
                <dt class="caption"><strong>博主资料</strong></dt>
                <dd class="body" id="userInfo"> 
                    <a class="pic" href="index.php?uid=smith&amp;action=infos" title="我的资料">   
                        <h4 style=" text-align:center">史密斯</h4> 
                        <img src="static/image/photo.png" alt="史密斯的头像"> 
                    </a>
                    <div class="textCenter dashed pB10">
                        <h6 class="mT5 mB10"></h6>
                        <ul class="w50 buttonBlue grayA">
                            <li class="mB5"><a href="index.php?action=guestbook&amp;uid=smith"><span>给我留言</span></a></li>
                            <li class="mB5"><a href="pm.php?dopost=send&amp;uid=smith"><span>发送消息</span></a></li>
                            <li><a href="index.php?action=newfriend&amp;uid=smith"><span>加为好友</span></a></li>
                            <li><a href="index.php?action=blackfriend&amp;uid=smith"><span>加黑名单</span></a></li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                    <ul class="mT10 mL10 mB10 lh20">
                        <li>会员等级：注册会员</li>
                        <li>会员积分：236分</li>
                        <li>空间访问：47次</li>
                    </ul>
                </dd>
            </dl>

        </div>
        <div class="midContent">
            <!-- 首页，文章 -->
            <!-- 个人资料 -->
            <!-- 留言板 -->
        </div>
    </div>
  </div>
</template>

<<script>
export default {
  
}
</script>
