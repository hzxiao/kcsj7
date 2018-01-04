<template>
  <div class="InfoShow">
    <div class="left fl">
      <road-nav v-bind:paths="paths" class="road-nav" name="road_nav"></road-nav>
      <content-vp class="content-vp" name="content_vp"></content-vp>
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
    'road-nav': RoadNav,
    'content-vp': ContentList
  }
}
</script>
