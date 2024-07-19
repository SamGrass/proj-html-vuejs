<script>
export default {
    name: 'SponsorCard',
    props: {
        image: String,
    }
}
</script>

<template>
    
    <div class="ms_card">
        <img :src="image" :alt="image">
    </div>

</template>

<style lang="scss" scoped>

.ms_card {
    min-width: 200px;
}
       
    
</style>