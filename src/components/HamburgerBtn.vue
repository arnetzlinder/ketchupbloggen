<template>
    <button id="menuBtn" @click="menuOpenClose" v-bind:class="{ 'open': menuIsOpen }">Meny <!--går även att använda :class="{ 'open': menuIsOpen }-->
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
@import '../scss/variables.scss';
button.open {
    background-color: $secondaryColor200;
    }

button {
    background-color: $primaryColor200;
    color: $primaryColor100;
    font-family: $secondaryFont;
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
        background-color: $secondaryColor200;
    }
}
@media screen and (min-width: 1440px) {
        button {
            visibility: hidden;
        }
    }
</style>




