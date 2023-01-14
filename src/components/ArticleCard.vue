<template>
    <div class="article-card">
      <h2 v-html="cardData.name"> </h2>
      <ImagePlay :image-data="cardData.images" />
  
      <div v-html="cardData.figcaption" class="figcaption">
      </div>
      <button @click="recepieShowHide" class="recepieButton">Visa recept</button>
    </div>
    <aside :class="{'show': recepieShows}">
      <ShowRecepie :card-data="cardData"
      @click="recepieShowHide" />
    </aside>
  </template>
  
  <script lang="ts">
  import ImagePlay from './ImagePlay.vue';
  import ShowRecepie from './ShowRecepie.vue';
  export default {
    name: 'ArticleCard',
    props: ['cardData'],
    components: {
      ShowRecepie,
      ImagePlay,
    },
    data() {
      return {
        recepieShows: false,
      }
    },
    methods: {
      recepieShowHide() {
        this.recepieShows = !this.recepieShows;
        // this.$emit('recepieShow', this.recepieShows);
        console.log('Click event received, recepieShows is ', this.recepieShows );
      }
    }
  }

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
    aside.show {
      display: block;
      width: 100vw;
      height: 100vh; 
      z-index: 5;
    }
    aside {
      display: none;
      background-color: $primaryColor200;
      color: $primaryColor100;
    }
</style>