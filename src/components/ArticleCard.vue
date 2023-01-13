<template>
    <div class="article-card">
      <h2 v-html="cardData.name"> </h2>
      <!-- <p> {{ cardData }} </p> -->
      <div class="imageplay">
      <ImagePlay :image-data="cardData.images" />
      </div>
      <div v-html="cardData.figcaption" class="figcaption">
      </div>
      <button>Visa Recept</button>
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
        padding: 1rem;
        margin: 10px 0;
      
      h2 {
        text-align: center;
      }
      .imageplay {
        margin: auto;
      }
      .figcaption {
        font-family: $secondaryFont;
      }

      button {
        background-color: $primaryColor200;
        color: $primaryColor100;
        font-family: $secondaryFont;
        font-size: 0.875rem; // ta oss friheten att ändra till font size 15 pga acc standard?
        width: 120px;
        height: 35px;
        margin-left: auto;
        border-radius: 10px;
        border: 1px solid black;
        


        &:hover {
          background-color: #AA1700;
        }

        &:active {
          background-color: $secondaryColor200;
        }

        &:disabled {
          background-color: #939191;
        }
      }
    }
</style>