<template>
    <div class="article-card">
      <h2 v-html="cardData.name"> </h2>
      <!-- <p> {{ cardData }} </p> -->
      <div class="imageplay">
      <ImagePlay :image-data="cardData.images" />
      </div>
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
        height: auto;
        background-color: $secondaryColor300;
        color: $primaryColor100;
        font-family: $primaryFont;
        display: flex;
        flex-direction: column;
        justify-items: center;
        margin-bottom: 10px;
      
      h2 {
        text-align: center;
        padding-top: 1rem;
      }
      .imageplay {
        margin: auto;
      }
      .figcaption {
        font-family: $secondaryFont;
      }

      button {
        width: 120px;
        height: 35px;
        margin-left: auto;
      }
    }
</style>