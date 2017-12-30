<style>
  .box{width: 100%; height: 100%; margin-bottom:30px;}
  .box p{margin:0px; padding: 0px;}
  .box .top{width:100%; height:auto; border-bottom: 1px solid #3f3f3f;}
  .box .top p{height: 24px; color: #00645d; line-height: 25px; font-size:16px;}

  .box .bottom .item2{width:100%; height:auto; padding: 5px 0px 8px; margin:0px;}
  .box .bottom .item2 > a{font-size: 15px;padding: 5px 10px 10px;}
</style>
<template>
  <div class="box">
    <div class="top"><p>推荐内容</p></div>
    <div class="bottom">
      <ul>
        <template v-for="i in 5">
          <li class="item2">
            <a href="javascript(0)">微信小程序面试题，附答案</a>
            <p>1、简单描述下 微信小程序的相关文件类型？ 答：微信小程序项...</p>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendList'
}
</script>