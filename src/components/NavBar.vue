<template>
    <HamburgerBtn  @menu-click="toggleMenu"/> <!-- Här kopplas klick-eventet "menu-click" ihop från komponenten "HamburgerBtn" (se rad 16 i HamburgerBtn.vue) @-tecken används för att koppla event. -->
    <!--<input type="text">-->
    <!--Icon-->
    <MainMenu :is-open="showMenu" /> <!-- Här kopplar vi ihop if-satsen från komponenten "MainMenu.vue", det görst med ett :-tecken, vilket är en förkortning av v-bind. -->
</template>

<script lang="ts">
    import HamburgerBtn from './HamburgerBtn.vue';
    import MainMenu from './MainMenu.vue';
    export default {
        components: {       // components-deklarationen gör att vi kan använda dess props i vår template-tagg.
            HamburgerBtn,
            MainMenu,
        },
        data() {
            return {
                showMenu: false, // Variabel-deklaration, boolean. 
            }
        },
        methods: {
            toggleMenu() {
                console.log('click');
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>








<style scoped lang="scss">
</style>