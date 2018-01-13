<style lang="scss" scoped>
.InfoShow{
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
  <div class="InfoShow">
    <div class="left fl">
      <road_nav v-bind:paths="paths" class="road-nav" name="road_nav"></road_nav>
      <content_vp v-bind:listInfo="listInfo" class="content-vp" name="content_vp"></content_vp>
    </div>
  </div>
</template>

<script>
import RoadNav from '@/components/MainPage/RoadNav'
import ContentList from '@/components/MainPage/ContentList'

export default {
  name: 'InfoShow',
  props: ['paths', 'listInfo'],
  components: {
    'road_nav': RoadNav,
    'content_vp': ContentList
  }
}
</script>
