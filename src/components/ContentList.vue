<style>
.m_contain{width:100%;}
.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}

.ContentListItem .contentBox{width:100%;height:100px; margin:10px 0px;}
.ContentListItem .contentBox .left{width:100px;height:100%;padding-right: 0px; margin-right:5px;background-color: #678862;}
.ContentListItem .contentBox .left img{width:80px; height: 80px;}
.ContentListItem .contentBox .right{width:700px; height:100px; margin:2px 0px;}
.ContentListItem .contentBox .right .top{}
.ContentListItem .contentBox .right .mid{font-size:15px;}
.ContentListItem .contentBox .right .mid span{color: #AAA}
.ContentListItem .contentBox .right .mid p{margin:0px 8px;}
.ContentListItem .contentBox .right .bottom{font-size:15px;}
</style>

<template>
  <div  class="ContentListItem m_contain">
    <template v-for="i in 6">
      <div class="contentBox cf">
        <div class="left fl">
          <img src="" alt="">
        </div>
        <div class="right fl">
          <div class="top cf">
            <p class="category fl">[题库]</p>
            <p class="title fl">91道js面试题，附必过答案</p>
          </div>
          <div class="mid cf">
            <p class="date fl"><span>日期：</span>2017-12-18 12:21:36</p>
            <p class="clickCount fl"><span>点击：</span>139</p>
            <p class="good fl"><span>好评：</span>0</p>
          </div>
          <div class="bottom cf">
            <p class="content">JavaScript的组成 JavaScript 由以下三部分组成： ECMAScript（核心）：JavaScript 语言基础 DOM（文档对象模型）：规定了访问HTML和XML的接口 BOM（浏览器对象模型）：提供了浏览器窗口之间进行...</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ContentListItem',
  data () {
    return {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  }
}
</script>