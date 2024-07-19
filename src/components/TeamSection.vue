<script>
import TeamCard from './TeamCard.vue';
import { store } from '../store.js';


export default {
    name: 'TeamSection',
    components: {
        TeamCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section>
        <!-- immagini cerchi da mettere ai lati -->

        <img class="ms_shape-sx" src="/shape.png" alt="">


        <img class="ms_shape-dx" src="/shape2.png" alt="">

        <!-- contenuto team -->
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-header">
                        <h3>
                            Anidio Magic Team Member
                        </h3>
                        <h2>
                            Let Us Animate Your Project
                        </h2>
                        <p>
                            We create new worlds! Let’s collaborate and create engaging, effective, award-winning animations
                        </p>
                    </div>
                    <!-- carosello team -->
                    <div>
                        <div class="ms_carousel-container">
                            <div class="ms_carousel-hidden"> 
                                <TeamCard v-for="(team, index) in store.teamList" :key="index" :image="team.imageUrl" :name="team.name" :role="team.role" />
                                <TeamCard v-for="(team, index) in store.teamList" :key="index" :image="team.imageUrl" :name="team.name" :role="team.role" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.ms_shape-sx,
.ms_shape-dx {
    position: absolute;
    height: 80%;
}

.ms_shape-sx {
    left: 0;
    bottom: 0;
}

.ms_shape-dx {
    right: 0;
    top: 0;
}

.ms_carousel-container {
        overflow: hidden;

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc((-315px)* 4))}
        }

        .ms_carousel-hidden {
            display: flex;
            gap: 15px;
            justify-content: center;
            animation: scroll 30s linear infinite;
            width: calc(315px * 8);
            }
        }
</style>