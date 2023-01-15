<template>
    <div id="search-container">
        <div id="input-container">
            <input @click="toggleSearch()"  type="text" placeholder="ketchupsoppa">
                <div id="search-menu" v-if="searchOpen">
                    <ul>
                        <li>Ketchupsoppa</li>
                        <li>Ketchupsoppa med sting</li>
                        <li>Ketchupsoppa med klös</li>
                    </ul>
                </div>
        </div>
        <SearchIcon />
    </div>
</template>

<script lang="ts">
import SearchIcon from './SearchIcon.vue';

    export default {
        components: {
            SearchIcon,
        },
        name: 'Search-Focus',
        data() {
            return {
                searchOpen: false,
            }
        },
        methods:{
            toggleSearch(){
                this.searchOpen = !this.searchOpen;
            },
        }
    }

</script>

<style lang="scss" scoped>
@import '../scss/style.scss';




#search-container{
    display: flex;

    #input-container{

    input{
        margin-top: 5px;
        width: 150px;
        height: 35px;
        background-color:#dad0b27c;
        border-radius: 5px;
        border: 1px solid black;
        font-family: $secondaryFont;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom: 2px;
        padding-left: 5px;
    }
}

#search-menu{
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 275px;
    height: 185px;
    border: 1px solid black;
    z-index: 10;
    position: absolute;
    margin-left: -115px;
    ul{
        padding: 10px;
        li{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding-left: 5px;
        color: #530A02;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color:#dad0b27c;
        border-radius: 5px;
        border: 1px solid black;
        font-family: $secondaryFont;
        list-style: none;
        width: 230px;
        height: 35px;
        text-decoration: underline;
        margin: auto;
        margin-bottom: 15px;
    }

    }


    }

}

</style>