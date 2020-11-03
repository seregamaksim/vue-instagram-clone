<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
  #app {
    background-color: #fafafa;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  body, html, p, h1, h2, h3, ul {
    margin: 0;
    padding: 0;
  }
  .container {
    margin: 0 auto;
    max-width: 975px;
    padding-left: 20px;
    padding-right: 20px;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  li {
    list-style: none;
  }
</style>
