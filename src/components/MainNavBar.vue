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
    <header>
        <nav>
         <MainHamburger @menu-click="toggleMenu"/>
            <ul v-if="showMenu">
                <h4>Meny</h4> <!--kolla figma vilken typ av h! -->
                <li>Historia</li>
                <li>Förrätter</li>
                <li>Huvudrätter</li>
                <li>Efterrätter</li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
nav {
    background-color: white;
}
</style>