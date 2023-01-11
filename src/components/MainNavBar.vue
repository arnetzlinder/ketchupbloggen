<script setup lang="ts">
import { ref } from 'vue';
import MainHamburger from './MainHamburger.vue';

const showMenu = ref(false);

function toggleMenu(isMenuOpen:boolean):void { //här behöver jag lite hjälp med felmeddelandet?
    showMenu.value = isMenuOpen;
}
</script>

<template>
    <nav>
        <MainHamburger @menu-click="toggleMenu"/>
            <ul v-if="showMenu">
                <h2>Meny</h2> <!--kolla figma vilken typ av h! -->
                <li>Historia</li>
                <li>Förrätter</li>
                <li>Huvudrätter</li>
                <li>Efterrätter</li>
            </ul>
    </nav> 
</template>

<style scoped lang="scss">

nav {
    background-color: #d9d9d990;
    width: 80%;
    border: 1px solid #5A5A5A;
    border-radius: 8px;

    ul {
        list-style: none;
        text-align: center;
    }

    h2 {
        font-size: 2rem;
        font-family: 'Seymour One', sans-serif;
    }
}
</style>