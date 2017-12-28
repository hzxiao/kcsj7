<template>
  <div class="Page2">
    <route-view class="ContentListBox" name="ContentListBox"></route-view>
  </div>
</template>

<script>
import CLI from './ContentListItem'

export default {
  name: 'Page2',
  components: {
    ContentListBox: CLI
  }
}
</script>