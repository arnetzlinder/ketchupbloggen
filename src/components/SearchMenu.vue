<template>
    <div id="search-menu">
        <ul>
            <li>Ketchupsoppa</li>
            <li>Ketchupsoppa med sting</li>
            <li>Ketchupsoppa med klös</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

#search-menu{
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 275px;
    height: 185px;
    border: 1px solid black;
    position: relative;
    margin-right: 8px;
    display: flex;
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        li{
        background-color:#dad0b27c;
        border-radius: 5px;
        border: none;
        border: 1px solid black;
        font-family: $secondaryFont;
        list-style: none;
        width: 230px;
        height: 35px; 
    }

    }


}

</style>