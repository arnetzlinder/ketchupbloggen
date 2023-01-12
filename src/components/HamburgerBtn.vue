<template>
    <button id="menuBtn" @click="menuOpenClose">Meny
    </button>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                menuIsOpen: false,
            }
        },
        methods: {
            menuOpenClose() {
                this.menuIsOpen = !this.menuIsOpen;
                this.$emit('menuClick', this.menuIsOpen);
            }
        }
    }
 </script> 

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
    margin: 5px 0 0 8px;

    &:hover {
        background-color: #AA1700;
    }
    &:active {
        background-color: #530A02;
    }
button.open {
    background-color: #530A02;
    }
}
</style>