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

                <div v-if="mascotte" class="d-none d-lg-block col-lg-5 col-xxl-6">
                    <div class="background-image">
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
    }

    .background-image {
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>