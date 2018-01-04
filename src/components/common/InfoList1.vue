<style lang="scss" scoped>
  .InfoList1 {
    width:100%; height:100%;
    .header {
      width:100%;
      border-bottom: 1px solid #bbb;
      padding-left:10px;
      color: #00645D;
      background-color:#fff ;
    }
    .bottom {
      width: 100%;
      margin-top: 5px;
      padding: 0px 10px;
      &>ul {list-style-type: disc;}
      li {
        height: 25px;
        &>.title1 {width:80%; float: left;}
        &>.date1 {width:20%; float: left; color: #aaa;}
        &>.title2 {width: 100%; float: left;}
      }
    }
  }
</style>

<template>
  <div class="InfoList1">
    <div class="header">
      <p>{{title}}</p>
    </div>
    <div class="bottom">
      <ul>
        <template v-for="msg in messages">
          <li class="cf">
            <template v-if="type === 'A'">
              <p class="date1">{{msg.date}}</p>
              <p class="title1">{{msg.title}}</p>
            </template>
            <template v-else-if="type === 'B'">
              <p class="title2">· {{msg.title}}</p>
            </template>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoList1',
  props: ['messages', 'type', 'title']
}
</script>