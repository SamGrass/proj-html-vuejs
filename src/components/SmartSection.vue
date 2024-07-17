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
                    image: '../../public/smart1.png',
                    link: '#',
                    title: '3D modeling',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we&apos;ll drill deep to deliver above and beyond your expectations.'
                },
                {
                    image: '../../public/smart2.png',
                    link: '#',
                    title: 'Collaboration',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we&apos;ll drill deep to deliver above and beyond your expectations.'
                },
                {
                    image: '../../public/smart3.png',
                    link: '#',
                    title: 'Creativity',
                    paragraph: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we&apos;ll drill deep to deliver above and beyond your expectations.'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="smart-section">
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <h3>
                        Our Love For Animation
                    </h3>
                    <h2>
                        We're Storytelling Experts With Creative Smarts
                    </h2>
                    <p>
                        Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe
                        life
                        into
                        new ideas!
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-9 offset-3">
                    <ul class="row smart-cards-container">
                        <li class="col-4" v-for="card in smartCards">
                            <SmartCard :imagePath="card.image" :titleURL="card.link" :titleText="card.title"
                                :paragraphText="card.paragraph" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="smart-mascotte">
            <img src="../../public/smart.png" alt="Smart Mascotte">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.smart-section {
    position: relative;

    .container {
        position: relative;
        z-index: 2;

        .smart-cards-container {
            li:nth-child(2)>.smart-card {
                background: linear-gradient(180deg, #ffffff, #edeafb), #edeafb;

                &:hover {
                    background: linear-gradient(0deg, #ffffff, #edeafb), #edeafb;
                }
            }

            li:nth-child(3)>.smart-card {
                background: linear-gradient(180deg, #ffffff, #ffe5e7), #ffe5e7;

                &:hover {
                    background: linear-gradient(0deg, #ffffff, #ffe5e7), #ffe5e7;
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

        img {
            height: 100%;
        }
    }
}
</style>