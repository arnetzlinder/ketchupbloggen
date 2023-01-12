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
</script>

<style scoped lang="scss">
</style>