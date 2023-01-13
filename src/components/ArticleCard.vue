<template>
    <div class="article-card">
      <h2>ArticleCard.vue</h2>
      <!-- <p>{{ cardData }}</p> -->
      <ImagePlay :image-data="cardData.images" />
  
      <div v-html="cardData.ingredient">
      </div>
      <div v-html="cardData.desc"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ImagePlay from './ImagePlay.vue';
  const props = defineProps(['cardData']);
  console.log(props);
  </script>

  <style lang="scss">
  @import '../scss/variables.scss';
    .article-card {
        width: 360px;
        height: 330px;
        background-color: $secondaryColor300;
        color: $primaryColor100;
    }
</style>