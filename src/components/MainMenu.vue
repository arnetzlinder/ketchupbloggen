<template>
    <nav>
        <ul v-if="isOpen">
            <h2>Meny</h2>
            <li><a href="#">Historia</a></li>
            <li><a href="#">Förrätter</a></li>
            <li><a href="#">Huvudrätter</a></li>
            <li><a href="#">Efterrätter</a></li>
        </ul>
    </nav> 
</template>

<script lang='ts'>
    export default {
        props: ['isOpen'],
    }
</script>

<style scoped lang="scss">
    nav {
        background-color: #d9d9d990;
        padding: 0;
        width: 375px;
        height: auto;
        outline: 1px solid #5A5A5A;
        border-radius: 8px;
        margin-left: 8px;

        ul {
            padding: 0;
            list-style: none;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin: 0;
            
            li {
                margin: 1.5rem 0;
            }
        }
    }

    h2 {
        font-size: 2rem;
        font-family: 'Seymour One', sans-serif;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        }
    a {
        color: #530A02;
        text-underline-offset: 4px;

        &:active {
            color: #C41A00;
        }

        &:hover {
            color: #000;
        }
    }
</style>