<template>
  <div class="avatar-wrap" :style="`width: ${width}px; height: ${height}px;`">
    <img class="avatar-wrap__img" :src="require(`../assets/${nameAva}`)" alt="Аватар пользователя" v-if="nameAva">
    <img class="avatar-wrap__img" :src="require(`../assets/avatar-default.png`)" alt="Аватар пользователя" v-else>
  </div>
</template>

<script>
export default {
  props: ['nameAva', 'nickname', 'width', 'height']
}
</script>

<style lang="scss">
  .avatar-wrap {
    position: relative;
  }
  .avatar-wrap__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
</style>