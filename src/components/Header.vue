<template>
  <header class="page-header">
    <div class="container page-header__container">
      <router-link class="page-header__logo-link" to="/">
        <img class="page-header__logo-img" src="../assets/insta-logo-text.svg" width="103" alt="">
      </router-link>
      <SearchInput class="page-header__search-wrap" />
      <MenuList class="page-header__menu-list" />
    </div>
    
  </header>
</template>


<script>
import SearchInput from '@/components/SearchInput.vue'
import MenuList from '@/components/MenuList.vue'

export default {
  components: {
    SearchInput, MenuList
  }
}
</script>

<style lang="scss">
  .page-header {
    border-bottom: 1px solid rgb(219, 219, 219);
  }
  .page-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 7px;
    min-height: 54px;
  }
  .page-header__menu-list {
    display: flex;
    align-items: center;
  }
</style>