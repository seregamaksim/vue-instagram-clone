<template>
  <div class="menu-list">
    <div class="menu-list__item">
      <MenuItem href="/" nameIcon="home" />
      
    </div>
    <div class="menu-list__item">
      <MenuItem href="/about" nameIcon="direct" />
    </div>
    <div class="menu-list__item">
      <MenuItem href="/profile">
        <Avatar nameAva="avatar.jpg" width="22" height="22" />
      </MenuItem>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    MenuItem, Avatar
  }
}
</script>

<style lang="scss">
  .menu-list__item {
    margin-right: 22px;
    &:last-child {
      margin-right: 0;
    }
  }
</style>