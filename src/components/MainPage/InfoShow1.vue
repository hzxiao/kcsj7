<style lang="scss" scoped>
.InfoShow1{
  width:100%;
  .title{
    text-align: center;
    margin:20px auto 10px;
  }
  .contentInfo{
    text-align: center;
    margin:5px 0px;
    font-size: 12px;
    .label{
      margin-left: 8px;
      margin-right: 3px;
      color: #999;
    }
  }
}
</style>

<template>
  <div class="InfoShow1">
    <div class="left fl">
      <road_nav v-bind:paths="paths" class="road-nav" name="road_nav"></road_nav>
      <div class="title">
        <!-- <h2>{{contentInfo.title}}</h2> -->
          <h2>40 个重要的 HTML5 面试问题及答案</h2>
      </div>
      <div class="contentInfo">
<!--           <span class="label">时间：</span><span>{{contentInfo.update_time}}</span>
        <span class="label">作者：</span><span>{{contentInfo.author}}</span> -->
        <span class="label">时间：</span><span>2017-12-29 16:46</span>
        <span class="label">作者：</span><span>小邱</span>
      </div>
      <div class="content">
        {{contentInfo.content}}
      </div>
    </div>
  </div>
</template>

<script>
import RoadNav from '@/components/MainPage/RoadNav'

export default {
  name: 'InfoShow1',
  props: ['paths', 'contentInfo'],
  components: {
    'road_nav': RoadNav,
  }
}
</script>
