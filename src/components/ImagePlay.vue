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
            currentIndex: 0,
        };
    },
    methods:{
        imageForward() {
            if (this.currentIndex + 1 > this.imageData.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
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