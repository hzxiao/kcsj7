<template>
  <div class="c">
    <div>
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
                            <h4 style=" text-align:center">{{userInfo.username}}</h4> 
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
                <div class="border" v-show="article">
                    <dl>
                        <dt class="caption"><strong>文章</strong></dt>
                        <dd class="body">
                            <div class="mp10 dashed">
                                <div class="mB10">
                                    <h3 class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517">程序员如何在技术面试表现得更出色？</a></h3>
                                    <span class="mL5 aGray">(2017-12-18 12:06)</span>
                                </div>
                                <p class="f14 aBlack lh22">像专业人士那样聊天 在深入代码之前，大部分面试官都喜欢聊聊你的背景。他们想知道： 关于编程的元认知 。你有考虑过如何才能更好地编程吗？（译者注：元认知（Metacognition）或译</p>
                                <div id="artInfo">
                                    <strong class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="点击查看全文">点击查看全文</a></strong>
                                    <ul class="fRight fLeftChild overflow">
                                        <li><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="程序员如何在技术面试表现得更出色？">浏览</a>(2)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">评论</a>(0)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">好评</a>(0)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">差评</a>(0)</li>
                                    </ul>
                                </div>
                                <div class="clearfix pB10"></div>
                            </div>
                            <div class="mp10 dashed">
                                <div class="mB10">
                                    <h3 class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517">程序员如何在技术面试表现得更出色？</a></h3>
                                    <span class="mL5 aGray">(2017-12-18 12:06)</span>
                                </div>
                                <p class="f14 aBlack lh22">像专业人士那样聊天 在深入代码之前，大部分面试官都喜欢聊聊你的背景。他们想知道： 关于编程的元认知 。你有考虑过如何才能更好地编程吗？（译者注：元认知（Metacognition）或译</p>
                                <div id="artInfo">
                                    <strong class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="点击查看全文">点击查看全文</a></strong>
                                    <ul class="fRight fLeftChild overflow">
                                        <li><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="程序员如何在技术面试表现得更出色？">浏览</a>(2)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">评论</a>(0)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">好评</a>(0)</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">差评</a>(0)</li>
                                    </ul>
                                </div>
                                <div class="clearfix pB10"></div>
                            </div>
                        </dd>
                    </dl>
                </div>
                <!-- 个人资料 -->
                <div v-show="showInfo">
                    <dl class="border">
                        <dt class="caption"><strong>基本资料</strong></dt>
                        <dd class="body pB10">
                            <table width="700" align="center" class="tList">
                                <tbody><tr>
                                    <td>昵称：</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td width="101">性别： </td>
                                    <td width="593">男</td>
                                </tr>
                                <tr>
                                    <td>目前所在地：</td>
                                    <td> 省份：
                                                    &nbsp; 城市：
                                    </td>
                                </tr>
                                <tr>
                                    <td>家乡所在地：</td>
                                    <td> 省份：
                                                    &nbsp; 城市：
                                    </td>
                                </tr>
                                <tr>
                                    <td>出生日期：</td>
                                    <td>1980-01-01</td>
                                </tr>
                                <tr>
                                    <td>交友目的：</td>
                                    <td>保密</td>
                                </tr>
                                <tr>
                                    <td>婚姻状况：</td>
                                    <td>保密</td>
                                </tr>
                                <tr>
                                    <td>星座：</td>
                                    <td>白羊座</td>
                                </tr>
                                <tr>
                                    <td>血型：</td>
                                    <td>保密</td>
                                </tr>
                                <tr>
                                    <td>身高：</td>
                                    <td>&gt;160 厘米</td>
                                </tr>
                                <tr>
                                    <td>体型：</td>
                                    <td>保密</td>
                                </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                    <dl class="border mT10">
                        <dt class="caption"><strong>经济状况</strong></dt>
                        <dd class="body pB10">
                            <table width="700" align="center" class="tList">
                                <tbody>
                                    <tr>
                                        <td width="101">收入情况：</td>
                                        <td width="593">保密</td>
                                    </tr>
                                    <tr>
                                        <td>教育程度：</td>
                                        <td>保密</td>
                                    </tr>
                                    <tr>
                                        <td>住房情况：</td>
                                        <td>保密</td>
                                    </tr>
                                    <tr>
                                        <td>所属行业：</td>
                                        <td>保密</td>
                                    </tr>
                                    <tr>
                                        <td>掌握语言：</td>
                                        <td>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                    
                    <dl class="border mT10">
                        <dt class="caption"><strong>兴趣爱好</strong></dt>
                        <dd class="body pB10">
                            <table width="700" align="center" class="tList">
                            <tbody>
                                <tr>
                                    <td width="101">是否喝酒：</td>
                                    <td width="593">保密</td>
                                </tr>
                                <tr>
                                    <td>是否抽烟：</td>
                                    <td>保密</td>
                                </tr>
                                <tr>
                                    <td>兴趣爱好：</td>
                                    <td> </td>
                                </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                </div>
                <!-- 留言板 -->
                <div>
                    <dl class="border">
                        <dt class="caption"><strong>留言</strong></dt>
                        <dd class="body pB10">         <div class="allList pTB10 dashed">
                            <div class="img"> <a href="index.php?uid=darktong&amp;action=infos" title="darktong" target="_blank">	
                            <img src="static/image/photo.png" width="50" height="50"> </a> </div>
                            <div class="txt">
                                <p class="p1 mB5">
                                </p><h5 class="fLeft"><a href="index.php?uid=darktong">darktong</a>：</h5>
                                        <span class="aGray fRight">2017-12-30 00:18</span>
                                <p></p>
                                <p class="p2 lh22 f14 aBlack clear">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div class="clearfix"></div>
                            </div>
                                    <div class="fRight mTB10 pd10"><span>共 1 页/1条记录</span></div>
                            <div class="clearfix"></div>
                        </dd>
                    </dl>

                    <dl class="border mT10">
                        <dt class="caption"><strong>给我留言</strong></dt>
                            <dd class="body pB10">
                                <form action="index.php" name="form1" method="post" class="f14">
                                    <input type="hidden" name="action" value="guestbooksave">
                                    <input type="hidden" name="uidnum" value="5">
                                    <input type="hidden" name="uid" value="smith">
                                    <textarea name="msg" id="msg" style="width:98%; height:120px;" class="clear mB10 text"></textarea>
                                    <button class="fRight button buttonBlue2" type="submit">提交</button>
                                </form>
                            <p class="mp10 textCenter aGray">以上网友发言只代表其个人观点，不代表本站的观点或立场。</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<<script>
export default {
    id: "c",
    data() {
      return {
        message: 'Hello Vue.js!',
         article:false,
         userInfo: JSON.parse(this.getCookie("user"))
      }
    },
    created() {
        if(this.userInfo == null)
            this.$router.push("/")
    }
}



</script>
