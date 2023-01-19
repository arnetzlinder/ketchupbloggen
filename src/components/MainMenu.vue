<template>
  <transition name="slide-fade">
    <nav v-if="isOpen" class="base">
      <!--if-sats, visas/ visas inte om isOpen är true/false -->
      <h2>Meny</h2>
      <NavLinks />
    </nav>
  </transition>
  <nav class="desktop" v-if="minWidth">
    <!--if-sats, visas/ visas inte om minWidth är true/false -->
    <NavLinks />
  </nav>
</template>

<script lang="ts">
import NavLinks from './NavLinks.vue';
export default {
  components: {
    NavLinks,
  },
  data() {
    return {
      minWidth: false,
      // deklarerar variabel minWidth
    };
  },

  props: ['isOpen'],
  mounted() {
    this.minWidth = window.innerWidth >= 1400;
    window.addEventListener('resize', this.checkWidth);
  },
  // mounted() funktion som anropas efter att komponenten har lagts till i DOM, kontrollerar här koden bredden på webbläsarfönstret vid sidladdning och även varje gång fönstret ändras.
  methods: {
    checkWidth() {
      this.minWidth = window.innerWidth >= 1400;
      // Om bredden är större än eller lika med 1440 pixlar ställs egenskapen minWidth till true.
    },
  },
};
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(40px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

nav {
  background-color: #d9d9d9;
  padding: 0;
  width: 275px;
  height: auto;
  border: 1px solid #5a5a5a;
  border-radius: 10px;
  position: absolute;
  top: 235px;
  margin-left: 0px;
  z-index: 30;

  h2 {
    font-size: 2rem;
    font-family: $primaryFont;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}

@media screen and (min-width: 740px) {
  nav {
    width: 375px;
    top: 327px;
  }

  h2 {
    margin-bottom: 3rem;
  }
}

@media screen and (min-width: 1400px) {
  .base {
    display: none;
  }
  .desktop {
    border: none;
    padding: 0;
    width: 100%;
    height: 0;
    margin-left: 8px;
    top: 480px;

    h2 {
      display: none;
    }
  }
}
</style>
