<template>
    <div>
        <button @click="imageBackward" class="material-symbols-outlined">
        arrow_back
        </button>

        <!-- <pre>
            {{ imageData[0] }}
        </pre> -->

        <img :src="imageData[currentIndex].img" :alt="imageData[currentIndex].alt" width="236" height="153" loading="lazy" />

        <button @click="imageForward" class="material-symbols-outlined">
        arrow_forward 
        </button>
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
}


// const props = defineProps(['imageData']);
// console.log(props);

</script>

<style lang="sass" scoped>
</style>