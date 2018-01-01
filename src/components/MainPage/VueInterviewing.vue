<template>
  <InfoShow v-bind:paths="paths"></InfoShow>
</template>

<script>
import InfoShow from '@/components/MainPage/InfoShow'

export default {
  name: 'VueInterviewing',
  data () {
    return {
      paths: [
        {'path': '/MainPage/page0', 'name': '主页'},
        {'path': '/MainPage/page2', 'name': '前端面试通'}
      ]
    }
  },
  created () {
    this.$parent.NavClickEvent(2)
  },
  components: {
    'InfoShow': InfoShow
  }
}
</script>