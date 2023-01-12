<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import FooterSection from './components/FooterSection.vue';
import ArticleCard from './components/ArticleCard.vue';
import recepies from './components/array';
</script>

<template>
    <SiteHeader />
    <div class="articles">
        <ArticleCard v-for="(recipe, index) in recepies" :card-data="recipe" :key="index" />
    </div>
    <FooterSection />
</template>

<style scoped lang="scss">

</style>