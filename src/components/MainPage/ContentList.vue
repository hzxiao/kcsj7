<style>
.m_contain{width:100%;}
.fl{float:left;}
.fr{float:right;}
.cf{clear:both; overflow: hidden;}

.ContentListItem .contentBox{width:100%;height:100px; margin:10px 0px;}
.ContentListItem .contentBox .left{width:100px;height:100%;padding-right: 0px; margin-right:5px;/*background-color: #678862;*/}
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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAdVBMVEX///8AAACZmZlVVVUiIiLd3d2qqqrW1tZ9fX0FBQX8/PyJiYkUFBQKCgo4ODjy8vJpaWl3d3e1tbWDg4MZGRleXl7MzMwnJycPDw/r6+s9PT0xMTFDQ0Nvb29lZWWRkZFLS0u8vLyjo6NQUFCWlpa6urodHR3425kzAAADVUlEQVRoge2Z6ZaiMBCFCYtI2HcQFbUd3/8RJwkgiIFszJwzc7g/ulGWj1TdSgrUtF27du369wWLw7KKbRj1CazpvAnGWGUgRaEyo2AxAAiUKREbAq6KDOgB56gv6kIgjq0GSQA4ru3PCSVWgxjAr9f22wSSQRVG6ANj/YiGUH6pQA7M81sCyVUgBjMSFoH4Ci6GPohYx5SE0spDkLfurGO6QjLlU38FFfPkQ1eQB1kGzDiKue4gJ1lIwRGtwcQ8R1LlghdHqLupBTSSkDOX//ukSGYFGZhnUuqTAhopg6GUMKtEG8oRyZWBpMj+tsVUPEB8SwJy41ivPsSYS6kyRQAO/vMQZoRCo7gG6E8lHDCOFmKiqMYDP4k67CE2Es32AGOtpihmXngqVLZ3nBfBtDC7ug9hZyWI4ot1LmKQH3zKE214QpQfIcjtfWMvEYuJ1eKZnHPEm81qE7URBJj8YzkLQZoBgi2WcedFDFIOkBTnJeNdJ9cffubKBogLcX/scM77gRDEf0P6zORc/Z4YBMARoiUV+sLjWY9JF+LERbFQMEFit/74MZxA+o4vZ3uZQJ54i2qBAN/6YfxsTSH9vOfprFkZN7km2UpokK7bf70/21MI+p+QW2sSNoTMSGOrMFUXinGQJDYDJMXhs3NcM6dVN+NFqKtj6vJljTHtVLXwDXG7HHUnls9lo+FIdA2IS4OkeE/tTL9qigHS9kZAqcM7fCNZSE6Gd9/QsZZHg/gFav/yz+8cs4foA8TRap1MgmZ8p3GybqzxhcpAV8xT2qRAII8RgjsS/0YKx2iLOWjh2iz5cUisPYV4GixKx3R6D05UyUHQHbthMoegCcTU4OUL4rMvtyQzokKQs+cQh32xNRE/MSEKIyF6He+QCSkVIUgVcOA6RKwlWpKXt/oKRKxNXZUTRHGGnj+/IaFkoSyjSvMLMjzWbqovSJj9BciWWVmG/IGAUSBwGxuvQzSYqtb9pyr6Glkfll/YimujV/tSuhuDZg1hbsiI3u6NNp492Moli/5M8T9AuiCOvX35GV3OhdPPyuB8M/LrJU7dpz63sMry65S3KNUTu2Y13JKQMm/vFvcrFgmIeUkE36eLQrJU4rea0hTR6aH0G8quXbt27dolo9+RRy+E8BpUsgAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="right fl">
          <div class="top cf">
            <p class="category fl">[{{item.category}}]</p>
            <p class="title fl"><a @click="EnterContent(item)">{{item.title}}</a></p>
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
  created(){
    console.log(this.listInfo)
    for(var i=0,j=this.listInfo.length-1; i<j; ++i, --j){
      let t = this.listInfo[i]
      this.listInfo[i] = this.listInfo[j]
      this.listInfo[j] = t
    }
  },
  methods:{
    getSortDesc: function(content){
      let len = content.length
      if(len <= 50)
        return content
      else
        return content.substring(0, 50) + '...'
    },
    EnterContent: function(contentInfo){
      this.$parent.$parent.$parent.now_content = contentInfo
      // console.log(this.$parent)
      // console.log(this.$parent.$parent)
      console.log(this.$parent.$parent.$parent.NavClickEvent(99))
    }
  }
}
</script>