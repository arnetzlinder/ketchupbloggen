<template>
    <div v-if="!hide">
        <p>Tillåt användning av cookies</p>
        <button @click="hide = !hide">Acceptera och stäng</button>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                hide: false
            }
        }
    }
</script>

<style lang="scss" scoped>

    div {
        position: fixed;
        bottom: 0;
        width: 100vw;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: yellow;

        p {
            margin-inline-start: 2rem;
        }

        button {
            margin-inline-end: 2rem;
        }
    }

</style>