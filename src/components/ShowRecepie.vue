<template>

  <div class="show-recepie">

      <div class="img-container">
        <img :src="cardData.images[0].img" :alt="cardData.images[0].alt" width="236" height="153" loading="lazy" />
      </div>

    <div class="text-container">
      <h2 v-html="cardData.name"></h2>
      <h3> Ingredienser:</h3>
      <div v-html="cardData.ingredient" class="ingredient"></div>
      <h3> Gör så här:</h3>
      <div v-html="cardData.desc" class="desc"></div>
    </div>

    <div class="button-container">
      <button @click="recepieHide" class="close-button" inheritAttrs: false >Stäng</button>
    </div>

  </div>

</template>

<script lang="ts">
  export default {
    name: 'ShowRecepie',
    props: ['cardData'],
    data() {
      return {
        recepieShows: true,
      }
    },
    methods: {
      recepieHide() {
        // this.recepieShows = !this.recepieShows;
        // this.$emit('click');
        console.log('User pressed the close button');
      }
    }
  }

  </script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
  .show-recepie {
    color: $primaryColor100;
    font-family: $primaryFont;
    position: relative;
    padding: 2rem;
    height: 94.5%;
    overflow: scroll;
    max-width: 22.5rem;
    margin-inline: auto;
    .img-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
        
    .text-container {
      font-family: $secondaryFont;
      line-height: 1.5rem;
      margin-bottom: 10px;
    }
      
    img {
      border: 2px solid $primaryColor100;
      border-radius: 10px;
      position: relative;
      margin-inline: auto;
    }

    h2, h3 {
      font-family: $primaryFont;
    }
  }
    .button-container{
      display: flex;
      justify-content: end;

      .close-button{
      width: 75px;
      height: 35px;
      font-family: $secondaryFont;
      background-color: $primaryColor100;
      border: none;
      border-radius: 10px;
      position: relative;
      margin-bottom: 2rem;
      color: black;

        .close-button:hover{
          background-color: $secondaryColor200;
        }
      
      }

    }
  
@media (width >= 740px) {
  .show-recepie {
    max-width: 23rem;
    
    h2 {
      text-align: center;
    }

    img {
      scale: 1.6;
      margin-block: 3rem;
    }
  } 

  .button-container {
    position: absolute;
    bottom: 1.75rem;
    right: 1.5rem;
    .close-button {
      scale: 1.8;
      font-size: 1.1rem;
      margin: 1rem;

    }
  }
}

@media (width >= 1400px) {
  .show-recepie {
    max-width: 30rem;

    img {
      // width: 490.28px;
      // height: 226.15px;
      scale: 2.08 1.48;
    }
  }
  .button-container {
    margin-right: 15rem;
    .close-button {
      scale: 1;
      width: 174px;
      height: 60px;
      font-size: 2rem;
    }
  }
}

</style>