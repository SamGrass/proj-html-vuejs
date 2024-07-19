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
            <div class="row">
                <div class="col">
                    <div class="section-header">
                        <h3>Our Service</h3>
                        <h2>Animations, Bespoke and Beautiful</h2>
                        <p>With the magic of imagination we are able to tell stories, animate adventures, create art.</p>
                    </div>
                    <div class="ms_service-container">
                        <ServiceCard v-for="(service, index) in store.serviceList" :key="index" :image="service.image" :title="service.title" :paragraph="service.paragraph" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.ms_service-container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>