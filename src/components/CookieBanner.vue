<template>
  <div v-if="showCookieBanner">
    <p>Tillåt användning av cookies</p>
    <button @click="acceptCookies">Acceptera och stäng</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showCookieBanner: true,
    };
  },
  methods: {
    acceptCookies() {
      this.showCookieBanner = false;
      localStorage.setItem('acceptedCookies', String(true));
    },
  },
  mounted() {
    const acceptedCookies = localStorage.getItem('acceptedCookies');
    if (acceptedCookies === 'true') {
      this.showCookieBanner = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';

div {
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding-block: 0.185rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primaryColor300;

  p {
    margin-inline-start: 1.5rem;
    color: $primaryColor100;
  }

  button {
    border: none;
    margin-inline-end: 1rem;
    width: 5.875rem;
    border: 1px solid black;
    border-radius: 0.625rem;
    background-color: $secondaryColor100;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    display: flex;
    align-items: center;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}

@media screen and (min-width: 740px) {
  div {
    button {
      width: 7.1875rem;
    }
  }
}

@media screen and (min-width: 1440px) {
  div {
    p {
      margin-inline-start: 28.625rem;
    }
  }
}
</style>
