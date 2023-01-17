<template>
  <transition name="slide-fade">
    <nav v-if="isOpen || minWidth">
      <!--if-sats, visas/ visas inte om isOpen ELLER minWidth är true/false -->
      <h2>Meny</h2>
      <ul>
        <li><a href="#">Historia</a></li>
        <li><a href="#">Förrätter</a></li>
        <li><a href="#">Huvudrätter</a></li>
        <li><a href="#">Efterrätter</a></li>
      </ul>
    </nav>
  </transition>
</template>

<script lang="ts">
export default {
  data() {
    return {
      minWidth: false,
      // deklarerar variabel minWidth
    };
  },
  props: ['isOpen'],
  mounted() {
    this.minWidth = window.innerWidth >= 1440;
    window.addEventListener('resize', this.checkWidth);
  },
  // mounted() funktion som anropas efter att komponenten har lagts till i DOM, kontrollerar här koden bredden på webbläsarfönstret vid sidladdning och även varje gång fönstret ändras.
  methods: {
    checkWidth() {
      this.minWidth = window.innerWidth >= 1440;
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

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

nav {
  background-color: #d9d9d9;
  padding: 0;
  width: 275px;
  height: auto;
  outline: 1px solid #5a5a5a;
  border-radius: 8px;
  position: absolute;
  margin-top: -14px;
  z-index: 10;

  h2 {
    font-size: 2rem;
    font-family: $primaryFont;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    padding: 0;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0;

    li {
      margin: 1rem 0;
    }

    li:last-child {
      margin-bottom: 5rem;
    }
  }
}

a {
  color: $secondaryColor200;
  text-underline-offset: 4px;

  &:active {
    color: $primaryColor200;
  }

  &:hover {
    color: #000;
  }
}
@media screen and (min-width: 740px) {
  nav {
    width: 375px;

    li {
      margin: 2rem 0;
    }

    li:last-child {
      padding-bottom: 6rem;
    }
  }

  h2 {
    margin-bottom: 3rem;
  }
}

@media screen and (min-width: 1400px) {
  nav {
    outline: none;
    padding: 0;
    width: 100%;
    height: 0;
    margin-left: 8px;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      top: -30px;

      li {
        margin: 0 2.5rem;
      }

      li:last-child {
        margin: 0;
        padding: 0;
      }
    }

    h2 {
      display: none;
    }
  }
}
</style>
