<template>
    <div id="search-bar-container"> <!--container för allt innehåll i navbar-->
        <input @focus="showSearch()" type="text" placeholder="ketchupsoppa">
        <button id="magnifying-glass" > <!--knappen med förstoringsglas med klick funktion-->
            <!--länkar in svg med ikonen-->
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
        </button>
    </div>
</template>

<script lang="ts">
// importerar gsap bibliotek
import { gsap } from "gsap"; 

    export default {
        name: 'Search-Focus',
        // funktion med gsap
        methods:{
            showSearch()
            {  gsap.to('#magnifying-glass', {
                scale: 1.5,
                repeat: 1,
                yoyo: true,
                duration: 1, });  
            }   
        }
    }

</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

#search-bar-container{
    padding: 10px;
    display: flex;
    justify-content: center;

    input{
        background-color:#dad0b27c;
        border-radius: 5px;
        border: none;
        border: 1px solid black;
        font-family: $secondaryFont;
        padding: 5px;
        
    }

    #magnifying-glass{
    background-color: transparent;
    border: none;
}
}

</style>