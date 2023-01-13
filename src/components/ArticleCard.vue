<template>
    <div class="article-card">
      <h2 v-html="cardData.name"> </h2>
      <!-- <p> {{ cardData }} </p> -->
      <ImagePlay :image-data="cardData.images" />
  
      <div v-html="cardData.figcaption" class="figcaption">
      </div>
      <button>Läs mer</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import ImagePlay from './ImagePlay.vue';
  const props = defineProps(['cardData']);
  console.log(props);
  </script>

  <style lang="scss" scoped>
  @import '../scss/variables.scss';
    .article-card {
        width: 360px;
        height: 330px;
        background-color: $secondaryColor300;
        color: $primaryColor100;
        font-family: $primaryFont;
        .figcaption {
          font-family: $secondaryFont;
        }
    }
</style>