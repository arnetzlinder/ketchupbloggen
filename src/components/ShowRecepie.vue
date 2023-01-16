<template>
    <div class="show-recepie">
        <img :src="cardData.images[0].img" :alt="cardData.images[0].alt" width="236" height="153" loading="lazy" />
        <h2 v-html="cardData.name"> </h2>
        <h3> Ingredienser:</h3>
        <div v-html="cardData.ingredient" class="desc"></div>
        <h3> Gör så här:</h3>
        <div v-html="cardData.desc" class="desc">
        </div>
        <button @click="recepieHide" class="closeButton" inheritAttrs: false >Stäng</button>
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
        width: 360px;
        height: 330px;
        color: $primaryColor100;
        font-family: $primaryFont;
        .desc {
          font-family: $secondaryFont;
        }
    }
</style>