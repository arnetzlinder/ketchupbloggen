<template>
  <button id="menuBtn" class="menuBtn" @click="menuOpenClose" :class="{ open: menuIsOpen }">
    <!--:class är samma som v-bind:class="{ 'open': menuIsOpen }"-->
    Meny
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    menuOpenClose() {
      this.menuIsOpen = !this.menuIsOpen;
      this.$emit('menuClick', this.menuIsOpen);
    },
  },
};
</script>

<style scoped lang="scss">
.menuBtn.open {
  background-color: $secondaryColor200;
}

button {
  background-color: $primaryColor200;
  color: $primaryColor100;
  font-family: $secondaryFont;
  font-size: 1rem;
  width: 60px;
  height: 35px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline;
  z-index: 40;

  &:hover {
    background-color: $primaryColor250;
  }

  &:active {
    background-color: $secondaryColor200;
  }

  &:disabled {
    background-color: $accentColor100;
  }
}
@media screen and (min-width: 1400px) {
  button {
    visibility: hidden;
  }
}
</style>
