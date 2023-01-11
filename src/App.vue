<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import FooterSection from './components/FooterSection.vue';
import CookieBanner from './components/CookieBanner.vue';

import recepies from './components/array.ts';
</script>

<template>
    <SiteHeader />
    <div class="articles">
        <ArticleCard v-for="(recipe, index) in recepies" :card-data="recipe" :key="index" />
    </div>
    <FooterSection />
    <CookieBanner />
</template>

<style scoped lang="scss">

</style>
