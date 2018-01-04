<template>
  <InfoShow v-bind:paths="paths" v-bind:listInfo="titleList" v-bind:childList="childList"></InfoShow>
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
      ],
      rData: {},
      params: {"programaId":1, "programaName":"题库"},
      childList:[],
      titleList:[]
    }
  },
  created () {
    this.$api.post('/programa/listArticles', this.params, this.GetDataEvent)
    this.$parent.NavClickEvent(2)
  },
  components: {
    'InfoShow': InfoShow
  },
  methods:{
    GetDataEvent(_rData){
      // 没有判断
      if(_rData === null)
        console.log("栏目没有数据")
      else
      {
          this.rData = _rData
          while(this.paths.length > 1){
            this.paths.pop()
          }

          let listP = this.rData.data.listProgramas
          this.childList = []
          for(let i=0; i < listP.length; ++i){
            if(listP[i].parentId == null){
              this.paths.push({"name":listP[i].programaName, "path":listP[i].programaPath})
            }else{
              this.childList.push({"name":listP[i].programaName, "path":listP[i].programaPath})
            }
          }
          this.$parent.UpdataColumnListIfo(listP)

          this.titleList = this.rData.data.listArticles
          // for (var i = 0; i < this.rData.parents.length; i++) {
          //   if(this.rData.parents[i] == '题库'){
          //     this.paths.push({'name':'前端面试通', 'path':'/MainPage/page2'})
          //   }
          // }
      }
    }
  }
}
</script>