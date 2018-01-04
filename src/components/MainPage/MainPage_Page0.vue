<style lang="scss" scoped>
.MainPage_Page0 {
  div {border: 1px solid #efefef;}
  margin-bottom: 30px;
  &>.left {
    width: 70%;
    padding-right: 10px;
    &>.top {
      height: 500px;
      padding-bottom: 10px;
      &>.left {
        width: 40%; height: 100%;
        padding-right: 10px;
        &>div {width: 100%; height: 50%;}
      }
      &>.right {
        width: 60%; height: 100%;
        padding-left: 10px;
        border: 1px solid #efefef;
          
      }
    }
    &>.middle {
      width: 100%; height:200px;
      padding-bottom: 10px;
        
    }
    &>.bottom {
      width: 100%; height: 520px;
      &>div {
        width: 50%; height: 50%;
        padding: 10px;
        float: left;
      }
    }

  }
  &>.right {
    width: 30%;
    &>.top{width: 100%; height: 400px;}
    &>.middle{width: 100%; height:280px;}  
    &>.bottom{width: 100%; height:230px;}
  }
}
</style>

<template>
  <div class="MainPage_Page0 cf">
    <div class="left fl">
      <div class="top cf">
        <div class="left fl">
          <div class="top cf">
            <CarouselImg1 name="CarouselImg1"></CarouselImg1>
          </div>
          <div class="bottom cf">
            <top_InfoList1 title="特别推荐" type="A" v-bind:messages="top_InfoList1_data" name="top_InfoList1"> </top_InfoList1>
            
          </div>
        </div>
        <div class="right fl" style="background: url(../../../static/image/123.png) no-repeat;background-size:100% auto; ">
<!--        <p>empty</p><p>empty</p><p>empty</p><p>empty</p><p>empty</p><p>empty</p>-->
      </div>
      </div>
<!--
      <div class="middle cf">
        <CarouselImg2 name="CarouselImg2"></CarouselImg2>
      </div>
-->
      <div class="bottom cf">
        <div class="bot_InfoList fl">
          <bot_InfoList1 title="vue面试通" type="A" v-bind:messages="bot_InfoList1_data"></bot_InfoList1>
             
        </div>
        <div class="bot_InfoList fl">
          <bot_InfoList2 title="前端面试通" type="A" v-bind:messages="bot_InfoList2_data"></bot_InfoList2>
        </div>
        <div class="bot_InfoList fl">
          <bot_InfoList3 title="大前端知识" type="A" v-bind:messages="bot_InfoList3_data"></bot_InfoList3>
        </div>
        <div class="bot_InfoList fl">
          <bot_InfoList4 title="挨踢职场" type="A" v-bind:messages="bot_InfoList4_data"></bot_InfoList4>
        </div>
      </div>
    </div>
    <div class="right fl">
      <div class="top cd" >
        <p>empty</p><p>empty</p><p>empty</p><p>empty</p><p>empty</p><p>empty</p>
        <router-view name="r_t_InfoList1"></router-view>
      </div>
      <div class="middle cd">
        <r_m_InfoList1 title="推荐内容" type="B" v-bind:messages="recommendContents"></r_m_InfoList1>
      </div>
      <div class="bottom cd">
        <r_b_InfoList1 title="本月热点" type="B" v-bind:messages="r_b_InfoList1_data"></r_b_InfoList1>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselImg1 from '@/components/common/CarouselImg1'
import InfoList1 from '@/components/common/InfoList1'

export default {
  name: 'MainPage_Page0',
  components: {
    'CarouselImg1': CarouselImg1,
    'bot_InfoList1': InfoList1,
    'bot_InfoList2': InfoList1,
    'bot_InfoList3': InfoList1,
    'bot_InfoList4': InfoList1,
    'top_InfoList1': InfoList1,
    'r_m_InfoList1': InfoList1,
    'r_b_InfoList1': InfoList1
  },
  data () {
    return {
      top_InfoList1_data: [
        {'title': '微信小程序面试题，附答', date: '12-25'},
        {'title': 'bbbbb', date: '11-25'}
      ],
      'bot_InfoList1_data': [
        {'title': '微信小程序面试题，附答', date: '12-25'},
        {'title': 'bbbbb', date: '11-25'}
      ],
      'bot_InfoList2_data': [
        {'title': '微信小程序面试题，附答', date: '12-25'},
        {'title': 'bbbbb', date: '11-25'}
      ],
      'bot_InfoList3_data': [
        {'title': '微信小程序面试题，附答', date: '12-25'},
        {'title': 'bbbbb', date: '11-25'}
      ],
      'bot_InfoList4_data': [
        {'title': '微信小程序面试题，附答', date: '12-25'},
        {'title': 'bbbbb', date: '11-25'}
      ],
      recommendContents: [
        {'title': '类型BBBB'},
        {'title': '类型BBBBasdasdasdfsaedfs'}
      ],
      r_b_InfoList1_data: [
        {'title': '本月热点本月热点本月热点'},
        {'title': '类型BBBBasda本月热点dasdfsaedfs'}
      ]
    }
  },
  created () {
    // 获取数据
    this.$parent.NavClickEvent(0)
    //Vue.property.$api.get('ContentMgr', 'recommondContents', this.successRC, null)
  },
  methods: {
    successRC: function (data) {
      this.recommendContents = data
    }
  }
}
</script>