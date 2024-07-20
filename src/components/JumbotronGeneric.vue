<script>
export default {
    name: 'JumbotronAboutUs',

    props: {
        nameOfPage: String,
        mascotte: String
    }
}
</script>


<template>
    <section class="jumbotron-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-7 col-xxl-6">
                    <div class="section-header">
                        <h1>{{ nameOfPage }}</h1>
                        <span><a href="/">Home</a>&emsp;<i class="fa-solid fa-arrow-right-long"></i>&emsp;{{ nameOfPage }}</span>
                    </div>
                </div>

                <div class="d-none d-lg-block col-lg-5 col-xxl-6 height-giver">
                    <div v-if="mascotte" class="background-image jumbotron-mascotte">
                        <img :src="'/' + mascotte" alt="Jumbotron Mascotte">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.jumbotron-section {
    padding-bottom: 5.75rem;

    .section-header {
        text-align: left;
        margin-bottom: 0;
    }

    .height-giver {
        aspect-ratio: 14 / 7;

        .jumbotron-mascotte {
            width: 100%;
            height: 100%;
            animation: jumboscotte 3s linear infinite;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: right;
            }
        }
    }
}

@keyframes jumboscotte {
    0% {
        transform: translateY(.5rem);
    }

    50% {
        transform: translateX(.5rem);
    }

    100% {
        transform: translateY(.5rem);
    }
}
</style>