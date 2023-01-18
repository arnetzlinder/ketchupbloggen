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

main {
  width: 100%;
}


@media (width >= 740px) {
  .content-wrapper {
    display: flex;
    max-width: 100%;
    flex-direction: row-reverse;
    gap: 1.5rem;
  }
}
@media (width >= 1400px) {
  .content-wrapper {
    gap: 2.125rem;
    max-width: 934px;
  }
}
</style>
