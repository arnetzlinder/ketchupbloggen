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
        width: 100vw;
        background-color: #dad0b2;

        p {
            padding-inline-start: 1rem;
        }

    }

    @media screen and (min-width: 1440px) {
        p {
            padding-inline-start: 2rem;
        }
    }
</style>