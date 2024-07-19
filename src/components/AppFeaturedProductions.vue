<script>
export default {
    name: 'AppFeaturedProductions',

}

</script>


<template>

    <!-- contenuto Our Works  -->
    <section>
        <div class="container">


            <div class="row">

                <!-- titolo , sottotitolo e paragrafo  -->

                <div class="col-6 offset-3 text-center section-header">
                    <h3> Our Works </h3>
                    <h2> Featured Productions </h2>
                    <p> Here's just a small sample of some of those projects that we're quite proud of. If you're looking for something specific feel free to get in contact with us. </p>
                </div>

                <!-- 4 cards con effetto hover inclunato  -->

                <div class="offset-1 col-10 offset-1 d-flex flex-wrap">

                    <div class="card_featured_productions">
                        <img src="/work1.png" alt="">
                        <div class="overlay-hover">
                            <a class="play-circle">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>

                    <div class="card_featured_productions">
                        <img src="/work2.png" alt="">
                        <div class="overlay-hover">
                            <a class="play-circle">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>

                    <div class="card_featured_productions">
                        <img src="/work3.png" alt="">
                        <div class="overlay-hover">
                            <a class="play-circle">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>

                    <div class="card_featured_productions">
                        <img src="/work4.png" alt="">
                        <div class="overlay-hover">
                            <a class="play-circle">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- bottone See Our Work  -->
                <div class="col-12 d-flex justify-content-center jus text-center">
                    <a class="button alternative">
                        See Our Work
                    </a>
                </div>
            </div>
        </div>
    </section>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

h3 {
    color: $blue;
}

.card_featured_productions {
    width: calc((100% / 2) - 20px);
    border-radius: $rad-m;
    margin: 10px;
    transition: all $trns-stnd linear;
    position: relative;
    overflow: hidden;

    .overlay-hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transform: scale(0);
        @include flex-center;
        background-color: #3835c440;
        border-radius: inherit;
        border: 1px solid #e3e4ed;
        transition: all calc($trns-stnd * 2) linear;
        font-size: 1.25rem;

        .play-circle {
            @include flex-center;
            background-color: $white;
            color: $orange;
            width: 3.75rem;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
        }
    }

    &:hover {
        transform: skewX(3deg);

        .overlay-hover {
            transform: scale(1);
        }
    }
}

.button.alternative {
    color: black;
    margin: 1.5rem 0 7rem;

    &:hover {
        cursor: pointer;
    }
}

// bottone sottostante alle card 
.button.alternative {
    color: black;
    margin: 1.5rem 0 7rem;

    &:hover {
        cursor: pointer;
    }
}
</style>
