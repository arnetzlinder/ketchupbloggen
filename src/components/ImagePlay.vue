<template>
    <div>
        <button @click="goBackward" class="material-symbols-outlined">
        arrow_back_ios
        </button>
        <img :src="'../../assets/images'+images[this.currentIndex]" alt="recepies[]alt" width="300" height="200" loading="lazy" />
        <button @click="goForward" class="material-symbols-outlined">
        arrow_forward_ios 
        </button>
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="sass" scoped>

</style>