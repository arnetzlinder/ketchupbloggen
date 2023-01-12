<template>
    <div>
        <h2>ImagePlay.vue</h2>
        <button> </button>
        <pre>
            {{ imageData[0] }}
        </pre>
        <!-- bilder måste ligga i public-mappen för att funka -->
        <img :src="imageData[0].img" :alt="imageData[0].alt" width="300" height="200" loading="lazy" />
        <button> </button>


    </div>
</template>
<script setup lang="ts">
const props = defineProps(['imageData']);
console.log(props);
</script>

<style lang="sass" scoped>
</style>