<style>
  .ShowContents_box {
    width: 100%; height: 100%;
    background: #fefefe;
  }
  .ShowContents_box .btn-group{
    width: 100%; height:47px;
    border-bottom: 3px solid #efefef;
    padding: 0px 50px;
    background: #00645D;
  }
  .ShowContents_box .btn-group button{
    margin:auto 20px;
  }
  .ShowContents_box .bottom{
    margin-right: 30px;
  }
    .ShowContents_box .contentList .container-fluid .row{
        height: 40px;
        line-height: 40px;
        
        border-bottom: 1px solid rgba(22,22,22,.1);
    }
</style>

<template>
  <div class="ShowContents_box">
    <div class="btn-group">
      <button class="btn btn-default m_btn" type="submit">全部</button>
      <button class="btn btn-default" type="submit">未发布</button>
    </div>
    <div class="contentList">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">文章标题</div>
          <div class="col-md-8">
            <div class="col-md-2">类目</div>
            <div class="col-md-2">状态</div>
            <div class="col-md-2">点击</div>
            <div class="col-md-4">发布时间</div>
            <div class="col-md-2">删除</div>
          </div>
        </div>
        <template v-for="item in items">
          <div class="row">
            <div class="col-md-4">{{item.title}}</div>
            <div class="col-md-8">
              <div class="col-md-2">{{item.category}}</div>
              <div class="col-md-2">{{item.state}}</div>
              <div class="col-md-2">{{item.clickCnt}}</div>
              <div class="col-md-4">{{item.publish}}</div>
              <div class="col-md-2">×</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="bottom cf">
      <div class="fr">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <template v-for="i in pageNum">
              <li><a href="#">{{i}}</a></li>
            </template>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ShowContents',
  data () {
    return {
      items: [
        {
          title: 'who am i',
          state: '未发布',
          category: '随笔',
          clickCnt: '100',
          publish: '2017-11-11',
          operation: '×'
        }, {
          title: 'who am i',
          state: '未发布',
          category: '随笔',
          clickCnt: '100',
          publish: '2017-11-11',
          operation: '×'
        }
      ],
      pageNum: 1
    }
  }
}
</script>
