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
    <template v-for="item in listInfo">
      <div class="contentBox cf">
        <div class="left fl">
          <img src="" alt="">
        </div>
        <div class="right fl">
          <div class="top cf">
            <p class="category fl">[{{item.category}}]</p>
            <p class="title fl">{{item.title}}</p>
          </div>
          <div class="mid cf">
            <p class="date fl"><span>日期：</span>{{item.createDate}}</p>
            <p class="clickCount fl"><span>点击：</span>{{item.viewCount}}</p>
            <p class="good fl"><span>好评：</span>{{item.goodCommentCount}}</p>
          </div>
          <div class="bottom cf">
            <p class="content">{{getSortDesc(item.content)}}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ContentListItem',
  props:['listInfo'],
  methods:{
    getSortDesc: function(content){
      let len = content.length
      if(len <= 50)
        return content
      else
        return content.substring(0, 50) + '...'
    }
  }
}
</script>