<script>
import SmartCard from './SmartCard.vue';

export default {
    name: 'SmartSection',

    components: {
        SmartCard
    },

    data() {
        return {
            smartCards: [
                {
                    image: 'smart1.png',
                    link: '#',
                    title: '3D modeling',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we\'ll drill deep to deliver above and beyond your expectations.'
                },
                {
                    image: 'smart2.png',
                    link: '#',
                    title: 'Collaboration',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we\'ll drill deep to deliver above and beyond your expectations.'
                },
                {
                    image: 'smart3.png',
                    link: '#',
                    title: 'Creativity',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we\'ll drill deep to deliver above and beyond your expectations.'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="smart-section">
        <div class="container">
            <div class="row section-header">
                <div class="col-6 offset-3">
                    <h3>
                        Our Love For Animation
                    </h3>
                    <h2>
                        We're Storytelling Experts With Creative Smarts
                    </h2>
                    <p>
                        Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe life into new ideas!
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-9 offset-3">
                    <ul class="row smart-cards-container">
                        <li class="col-4" v-for="card in smartCards">
                            <SmartCard :imagePath="'/' + card.image" :titleURL="card.link" :titleText="card.title" :paragraphText="card.paragraph" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="smart-mascotte background-element">
            <img src="/smart.png" alt="Smart Mascotte">
        </div>

        <div class="rocket background-element">
            <img src="/smart4.png" alt="Rocket">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.smart-section {
    .container {
        position: relative;
        z-index: 2;

        .smart-cards-container {
            li:nth-child(2)>.smart-card {
                background-color: #edeafb;
                background-image: linear-gradient(180deg, #ffffff, #edeafb);

                &:hover {
                    background-image: linear-gradient(0deg, #ffffff, #edeafb);
                }
            }

            li:nth-child(3)>.smart-card {
                background-color: #ffe5e7;
                background-image: linear-gradient(180deg, #ffffff, #ffe5e7);

                &:hover {
                    background-image: linear-gradient(0deg, #ffffff, #ffe5e7);
                }
            }
        }
    }

    .smart-mascotte {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
    }

    .rocket {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        height: 8.75rem;
    }

    img {
        height: 100%;
    }
}
</style>