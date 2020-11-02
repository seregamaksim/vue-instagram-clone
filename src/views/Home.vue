<template>
  <div class="home">
    <div class="container home__container">
      <div class="home__content-wrap">
        <StoriesBoard />
        <div class="home__post-carousel">
          <PostCard class="home__post-item"  v-for="(postCardData, index) in postCardDatas" :obj="postCardData" :key="index"/>
        </div>
      </div>
      <!-- Сайдбар -->
    </div>
  </div>
</template>

<script>

import PostCard from '@/components/PostCard.vue'
import StoriesBoard from '@/components/StoriesBoard.vue'

export default {
  data () {
    return {
      postCardDatas: ''
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const APP_ID = '5f9fb7689a6f7046d7463eb7'
      let request = await fetch('https://dummyapi.io/data/api/post?limit=10', {
        headers: {
          'app-id': APP_ID
        }
      });
      let response = await request.json();
      this.postCardDatas = response.data;
      console.log('response', this.postCardDatas);
    }
  },
  components: {
    PostCard, StoriesBoard
  }
}
</script>

<style lang="scss">
  .home__container {
    padding-top: 30px;
  }
  .home__content-wrap {
    max-width: 614px;
  }
  .home__post-item {
    margin-bottom: 30px;
  }
</style>