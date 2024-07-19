<script>
export default {
    name: 'JumbotronHome',

}
</script>

<template>
    <section class="jumbotron-section">

        <!-- img astronauti in absolute  -->

        <img class="background-element leftman" src="/left-man.png" alt="Left Astronaut">
        <img class="background-element rightman" src="/right-man.png" alt="Right Astronaut">

        <!-- titolo ,sottotitolo , paragrafo -->

        <div class="container">
            <div class="section-header">
                <h3>Imagine, Create, Experience</h3>
                <h1>We Animate <br> With Ninja-Like Precision</h1>
                <p>We are a character-driven animation studio striving to make high-quality animations.</p>
            </div>

            <!-- buttons start a project and Portofolio  -->
            <div class="button_container">
                <a class="button" href="#">Start a Project</a>
                <a class="button secondary-button" href="#">Portfolio</a>
            </div>

            <div class="row justify-content-center">
                <div class="col-xl-9">
                    <!-- Video -->
                    <div class="videointroduction">
                        <img src="/middle.png" alt="">
                        <div class="buttonplayer">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
    margin-top: 50px;
}

.videointroduction {
    width: 100%;
    min-height: 19rem;
    border-radius: 1rem;
    transform: translateY(200px);
    margin-top: -150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.videointroduction img {
    position: relative;
}

.button_container {
    z-index: 4;
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 50%;
    margin: 0 auto;
}

.button {
    box-shadow: 0 .5rem 1rem #6d648b9c;
}

// img astronauti in absolut 
.background-element {
    position: absolute;
    z-index: -1;
}

.background-element.leftman {
    left: 2%;
    top: 25%;
    width: 15rem;
}

.background-element.rightman {
    right: 2%;
    top: 25%;
    width: 15rem;
}

.buttonplayer {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: white;
    background-color: #a616ea;
    padding: 10px;
    position: absolute;
}

// //  // MEDIA QUERIES // // // 


@media screen and (max-width: 991px) {
    .background-element.leftman {
        width: 10rem;
    }

    .background-element.rightman {
        width: 10rem;
    }
}
</style>
