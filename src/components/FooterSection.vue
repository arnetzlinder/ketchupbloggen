<template>
  <footer>
    <p>Alla recept är skapade av team Ketchup</p>
  </footer>
</template>

<style scoped lang="scss">
@import '../scss/variables.scss';

footer {
  position: absolute;
  display: block;
  width: 100vw;
  background-color: #dad0b2;

  p {
    padding-inline-start: 0.5rem;
  }
}

@media screen and (min-width: 1400px) {
  p {
    padding-inline-start: 2rem;
  }
}
</style>
