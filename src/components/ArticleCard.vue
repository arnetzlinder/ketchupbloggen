<template>
  <div class="mainContainer">
    <div class="article-card">
      <h2 v-html="cardData.name"> </h2>
      <div class="imageplay">
        <ImagePlay :image-data="cardData.images" />
      </div>
      <div v-html="cardData.figcaption" class="figcaption">
      </div>
      <button @click="recepieShowHide" class="recepieButton">Visa recept</button>
    </div>
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
.article-card { 
  max-width: 100%;
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
    margin: 0 1rem;
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

@media screen and (min-width: 740px) {
  .mainContainer {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
      
    .article-card {
    width: 570px;
    height: auto;
    }
  }
}

@media screen and (min-width: 1440px) {
  .mainContainer {
    padding: 0 15rem;
  }       
}

</style>