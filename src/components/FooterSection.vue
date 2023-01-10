<template>
    <footer>
        <p>
            Alla recept är skapade av team Ketchup
        </p>
    </footer>
</template>

<style scoped lang="scss">
@forward '../scss/style.scss';

    footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        padding-inline-start: 1rem;
        background-color: #dad0b2;

    }

    @media screen and (min-width: 1440px) {
        footer {
            padding-inline-start: 2rem;
        }
    }
</style>