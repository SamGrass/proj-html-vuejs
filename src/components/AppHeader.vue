<script>
export default {
    name: 'AppHeader',

}
</script>

<template>

    <header>
        <!-- pianeti in absolute  -->
        <div>
            <img class="planet uno" src="../../public/globe1.png" alt="plantet">
            <img class="planet due" src="../../public/globe2.png" alt="plantet">
            <img class="planet tre" src="../../public/globe3.png" alt="plantet">
            <img class="planet ufo" src="../../public/light.png" alt="plantet">
            <img class="planet starleft" src="../../public/dots-left.png" alt="plantet">
            <img class="planet starlight" src="../../public/dots-right.png" alt="plantet">
        </div>

        <!-- navbar con logo , link per le pagine e bottone Get a Quote  -->
        <nav>
            <img src="/public/logo.png" alt="">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contacs</li>
                </ul>
                
            </div>
            <a class="button" href="#">Get a Quote</a>
        </nav>

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

                    <!-- Video https://www.youtube.com/watch?v=sNub3X8fHew -->
                    <div class="videointroduction">
                        <img src="/public/middle.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="../../public/bottom-shape.png" alt="">
        </div>
    </header>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

// bottone da spostare in general 
.button{
    width: 10rem;
    height: 3rem; 
    border-radius: 2rem;
    background-color: $rose;
    text-align: center;
    padding-top: 9px;
}

// regole generali header 
header {
    width: 100%;
    background: url(../../public/banner-bg.png);
    background-size: cover;
    color: white;
    position: relative;
    z-index: 900;
    // debug
    min-height: 10rem;   
}

// regole navbar
nav{
    padding-top: 2rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul{
    display: flex;
    padding-top: 1rem;
}

li{
    margin: 0 1rem;
}

li:hover{
    color: $orange;
    cursor: pointer;
}

// regole dei pianeti in background 

.planet{
    position: absolute;
    z-index: -1;
}


.planet.uno{
    top: 10%;
    left: 10%;
}

.planet.due{
    top: 18%;
    right: 30%;
}

.planet.tre{
    top: -18%;
    left: 33%;
}

.planet.ufo{
    right: 9%;
    top: 11%;
}

.planet.starleft{
    top: 5%;
    left: 1%;
}

.planet.starlight{
    top: 8%;
    right: 1%;
    z-index: -2;
}

// Regole Jumbotron

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
    // debug
    // background-color: $orange;
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



.planet.leftman{
    left: 2%;
    top: 25%;
}

.planet.rightman{
    right: 2%;
    top: 25%;
}

</style>
