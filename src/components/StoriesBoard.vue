<template>
  <div class="users-board">
    <splide :options="options" :slides="allUsers" class="users-board__list">
      <splide-slide class="users-board__item" v-for="user in allUsers" :key="user.id">
        <router-link to="#" class="users-board__item-link">
          <Avatar class="users-board__item-ava" width="56" height="56" :srcAva="user.picture" />
          <p class="users-board__item-name">{{ user.firstName + ' ' + user.lastName }}</p>
        </router-link>
      </splide-slide>
    </splide>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import Avatar from '@/components/Avatar.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  data () {
    return {
      options: {
        perPage: 7,
        pagination: false,
      },
    }
  },
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapActions(['fetchUsers']),
  },
  mounted () {
    this.fetchUsers()
  },
  components: {
    Avatar, Splide, SplideSlide,
  }
}
</script>


<style lang="scss">

  .users-board {
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    margin-bottom: 24px;
    padding: 16px 0;
    min-height: 110px;
  }
  .users-board__list {
    display: flex;
  }
  .users-board__item-name,
  .users-board__list {
    margin: 0;
    padding: 0;
  }
  .users-board__item {
    list-style: none;
    
  }
  .users-board__item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 80px;
    padding: 0 4px;
  }
  .users-board__item-name {
    max-width: 74px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #262626;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .01em;
  }
  .users-board__item-ava {
    margin-bottom: 8px;
  }
</style>