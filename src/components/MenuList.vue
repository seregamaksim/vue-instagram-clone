<template>
  <div class="menu-list">
    <div class="menu-list__item">
      <MenuItem href="/" nameIcon="home" />
      <MenuItem href="/about" nameIcon="direct" />
    </div>
    <div class="menu-list__item"></div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'

export default {
  components: {
    MenuItem,
  }
}
</script>