<script>
import ServiceCard from './ServiceCard.vue';
import { store } from '../store.js';

export default {
    name: 'ServiceSection',
    components: {
        ServiceCard
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
        <div class="container">
            <div class="section-header">
                <h3>Our Service</h3>
                <h2>Animations, Bespoke and Beautiful</h2>
                <p>With the magic of imagination we are able to tell stories, animate adventures, create art.</p>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 g-4" v-for="(service, index) in store.serviceList" :key="index">
                    <ServiceCard :image="service.image" :title="service.title" :paragraph="service.paragraph" />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped></style>