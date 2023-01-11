<script setup lang="ts">
import { ref } from 'vue';
import MainHamburger from './MainHamburger.vue';

const showMenu = ref(false);

function toggleMenu(isMenuOpen:boolean):void { //här behöver jag lite hjälp med felmeddelandet?
    showMenu.value = isMenuOpen;
console.log(isMenuOpen);
}
</script>

<template>
    <nav>
    <MainHamburger @menu-click="toggleMenu"/>
        <ul v-if="showMenu">
            <header>Meny</header>
                <li>Historia</li>
                <li>Förrätter</li>
                <li>Huvudrätter</li>
                <li>Efterrätter</li>
            </ul>
    </nav>
</template>