<style lang="scss" scoped>
.fl {float:left;}
.fr {float:right;}
.PushlisherInfo{
  width:100%; margin-bottom: 13px;
  .header{
    width:100%; height:auto; 
    border-bottom: 1px solid #3f3f3f;
    &>p{
      height: 24px; color: #00645d; line-height: 25px; font-size:16px;
    }
  }
  .top{
    height:90px; border: 0px;
    .left{
      border:1px solid #eeeeee;
      width:67px; height:67px;
      margin:5px;
      .HeadImg{
        width: 95%; height: 95%;
      }
    }
    .right{
      width:100px; height:60px;
      margin:5px;
    }
  }
  .bottom{
    font-size:15px;
    li{
      padding-bottom: 10px;
      .Label{
        color:#555555;
        margin:0px 5px 0px 15px;
      }
    }
  }
}

</style>

<template>
  <div class="PushlisherInfo">
    <div class="header cf">
      <p>发布者资料</p>
    </div>
    <div class="top cf">
      <div class="left fl">
        <img src="../../../static/image/logo.jpeg" alt="" class="HeadImg">
      </div>
      <div class="right fl">
        <p class="name">帅哥</p>
        <p class="ShowDetailInfo">查看详细资料</p>
      </div>
    </div>
    <div class="bottom">
      <ul class="info">
        <li><span class="Label">用户等级：</span><span>100</span></li>
        <li><span class="Label">注册时间：</span><span>2017-11-11</span></li>
        <li><span class="Label">最后登录：</span><span>2017-12-12</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name:"PushlisherInfo"
}
</script>