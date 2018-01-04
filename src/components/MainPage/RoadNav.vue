
<template>

  <!-- 这里获取数据来显示 -->
<!-- <<<<<<< HEAD
  <ol class="breadcrumb">
    <template v-for="idx in paths.length">
      <template v-if="idx < paths.length">
        <li><router-link v-bind:to="paths[idx-1].path">{{paths[idx-1].name}}</router-link></li>
      </template>
      <template v-else>
        <li>{{paths[idx-1].name}}</li>
      </template>
    </template>
  </ol>
======= -->

  <ol class="breadcrumb">

    <template v-for="idx in paths.length">

      <template v-if="idx < paths.length">

        <li><router-link v-bind:to="paths[idx-1].path">{{paths[idx-1].name}}</router-link></li>

      </template>

      <template v-else>

        <li>{{paths[idx-1].name}}</li>

      </template>

    </template>

  </ol>

<!-- >>>>>>> a3f08916e0a5779b6b569e7a1adb4e317fec6721 -->
</template>



<script>

export default {

  name: 'RoadNav',

  props: ['paths']

}
// <<<<<<< HEAD
// =======

// >>>>>>> a3f08916e0a5779b6b569e7a1adb4e317fec6721
</script>