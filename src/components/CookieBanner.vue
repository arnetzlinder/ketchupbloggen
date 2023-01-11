<template>
    <div v-if="showCookieBanner">
        <p>Tillåt användning av cookies</p>
        <button @click="acceptCookies">Acceptera och stäng</button>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            showCookieBanner: true,
        }
    },
    methods: {
        acceptCookies() {
            this.showCookieBanner = false
            localStorage.setItem('acceptedCookies', String(true))
        },
    },
    mounted() {
        const acceptedCookies = localStorage.getItem('acceptedCookies')
        if (acceptedCookies) {
            this.showCookieBanner = false
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