<template>
  <header class="page-header">
    <div class="container page-header__container">
      <router-link class="page-header__logo-link" to="/">
        <img class="page-header__logo-img" src="../assets/insta-logo-text.svg" width="103" alt="">
      </router-link>
      <SearchInput />
      <MenuList />
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
  .page-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 7px;
  }
</style>