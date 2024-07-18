
<script>
export default {
    name: 'AppFeaturedProductions',

}

</script>


<template>

    <!-- contenuto Our Works  -->

<div class="row">

    <!-- titolo , sottotitolo e paragrafo  -->

    <div class="col-6 offset-3 text-center">
        <h3> Our Works </h3>
        <h2> Featured Productions </h2>
        <p> Here's just a small sample of some of those projects that we're quite proud of. If you're looking for something specific feel free to get in contact with us. </p>
    </div>

    <!-- 4 cards con effetto hover inclunato  -->

    <div class="offset-1 col-10 offset-1 d-flex flex-wrap">

        <div class="card_featured_productions">
            <img src="/public/work1.png" alt="">
            <i class="fa-solid fa-play"></i>
        </div>

        <div class="card_featured_productions">
            <img src="/public/work2.png" alt="">
            <i class="fa-solid fa-play"></i>
        </div>

        <div class="card_featured_productions">
            <img src="/public/work3.png" alt="">
            <i class="fa-solid fa-play"></i>
        </div>

        <div class="card_featured_productions">
            <img src="/public/work4.png" alt="">
            <i class="fa-solid fa-play"></i>
        </div>
    </div>

    <!-- bottone See Our Work  -->
    <div class="col-12 d-flex justify-content-center jus text-center">
        <a class="button alternative">
            See Our Work
        </a>
    </div>
</div>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h3{
    color: $blue;
}

.card_featured_productions{
    width: calc((100% / 2) - 40px);
    border-radius: $rad-xl;
    margin: 20px;
    position: relative;
    // debug
    // background-color: $primary;
    // border: 2px white solid;
}

.card_featured_productions img:hover{
    width: 100%;
    z-index: 900;
    transform: skewX(3deg);
    transition: 0.3s;
}

.button.alternative{
    color: black;
    margin: 1.5rem 0 7rem;
}

i{
    background-color: $orange;
    width: 12%;
    height: 18%;
    border-radius: 50%;
    text-align: center;
    padding-top: 0.7rem;
    padding-left: 0.1rem;
    background-color: $white;
    position: absolute;
    top: 47%;
    left:47%;
}

.fa-play{
    font-size: 1.2rem;
    color: $orange;
}
</style>
