<style lang="scss" scoped>
.CreateContentBox {
  width: 100%; height: auto;
  padding: 5px 40px 5px;
  background: #fffff3;
  
  .top {
    padding-bottom: 30px;
    .title {
      color: #fff;
    }
    .infoBox {
      padding: 0px 30px;
      div {
        float: left;
        text-align: right;
        width: 120px;
        padding-right:20px;
      }
    }
  }
  .bottom {
    height: 750px;
    margin-bottom: 10px;
    .title {
      color: chocolate;
      border-bottom: 1px solid #efefef;
    }
    
    .m_editor {
      padding: 30px;
    }
  }
  .btpGroup {
    height:60px; margin:auto 0px;
    & > button {
      float: right;
      margin-right:60px;
      font-size: 20px;
    }
  }
}
</style>

<template>
  <div class="CreateContentBox">
    <div class="top">
      <div class="title">
        <p>文章基本信息</p>
      </div>
      <div class="infoBox">
        <ul>
          <li class="cf"><div><span>标题：</span></div><input></li>
          <li class="cf"><div><span>分类：</span></div><input></li>
          <li class="cf"><div><span>信息摘要：</span></div><input></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        <p>详细内容</p>
      </div>
      <div class="m_editor">
        <qeditor></qeditor>
      </div>
    </div>
    <div class="btpGroup">
      <button class="btn btn-default" type="submit">保存</button>
      <button class="btn btn-default" type="submit">发布</button>
    </div>
  </div>
</template>

<script>
import QEditor from '@/components/common/QEditor'

export default{
  name: 'CreateContent',
  components: {
    'qeditor': QEditor
  }
}
</script>
