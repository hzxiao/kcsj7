<template>
  <div class="InfoShow">
    <div class="left fl">
      <road_nav v-bind:paths="paths" class="road-nav" name="road_nav"></road_nav>
      <content_vp class="content-vp" name="content_vp"></content_vp>
    </div>
  </div>
</template>

<script>
import RoadNav from '@/components/MainPage/RoadNav'
import ContentList from '@/components/MainPage/ContentList'

export default {
  name: 'InfoShow',
  props: ['paths'],
  components: {
    'road_nav': RoadNav,
    'content_vp': ContentList
  }
}
</script>
