<template>
  <div class="main-container">
    <div class="article-card">
      <h2 v-html="cardData.name"></h2>
      <div class="flex-container">
        <div class="imageplay">
          <ImagePlay :image-data="cardData.images" />
        </div>
        <div v-html="cardData.figcaption" class="figcaption"></div>
      </div>
      <button @click="recepieShowHide" class="recepieButton">Visa recept</button>
    </div>
  </div>
  <aside :class="{ show: recepieShows }">
    <ShowRecepie :card-data="cardData" @click="recepieShowHide" />
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
    };
  },
  methods: {
    recepieShowHide() {
      this.recepieShows = !this.recepieShows;
      // this.$emit('recepieShow', this.recepieShows);
      console.log('Click event received, recepieShows is ', this.recepieShows);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-card {
  background-color: $secondaryColor300;
  color: $primaryColor100;
  font-family: $primaryFont;
  padding: 1rem;
  margin: 0;
  margin-bottom: 10px;

  h2 {
    text-align: center;
  }

  .imageplay {
    display: flex;
    justify-content: center;
  }

  .figcaption {
    font-family: $secondaryFont;
    margin: 0 1rem;
  }

  button {
    background-color: $primaryColor200;
    color: $primaryColor100;
    font-family: $secondaryFont;
    font-size: 1rem; // ta oss friheten att ändra till font size 15 pga acc standard?
    width: 120px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    &:hover {
      background-color: $primaryColor250;
    }

    &:active {
      background-color: $secondaryColor200;
    }

    &:disabled {
      background-color: $accentColor100;
    }
  }
}
aside.show {
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 50;
  background-color: $secondaryColor200;
  margin-bottom: 5rem;
}

aside {
  display: none;
  background-color: $primaryColor200;
  color: $primaryColor100;
}

@media (width >= 740px) {
  .article-card {
    border-radius: 0px 8px 8px 0px;
    .figcaption {
      max-width: 236px;
      margin-bottom: 1rem;
    }
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (width >= 1400px) {
  .article-card {
    border-radius: 5px;
    padding: 1rem 2.5rem 2.5rem 2.5rem;

    h2 {
      text-align: left;
    }
    .figcaption {
      line-height: 1.5rem;
      align-self: start;
      margin-block-start: 1rem;
      padding-left: 1.5rem;
    }
  }

  .flex-container {
    flex-direction: row;
  }
}
</style>
