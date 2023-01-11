<template>
    <button @click="menuOpenClose">Meny
    </button>
</template>

<script lang="ts">
export default {
    methods: {
        menuOpenClose() {
            console.log('clicketi')
        }
    } 
}
// function menuOpenClose() {
//     console.log('klick');
// }
</script>

<style scoped lang="scss">

button {
    background-color: #C41A00;
    color: #FFF3D0;
    font-family: 'Istok Web', sans-serif;
    font-size: 1rem;
    width: 76px;
    height: 25px;
    padding: 1.5rem 1rem;
    border: 3px solid black; 
    border-radius: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    &:hover {
        background-color: #AA1700;
    }
    &:active {
        background-color: #650D00;
    }
}
</style>