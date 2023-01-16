<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import FooterSection from './components/FooterSection.vue';
import CookieBanner from './components/CookieBanner.vue';
import ArticleCard from './components/ArticleCard.vue';
import NavBar from './components/NavBar.vue';
import recepies from './components/array';
import AboutKetchup from './components/AboutKetchup.vue';
</script>

<template>
  <SiteHeader />
  <NavBar />
  <div class="content-wrapper">
    <AboutKetchup />
    <main class="articles">
      <ArticleCard v-for="(recipe, index) in recepies" :card-data="recipe" :key="index" />
    </main>
  </div>
  <FooterSection />
  <CookieBanner />
</template>

<style scoped lang="scss">
.content-wrapper {
  max-width: 420px;
  position: relative;
  margin-inline: auto;
}

@media (width >= 740px) {
  .content-wrapper {
    display: flex;
    flex-direction: row-reverse;
    max-width: 1000px;
    gap: 1rem;
  }
}
</style>
