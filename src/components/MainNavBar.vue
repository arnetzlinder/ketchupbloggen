<script setup lang="ts">
import { ref } from 'vue';
import MainHamburger from './MainHamburger.vue';

const showMenu = ref(false);

function toggleMenu(isMenuOpen:boolean):void { //här behöver jag lite hjälp med felmeddelandet?
    showMenu.value = isMenuOpen;
}
</script>

<template>
    <section> <!--TILLFÄLLIG platshållare -->
        <nav>
        <MainHamburger @menu-click="toggleMenu"/>  
            <ul v-if="showMenu">
                <h2>Meny</h2>
                <li>Historia</li>
                <li>Förrätter</li>
                <li>Huvudrätter</li>
                <li>Efterrätter</li>
            </ul>
        </nav> 
    </section>
</template>

<style scoped lang="scss">

section {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 50px;
}

nav {
    background-color: #d9d9d990;
    padding: 0;
    width: 70%;
    height: auto;
    border: 1px solid #5A5A5A;
    border-radius: 8px;
    margin: 5px 0 0 8px;

    ul {
        padding: 0;
        list-style: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        display: inline;
        
        li {
            margin: 1.5rem 0;
        }
    }

    h2 {
        font-size: 2rem;
        font-family: 'Seymour One', sans-serif;
        margin-top: 0;
        margin-bottom: 2.5rem;
    }
}
</style>