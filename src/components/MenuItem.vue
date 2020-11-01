<template>
  <router-link class="menu-list__item-link" :to="href">
    <inline-svg :src="require(`../assets/${nameIcon}.svg`)" width="22" height="22"></inline-svg>
  </router-link>
</template>

<script>

export default {
  props: ['href', 'nameIcon']
}
</script>