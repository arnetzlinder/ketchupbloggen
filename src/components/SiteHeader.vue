<template>
  <header>
    <div class="h1-container">
      <h1>Shit you can do with ketchup</h1>
    </div>
    <div class="bg-filter"></div>
  </header>
</template>

<style scoped lang="scss">
@import '../scss/style.scss';

header {
  position: relative;
  font-family: $primaryFont;
  background-size: cover;
  background-repeat: no-repeat;
  color: $primaryColor100;
  background-image: url('/KetchupbloggenHeaderImg-DesktopLarge.webp');
  display: flex;
  flex-direction: column;
  justify-content: center;
  .bg-filter {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: linear-gradient(to left, rgba(83, 10, 2, 0) 0%, rgba(83, 10, 2, 0.688) 100%);
  }
}

@media screen and (min-width: 360px) {
  header {
    height: 195px;
    background-image: url('/KetchupbloggenHeaderImg-Mobile.webp');
    .h1-container {
      position: relative;
      z-index: 20;
      width: 350px;
      h1 {
        font-size: 32px;
        margin-left: 20px;
      }
    }
  }
}
@media screen and (min-width: 740px) {
  header {
    height: 322px;
    background-image: url('/KetchupbloggenHeaderImg-Tablet.webp');
    .h1-container {
      padding: 20px;
      width: 550px;
      h1 {
        font-size: 52px;
        margin-left: 41px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  header {
    height: 436px;
    background-image: url('/KetchupbloggenHeaderImg-Desktop.webp');
    .h1-container {
      width: 700px;
      padding: 34px;
      h1 {
        font-size: 64px;
        margin-left: 80px;
      }
    }
  }
}
</style>
