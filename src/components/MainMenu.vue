<template>
  <nav :class="{ hidden: !isOpen }">
    <!--här lägger vi på en klass på nav-elementet genom :, samma som v-bind:class-->
    <h2>Meny</h2>
    <ul v-if="isOpen || minWidth">
      <!--if-sats, visas/ visas inte om isOpen ELLER minWidth är true/false -->
      <li><a href="#">Historia</a></li>
      <li><a href="#">Förrätter</a></li>
      <li><a href="#">Huvudrätter</a></li>
      <li><a href="#">Efterrätter</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      minWidth: false, // deklarerar variabel minWidth
    };
  },
  props: ['isOpen'],
  mounted() {
    // mounted() funktion som anropas efter att komponenten har lagts till i DOM, kontrollerar här koden bredden på webbläsarfönstret vid sidladdning och även varje gång fönstret ändras.
    this.minWidth = window.innerWidth >= 1440;
    window.addEventListener('resize', this.checkWidth);
  },
  methods: {
    checkWidth() {
      // Om bredden är större än eller lika med 1440 pixlar ställs egenskapen minWidth till true.
      this.minWidth = window.innerWidth >= 1440;
    },
  },
};
</script>

<style scoped lang="scss">

nav.hidden {
  outline: none;
  background-color: transparent;

  h2 {
    visibility: hidden;
  }
}

nav {
  box-sizing: border-box;
  background-color: #d9d9d9ec;
  padding: 0;
  width: 275px;
  height: auto;
  outline: 1px solid #5a5a5a;
  border-radius: 8px;
  margin-left: 8px;
  position: absolute;
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
@media screen and (min-width: 744px) {
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
@media screen and (min-width: 1440px) {
  nav {
    background-color: $primaryColor100;
    outline: none;
    padding: 0;
    width: 100%;
    height: auto;
    margin-left: 8px;

    ul {
      display: block;
      display: flex;
      flex-direction: row;
      position: absolute;
      top: -25px;

      li {
        margin: 0 2.5rem;
      }
    }

    h2 {
      display: none;
    }
  }
}
</style>
