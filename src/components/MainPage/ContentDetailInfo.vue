<template>
  <div>
    <InfoShow1 v-bind:paths="paths" v-bind:contentInfo="contentInfo"></InfoShow1>
  </div>
</template>

<script>
import InfoShow1 from '@/Components/MainPage/InfoShow1'

export default {
  name: 'ContentDetailInfo',
  data () {
    return {
      paths:[],
      info:{}
    }
  },
  props:['contentInfo'],
  components: {
    'InfoShow1': InfoShow1
  }
}
</script>
