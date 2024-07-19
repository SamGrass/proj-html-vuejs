<script>
export default {
    name: 'AppFeaturedProductions',

    data() {
        return {
            featuredWorks: [
                {
                    image: '/work1.png',
                    link: '#'
                },
                {
                    image: '/work2.png',
                    link: '#'
                },
                {
                    image: '/work3.png',
                    link: '#'
                },
                {
                    image: '/work4.png',
                    link: '#'
                }
            ]
        }
    }
}

</script>


<template>
    <section>
        <div class="container">
            <div class="offset-lg-1 col-lg-10 offset-lg-1 text-center section-header">
                <h3> Our Works </h3>
                <h2> Featured Productions </h2>
                <p> Here's just a small sample of some of those projects that we're quite proud of. If you're looking for something specific feel free to get in contact with us. </p>
            </div>

            <ul class="row">
                <li v-for="work in featuredWorks" class="col-md-6 col-12">
                    <div class="card-featured-productions">
                        <img :src="work.image" alt="">
                        <div class="overlay-hover">
                            <a :href="work.link" class="play-circle">
                                <i class="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>

            <!-- bottone See Our Work  -->
            <div class="col-12 d-flex justify-content-center jus text-center">
                <a class="button alternative">
                    See Our Work
                </a>
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

.card-featured-productions {
    width: 100%;
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
    background-color: $transparent;
    margin: 1.5rem 0 7rem;
    border: 1px $rose solid;

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
