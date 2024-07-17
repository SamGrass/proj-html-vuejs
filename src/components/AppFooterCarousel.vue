<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card-container">
        <div class="card" v-for="(sponsor, index) in store.sponsorList" :key="index">
            <img :src="sponsor.imageUrl" alt="">
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    .card-container {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        .card {
            width: calc(100% / 6 - 1rem);
        

        }
    }
    
</style>