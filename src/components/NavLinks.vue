<template>
  <li><a href="#">Historia</a></li>
  <li><a href="#">Förrätter</a></li>
  <li><a href="#">Huvudrätter</a></li>
  <li><a href="#">Efterrätter</a></li>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
li {
  margin: 1rem 0;
}

li:last-child {
  margin-bottom: 5rem;
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
  li {
    margin: 2rem 0;
  }

  li:last-child {
    padding-bottom: 6rem;
  }

}


@media screen and (min-width: 1400px) {
  li {
    margin: 0 0 0 2.5rem;
  }

  li:last-child {
    margin: 0 0 0 2.5rem;
    padding: 0;
  }

}
</style>
