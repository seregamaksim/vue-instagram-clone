<template>
  <main class="user-page user-page-id">
    <div class="container user-page__container">
      <div class="user-page__info user-info">
        <div class="user-info__avatar-block">
          <Avatar class="user-info__avatar-wrap" width="150" height="150" :srcAva="user.picture" />
        </div>
        <div class="user-info__description user-info__description--preloader" v-if="showPreloader">
          <div class="user-info__description-preloader-nickname"></div>
          <div class="user-info__description-preloader-count"></div>
          <div class="user-info__description-preloader-name"></div>
          <div class="user-info__description-preloader-text"></div>
        </div>
        <div class="user-info__description" v-else>
          <h2 class="user-info__nickname">
            {{ user.firstName + ' ' + user.lastName }}
          </h2>
          <ul class="user-info__count-list">
            <li class="user-info__count-item">
              <span>{{ userPosts.length }}</span> публикаций
            </li>
            <li class="user-info__count-item">
              <span>{{ getRandomIntInclusive(1, 10000) }}</span> подписчиков
            </li>
            <li class="user-info__count-item">
              <span>{{ getRandomIntInclusive(1, 1000) }}</span> подписок
            </li>
          </ul>
          <h1 class="user-info__name">
            {{ user.firstName + ' ' + user.lastName }}
          </h1>
          <div class="user-info__descr-wrapper">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, dolores maiores quisquam mollitia non vitae ab incidunt laboriosam, accusamus totam commodi dolorum! Ea placeat deserunt delectus assumenda dolor voluptatem quos?</p>
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </div>
        </div>
      </div>
      <div class="user-page__toggle-wrap">
        <button class="user-page__toggle user-page__toggle--posts">
          <inline-svg class="user-page__toggle-icon" :src="require(`../assets/posts.svg`)" width="12" height="12"></inline-svg>
          Публикации
          </button>
      </div>
      <ul class="user-page__posts-list">
        <li class="user-page__posts-item" v-for="post in userPosts" :key="post.id">
          <a class="user-page__posts-item-link" href="#">
            <img :src="post.image" alt="">
            <div class="user-page__posts-item-info">
              <p class="user-page__posts-item-likes">
                <inline-svg class="user-page__posts-item-likes-img" :src="require(`../assets/like.svg`)" width="15" height="15"></inline-svg>
                {{ post.likes }}
              </p>
            </div>
          </a>
          
        </li>
      </ul>
    </div>
    
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
import Avatar from '@/components/Avatar.vue'

export default {
  // Этот id приходит из route
  props: ['id'],
  data () {
    return {
      user: '',
      idUser: this.$props.id,
      userPosts: '',
      showPreloader: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.showPreloader = true;
    this.idUser = to.params.id;
    this.getThisUser(this.idUser)
    this.getUserPosts(this.idUser)
    next()
  },
  mounted() {
    this.getThisUser(this.idUser)
    this.getUserPosts(this.idUser)
  },
  computed: mapGetters(['allUsers']),
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    },
    async getThisUser(id) {
      const APP_ID = '5f9fb7689a6f7046d7463eb7';
      let response = await fetch(`https://dummyapi.io/data/api/user/${id}`, {
        headers: {
          'app-id': APP_ID
        }
      });
      let user = await response.json();
      this.user = user;
      this.showPreloader = false;
    },
    async getUserPosts(id) {
      const APP_ID = '5f9fb7689a6f7046d7463eb7';
      let response = await fetch(`https://dummyapi.io/data/api/user/${id}/post/`, {
        headers: {
          'app-id': APP_ID
        }
      });
      let userPosts = await response.json();
      this.userPosts = userPosts.data
      console.log('userPosts', userPosts.data);
    }
  },
  components: {
    Avatar
  }
}
</script>

<style lang="scss">
  .user-page__container {
    padding-top: 30px;
  }
  .user-page__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 44px;
    border-bottom: 1px solid #dbdbdb;
  }
  .user-info__avatar-block {
    margin-right: 30px;
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .user-info__description {
    // max-width: 614px;
    width: 70%;
  }
  .user-info__nickname {
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    color: #262626;
    margin-bottom: 20px;
  }
  .user-info__count-list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .user-info__count-item {
    font-size: 16px;
    color: #262626;
    margin-right: 40px;
    font-weight: 400;
    list-style: none;
    &:last-child {
      margin-right: 0;
    }
    span {
      font-weight: 600;
    }
  }
  .user-info__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .user-info__descr-wrapper {
    font-size: 16px;
    line-height: 24px;
    color: #262626;
    font-weight: 400;
    a {
      color: #00376b;
      text-decoration: none;
      display: block;
      font-weight: 600;
    }
  }
  .user-page__toggle-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-page__toggle {
    letter-spacing: 1px;
    appearance: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0;
    text-transform: uppercase;
    margin-right: 60px;
    cursor: pointer;
    border-top: 1px solid #000;
    margin-top: -1px;
    &:last-child {
      margin-right: 0;
    }
  }
  .user-page__toggle-icon {
    display: inline-block;
    margin-right: 6px;
  }
  .user-page__posts-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .user-page__posts-item {
    padding-bottom: 100%;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user-page__posts-item-info {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  .user-page__posts-item-likes {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .user-page__posts-item-likes-img {
    display: block;
    margin-right: 7px;
  }
  .user-page__posts-item:hover .user-page__posts-item-info {
    opacity: 1;
  }
  .user-info__description--preloader * {
    position: relative;
    overflow: hidden;
    background-color: rgba(211, 211, 211, 0.5);
    border-radius: 3px;
  }
  .user-info__description-preloader-nickname {
    height: 32px;
    width: 150px;
    margin-bottom: 20px;
  }
  .user-info__description-preloader-count {
    width: 370px;
    height: 22px;
    margin-bottom: 20px;
  }
  .user-info__description-preloader-name {
    width: 100px;
    height: 24px;
    margin-bottom: 5px;
  }
  .user-info__description-preloader-text {
    width: 100%;
    height: 70px;
  }
  
  .user-info__description--preloader *::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    animation: loading 1.5s infinite;
    
    background: linear-gradient(90deg, rgba(211, 211, 211, 0) 0, rgba(255, 255, 255, 0.3) 50%, rgba(211, 211, 211, 0) 100%);
  }
  @keyframes loading {
    to {
      transform: translateX(100%);
    }
  }
</style>