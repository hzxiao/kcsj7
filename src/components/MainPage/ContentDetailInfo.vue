<template>
  <InfoShow v-bind:paths="paths"></InfoShow>
</template>

<script>
import InfoShow from '@/Components/MainPage/InfoShow'

export default {
  name: 'ContentDetailInfo',
  data () {
    return {
      paths:[]
    }
  },
  components: {
    'InfoShow': InfoShow
  }
}
</script>
