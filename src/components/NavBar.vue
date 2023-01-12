<template>
    <HamburgerBtn  @menu-click="toggleMenu"/>
    <MainMenu :is-open="showMenu"/>
</template>

<script lang="ts">
import HamburgerBtn from './HamburgerBtn.vue';
import MainMenu from './MainMenu.vue';
export default {
    components: {
        HamburgerBtn,
        MainMenu,
    },
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        toggleMenu() {
            console.log('click');
            this.showMenu = !this.showMenu;
        }
    }
}
// Options API
</script>

<style scoped lang="scss">

section {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 40px;
    padding: 5px 0 0 8px;
    margin: 0;
}

nav {
    background-color: #d9d9d990;
    padding: 0;
    width: 70%;
    height: auto;
    outline: 1px solid #5A5A5A;
    border-radius: 8px;
    margin: 5px 0;


    ul {
        padding: 0;
        list-style: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin: 0;
        
        li {
            margin: 1.5rem 0;
        }
    }
}

h2 {
    font-size: 2rem;
    font-family: 'Seymour One', sans-serif;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    }
a {
    color: #530A02;
    text-underline-offset: 4px;

    &:active {
        color: #C41A00;
    }

    &:hover {
        color: #000;
    }
}

</style>