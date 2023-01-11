<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import FooterSection from './components/FooterSection.vue';
import MainNavBar from './components/MainNavBar.vue';

import recepies from './components/array.ts';
</script>

<template>
    <SiteHeader />
    <MainNavBar />
    <div class="articles">
        <ArticleCard v-for="(recipe, index) in recepies" :card-data="recipe" :key="index" />
    </div>
    <FooterSection />
</template>

<style scoped lang="scss">

</style>
