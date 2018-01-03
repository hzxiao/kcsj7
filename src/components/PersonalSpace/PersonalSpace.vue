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
                <h1><a>{{curLoginUser.username}}的个人空间</a></h1>
                <p>http:</p>
            </div>
            <ul id="navMenu" class="fLeftChild">
                <li v-bind:class="{thisClass: menuIndex == 1}" ><a  @click="clickMenu(1)"><span>首页</span></a></li>
                <li v-bind:class="{thisClass: menuIndex == 2}"><a @click="clickMenu(2)"><span>文章</span></a></li>
                <li v-bind:class="{thisClass: menuIndex == 3}"><a @click="clickMenu(3)"><span>个人资料</span></a></li>
                <li v-bind:class="{thisClass: menuIndex == 4}"><a @click="clickMenu(4)"><span>留言板</span></a></li>
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
                            <h4 style=" text-align:center">{{curLoginUser.username}}</h4> 
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
                <div class="border" v-show="showArticle">
                    <dl>
                        <dt class="caption"><strong>文章</strong></dt>
                        <dd class="body">
                            <div class="mp10 dashed" v-for="article in articleList">
                                <div class="mB10">
                                    <h3 class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517">{{article.title}}</a></h3>
                                    <span class="mL5 aGray">({{fmtTime(article.createDate)}})</span>
                                </div>
                                <p class="f14 aBlack lh22">{{article.content}}</p>
                                <div id="artInfo">
                                    <strong class="fLeft"><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="点击查看全文">点击查看全文</a></strong>
                                    <ul class="fRight fLeftChild overflow">
                                        <li><a href="index.php?uid=smith&amp;action=viewarchives&amp;aid=1517" target="_blank" title="程序员如何在技术面试表现得更出色？">浏览</a>({{article.viewCount}})</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">评论</a>({{article.commentCount}})</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">好评</a>({{article.goodCommentCount}})</li>
                                        <li><a href="/plus/feedback.php?aid=1517" target="_blank">差评</a>({{article.bsdCommentCount}})</li>
                                    </ul>
                                </div>
                                <div class="clearfix pB10"></div>
                            </div>
                            <!-- <div class="mp10 dashed">
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
                            </div> -->
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
                <div v-show="showMsgBoard">
                    <dl class="border">
                        <dt class="caption"><strong>留言</strong></dt>
                        <dd class="body pB10">         <div class="allList pTB10 dashed" v-for="msg in msgBoardList">
                            <div class="img"> <a href="index.php?uid=darktong&amp;action=infos" title="darktong" target="_blank">	
                            <img src="static/image/photo.png" width="50" height="50"> </a> </div>
                            <div class="txt">
                                <p class="p1 mB5">
                                </p><h5 class="fLeft"><a href="index.php?uid=darktong">{{msg.createName}}</a>：</h5>
                                        <span class="aGray fRight">{{fmtTime(msg.createDate)}}</span>
                                <p></p>
                                <p class="p2 lh22 f14 aBlack clear">{{msg.content}}</p>
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
                                <div  name="form1" class="f14">
                                    <input type="hidden" name="action" value="guestbooksave">
                                    <input type="hidden" name="uidnum" value="5">
                                    <input type="hidden" name="uid" value="smith">
                                    <textarea name="msg" id="msg" v-model="msgBoardText" style="width:98%; height:120px;" class="clear mB10 text"></textarea>
                                    <button class="fRight button buttonBlue2" @click="submmitMsgBoard()" type="submit">提交</button>
                                </div>
                            <p class="mp10 textCenter aGray">以上网友发言只代表其个人观点，不代表本站的观点或立场。</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    id: "c",
    data() {
      return {
        showArticle: true,
        showInfo: false,
        showMsgBoard: false,
        msgBoardText: null,
        menuIndex: 1,
        viewUserId: 0,
        curLoginUser:  JSON.parse(this.getCookie("user")),
        articleList:[],
        msgBoardList:[],
        userInfo:{},
      }
    },

    created() {
        // console.log(fmtTime(122))
        this.viewUserId = this.$route.query.userId;
        this.$api.post('article/listArticles', {userId: parseInt(this.viewUserId)}, this.listArticleEvent);

    },
    methods:{
        clickMenu: function(index) {
            this.menuIndex = index;            
            switch (index) {
                case 1:
                    this.showArticle = true;
                    this.showInfo = false;
                    this.showMsgBoard = false;
                    this.$api.post('article/listArticles', {userId: parseInt(this.viewUserId)}, this.listArticleEvent);
                    break;

                case 2:
                    this.showArticle = true;
                    this.showInfo = false;
                    this.showMsgBoard = false;
                    this.$api.post('article/listArticles', {userId: this.viewUserId}, this.listArticleEvent);
                    break;
                case 3:
                     this.showArticle = false;
                    this.showInfo = true;
                    this.showMsgBoard = false;
                    this.$api.get('user/'+this.viewUserId, null, this.loadUserInfoEvent);
                    break;

                case 4:
                    this.showArticle = false;
                    this.showInfo = false;
                    this.showMsgBoard = true;
                    this.$api.post('board/listMessages', {toUserId: parseInt(this.viewUserId)}, this.listMsgBoardEvent);
                    break;
                default:
                    break;
            }
        },

        listArticleEvent: function(resp) {
            if (resp.code == "0000") {
                this.articleList = resp.data.articleList;
            } else {
                this.$layer.msg(resp.msg);
            }
        },
        loadUserInfoEvent(resp){
            if (resp.code == "0000") {
                this.userInfo = resp.data.user;
            } else {
                this.$layer.msg(resp.msg);
            }
        },

        listMsgBoardEvent: function(resp) {
            if (resp.code == "0000") {
                this.msgBoardList = resp.data.messageBoardList;
            } else {
                this.$layer.msg(resp.msg);
            }
        },

        submmitMsgBoard: function() {
            if (!this.msgBoardText || this.msgBoardText === '') {
                return;
            }
            if (!this.curLoginUser || !this.curLoginUser.token || this.curLoginUser.token === '') {
                this.$layer.msg("当前未登录，请先登录");
                return;
            }
            //do submmit
            this.$api.post('api/board/add?token='+this.curLoginUser.token, {userId: parseInt(this.viewUserId), title: 'zz', content: this.msgBoardText}, this.submmitMsgBoardEvent);

        },

        submmitMsgBoardEvent: function(resp) {
            if (resp.code == "0000") {
                this.userInfo = resp.data.user;
                this.msgBoardText = '';
                this.$layer.msg(resp.msg);
                this.$api.post('board/listMessages', {toUserId: parseInt(this.viewUserId)}, this.listMsgBoardEvent);

            } else {
                this.$layer.msg(resp.msg);
            }
        },

        fmtTime(timestamp) {
            var date = new Date(timestamp);
            var s = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            +' '+date.getHours()+':'+date.getMinutes();
            return s;
        }
    },
}

    

</script>
