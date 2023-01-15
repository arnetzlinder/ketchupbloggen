<template>
  <div class="nav-container">
    <!-- Här kopplas klick-eventet "menu-click" ihop från komponenten "HamburgerBtn" (se rad 16 i HamburgerBtn.vue) @-tecken används för att koppla event. -->
    <HamburgerBtn @menu-click="toggleMenu" />
    <input type="text" />
    <!--här kopplar vi in förstoringsglaskomponenten-->
    <MagnifyingGlass />
  </div>
  <!-- Här kopplar vi ihop if-satsen från komponenten "MainMenu.vue", det görst med ett :-tecken, vilket är en förkortning av v-bind. -->
  <MainMenu :is-open="showMenu" />
</template>

<script lang="ts">
import MagnifyingGlass from './MagnifynGlass.vue';
import HamburgerBtn from './HamburgerBtn.vue';
import MainMenu from './MainMenu.vue';
export default {
  components: {
    // components-deklarationen gör att vi kan använda dess props i vår template-tagg.
    HamburgerBtn,
    MainMenu,
    MagnifyingGlass,
  },
  data() {
    return {
      // Variabel-deklaration, boolean.
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log('click');
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
.nav-container {
  display: flex;
  justify-content: space-between;
}
</style>
