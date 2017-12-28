<style>
  .box{width: 100%; height: 100%; margin-bottom:30px;}
  .box p{margin:0px; padding: 0px;}
  .box .top{width:100%; height:auto; border-bottom: 1px solid #3f3f3f;}
  .box .top p{height: 24px; color: #00645d; line-height: 25px; font-size:16px;}
  .box .bottom{width:100%; height:auto;}
  .box .bottom .item{width:120px; height: 30px; margin: 6px 0px 0px 10px;}
  .box .bottom .item > p{text-align: center; font-size:15px; line-height: 30px; color: #00645d;}

</style>
<template>
  <div class="box">
    <div class="top"><p>栏目列表</p></div>
    <div class="bottom cf">
      <template v-for="i in 3">
        <div class="item fl">
          <p>HTML5</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnList'
}
</script>