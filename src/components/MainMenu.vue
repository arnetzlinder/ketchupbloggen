<template>
    <section>
        <nav>
            <ul v-if="isOpen">
                <h2>Meny</h2>
                <li><a href="#">Historia</a></li>
                <li><a href="#">Förrätter</a></li>
                <li><a href="#">Huvudrätter</a></li>
                <li><a href="#">Efterrätter</a></li>
            </ul>
        </nav> 
    </section>
</template>

<script lang='ts'>
    export default {
        props: ['isOpen'],
           
        
    }
</script>

<style scoped lang="scss">
</style>