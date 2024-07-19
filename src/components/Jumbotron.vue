<script>
export default {
    name: 'Jumbotron',

}
</script>

<template>


         <!-- CONTENUTO JUMBROTRON  -->

        <!-- img astronauti in absolute  -->

        <img class="planet leftman" src="../../public/left-man.png" alt="plantet">
        <img class="planet rightman" src="../../public/right-man.png" alt="plantet">

        <!-- titolo ,sottotitolo , paragrafo -->
         
        <div class="container">
            <div class="row justify-content-center text-center ">
                <div class="col-xl-9">
                    <h5>Imagine,Create,Experience</h5>
                    <h1>We Animate</h1>
                    <h1>With Ninja-Like Precision</h1>
                    <p>We are a character-driven animation studio striving to make high-quality animations.</p>

                    <!-- button start a project e Portofolio  -->
                    <div class="button_container">
                        <a class="button" href="#">Start a Project</a>
                        <a class="button alternative" href="#">Portofolio</a>
                    </div>

                    <!-- Video -->
                    <div class="videointroduction">
                        <img src="/public/middle.png" alt="">
                        <div class="buttonplayer">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>

<style lang="scss" scoped>

// Regole Jumbotron

@use '../styles/partials/variables' as *;


h5{
    color: $orange;
}

.container{
    margin-top: 50px;
}

.videointroduction{
    width: 100%;
    min-height: 19rem;
    border-radius:1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // debug
    // background-color: $orange;
}

.videointroduction img{
    z-index: 900;
}

.container p{
    margin-bottom: 2rem;
}

.button_container{
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
}

.button.alternative{
    background-color: $primary;
    border: $rose 1px solid;
    color: $white;
}

// img astronauti in absolut 
.planet{
    position: absolute;
    z-index: -1;
}

.planet.leftman{
    left: 2%;
    top: 25%;
    width: 15rem;
}

.planet.rightman{
    right: 2%;
    top: 25%;
    width: 15rem;
}

.buttonplayer{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: white;
    background-color:#a616ea;
    padding: 10px;
    position: absolute;
}


// //  // MEDIA QUERIES // // // 


@media screen and (max-width: 991px) {

    .container{
        width: 59%;
    }

    .planet.leftman{
        width: 10rem;
    }

    .planet.rightman{
        width: 10rem;
    }
}


</style>
