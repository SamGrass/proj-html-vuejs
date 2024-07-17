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
    <div class="ms_carousel-container">
        <div class="ms_carousel-hidden">
            <div class="ms_card" v-for="(sponsor, index) in store.sponsorList" :key="index">
                <img :src="sponsor.imageUrl" alt="">
            </div>
            
        </div>
        
    </div>
    
</template>

<style lang="scss" scoped>

    .ms_carousel-container {
        overflow: hidden;
        
        .ms_carousel-hidden {
            display: flex;
            justify-content: space-between;

            .ms_card {
                width: calc(100% / 6);
                margin-right: 1rem;

            }
        }
        
    }
    
</style>