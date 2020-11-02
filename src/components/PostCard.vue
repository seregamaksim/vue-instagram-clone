<template>
  <article class="post-card">
    <header class="post-card__header">
      <router-link class="post-card__header-avatar" to="#" style="width: 32px; height: 32px;">
        <img class="post-card__header-avatar-img" :src="obj.owner.picture" alt="">
      </router-link>
      <router-link class="post-card__header-name post-card__name" to="#">
        {{ obj.owner.firstName + ' ' + obj.owner.lastName }}
      </router-link>
    </header>
    <div class="post-card__body">
      <div class="post-card__content-wrap">
        <img class="post-card__image-content" :src="obj.image" alt="">
      </div>
      <div class="post-card__body-text">
        <div class="post-card__likes-wrap">
          <a class="post-card__likes" href="#">
            {{ obj.likes + ' отметок "Нравится"' }}
          </a>
        </div>
        <div class="post-card__description-wrap">
          <router-link class="post-card__name" to="#">
            {{ obj.owner.firstName + ' ' + obj.owner.lastName }}
          </router-link>
          <span>{{ obj.text }}</span>
          <div class="post-card__description-tags">
            <a href="" class="post-card__description-tag" v-for="(tag, index) in obj.tags" :key="index">{{'#' + tag}}</a>
          </div>
        </div>
        <div class="post-card__date-create-wrap">
          <p class="post-card__date-create">
            {{ formatDate() }}
          </p>
        </div>
        
      </div>
      
    </div>
  </article>
</template>
<script>
export default {
  props: ['obj'],
  methods: {
    formatDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      
      let date = new Date(this.$props.obj.publishDate);
      let dateFormat = date.toLocaleDateString(undefined, options);
      return dateFormat;
    }
  }
}
</script>

<style lang="scss">
  .post-card {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
  }
  .post-card__header {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #efefef;
  }
  .post-card__header-avatar {
    border-radius: 50%;
    display: block;
    overflow: hidden;
    margin-right: 14px;
  }
  .post-card__name {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #262626;
    &:hover {
      text-decoration: underline;
    }
  }
  .post-card__content-wrap {
    position: relative;
    padding-bottom: 100%;
    margin-bottom: 5px;
  }
  .post-card__image-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .post-card__likes-wrap {
    margin-bottom: 8px;
  }
  .post-card__likes {
    font-size: 14px;
    font-weight: 600;
    color: #262626;
    text-decoration: none;
  }
  .post-card__likes-wrap,
  .post-card__description-wrap,
  .post-card__date-create-wrap {
    padding-left: 16px;
    padding-right: 16px;
  }
  .post-card__description-tag {
    text-decoration: none;
    color: #00376b;
  }
  .post-card__body-text {
    padding-top: 5px;
    padding-bottom: 10px;
  }
  .post-card__date-create {
    font-size: 10px;
    letter-spacing: .2px;
    line-height: 18px;
    color: #8e8e8e;
    text-transform: uppercase;
  }
  
</style>