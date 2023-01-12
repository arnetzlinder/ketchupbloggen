<template>
    <div>
      <h2>ArticleCard.vue</h2>
      <p>{{ cardData }}</p>
      <ImagePlay :image-data="cardData.images" />
  
      <div v-html="cardData.desc">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ImagePlay from './ImagePlay.vue';
  const props = defineProps(['cardData']);
  console.log(props);
  </script>