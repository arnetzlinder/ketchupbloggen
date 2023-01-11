<template>
<header>
    <div class="h1-container">
        <h1>Shit you can do with ketchup</h1>
    </div>
</header>
</template>

<style scoped lang="scss">
@forward '../scss/style.scss';



@media screen and (min-width: 360px) {
    header{
    border: 1px solid black;
    height: 195px;
    color: #FFF3D0;;
    background-image: url('assets/images/KetchupbloggenHeaderImg-Mobile.webp');
    background-size: cover;
    background-repeat: no-repeat;
    .h1-container{
        padding: 11px;

        h1{
        font-size: 32px;
    }
    }

}

    }

    @media screen and (min-width: 744px) {
        header{
            height: 322px;
            background-image: url('assets/images/KetchupbloggenHeaderImg-Tablet.webp');
            .h1-container{
        padding: 20px;


        h1{
        font-size: 64px;
        margin-top: 20px;
        margin-left: 20px;
    }
    }
        }

    }

    @media screen and (min-width: 1440px) {
        header{
            height: 436px;
            background-image: url('assets/images/KetchupbloggenHeaderImg-Desktop.webp');
            .h1-container{

        padding: 34px;


        h1{
        font-size: 64px;
    }
    }
        }

    }

</style>