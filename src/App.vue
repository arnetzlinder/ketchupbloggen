<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import FooterSection from './components/FooterSection.vue';
import CookieBanner from './components/CookieBanner.vue';
import ArticleCard from './components/ArticleCard.vue';
import NavBar from './components/NavBar.vue';
import recepies from './components/array';
</script>

<template>
    <SiteHeader />
    <NavBar />
    <main class="articles">
        <ArticleCard v-for="(recipe, index) in recepies" :card-data="recipe" :key="index" />
    </main>
    <FooterSection />
    <CookieBanner />
</template>

<style scoped lang="scss">

</style>