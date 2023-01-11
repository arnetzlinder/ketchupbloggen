<script setup lang="ts">
import { ref } from "vue";

const menuIsOpen = ref(false);

const emit = defineEmits(['menuClick']);
// export default {
//     methods: {
//         menuOpenClose() {
//             console.log('clicketi')
//             menuIsOpen. value = !menuIsOpen.value;
//         }
//     } 
// }
function menuOpenClose() {
    menuIsOpen.value = !menuIsOpen.value;
    console.log(menuIsOpen.value); // NÄR menuisOpen = true, add classlist active to #menuBtn

    emit('menuClick', menuIsOpen.value);
}
</script>

<template>
    <button id="menuBtn" @click="menuOpenClose">Meny
    </button>
</template>

<style scoped lang="scss">

button {
    background-color: #C41A00;
    color: #FFF3D0;
    font-family: 'Istok Web', sans-serif;
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
    z-index: 10;

    &:hover {
        background-color: #AA1700;
    }
    &:active, .active {
        background-color: #530A02;
    }
}
</style>