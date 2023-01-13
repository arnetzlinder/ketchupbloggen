<template>
    <div>
        <button @click="imageBackward" class="material-symbols-outlined backward">arrow_back</button>
        <img :src="imageData[currentIndex].img" :alt="imageData[currentIndex].alt" width="236" height="153" loading="lazy" />
        <button @click="imageForward" class="material-symbols-outlined forward">arrow_forward</button>

        <div class="dots">
            <div v-for="(dot, index) in imageData" :key="index" :class="{ active: currentIndex === index }"></div>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'ImagePlay',
    props: ['imageData'],
    data() {
        return {
            currentIndex: 0, // variabel hålla reda på vart vi är i bildspelet
        };
    },
    methods:{
        imageForward() {
            if (this.currentIndex + 1 > this.imageData.length - 1) { // om vi går till höger och det blir mer än så många bilder vi har i arrayen
                this.currentIndex = 0; // då startar vi om vårt bildspel
            } else {
                this.currentIndex += 1; // i annat fall stega 1 steg framåt
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
@import '../scss/variables.scss';

    button {
        background-color: none;
        outline: none;
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

    .dots > div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 5px;
        background-color: #ccc;
    }

    .dots > div.active {
        background-color: #333;
    }

</style>
