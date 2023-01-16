<template>
  <div>
    <button @click="imageBackward" class="material-symbols-outlined backward">arrow_back</button>
    <img
      :src="imageData[currentIndex].img"
      :alt="imageData[currentIndex].alt"
      width="236"
      height="153"
      loading="lazy"
    />
    <button @click="imageForward" class="material-symbols-outlined forward">arrow_forward</button>

    <div class="dots">
      <!--loopar igenom [imageData],och skapar ett nytt div-element för varje element , addera klass active NÄR aktuellt index matchar variabeln currentIndex -->
      <div v-for="(item, index) in imageData" :key="index" :class="{ active: currentIndex === index }"></div>
      <!-- (variabel, variabelindex) i just denna loopen-->
      <!-- samma som:
                for (let i = 0; i < imageData.length; i++) {
                  const item = imageData[i];
                  const div = document.createElement('div');
                  div.classList.add(currentIndex === i ? 'active' : ''); //forenklad if/else loop (om currentIndex === i är true; lägg på klass .active, annars inte)
                  div.setAttribute('key', i);
                }
            måste sätta key så Vue vet vad den ska hålla koll på. 
            https://stackoverflow.com/questions/49675988/how-to-get-the-v-for-index-in-vue-js
            https://vuejs.org/guide/essentials/list.html-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImagePlay',
  props: ['imageData'],
  data() {
    return {
      // variabel hålla reda på vart vi är i bildspelet
      currentIndex: 0,
    };
  },
  methods: {
    imageForward() {
      if (this.currentIndex + 1 > this.imageData.length - 1) {
        // om vi går till höger och det blir mer än så många bilder vi har i arrayen

        this.currentIndex = 0;
        // då startar vi om vårt bildspel
      } else {
        this.currentIndex += 1;
        // i annat fall stega 1 steg framåt
      }
    },
    imageBackward() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.imageData.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    },
  },
};

// const props = defineProps(['imageData']);
// console.log(props);
</script>

<style scoped lang="scss">
button {
  background-color: transparent;
  color: #dad0b2;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  top: -80px;
}

.backward {
  left: 30px;
  text-shadow: 1px 1px 3px black;
}

.forward {
  right: 30px;
  text-shadow: 1px 1px 3px black;
}

img {
  border-radius: 10px;
  border: 2px solid $primaryColor100;
  margin-bottom: 1rem;
}

.dots {
  display: flex;
  justify-content: center;
}

.dots div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #d9d9d9;
  box-shadow: 1px 1px 5px #333;
  position: relative;
  top: -40px;
  border: 1px solid whitesmoke
}

.dots div.active {
  background-color: $secondaryColor200;
  scale: 1.5;
}
</style>
