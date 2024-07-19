<script>

export default {
    name: 'TeamSection',
    props: {
        image: String,
        name: String,
        role: String
    }

}
</script>

<template>
    <div class="ms_card">
        <!-- immagine -->
        <div class="ms_image-container">
            <img :src="image" :alt="name">
        </div>
        <h5>{{ name }}</h5>
        <p>{{ role }}</p>
        <!-- socials -->
        <ul class="d-flex justify-content-center ms_links">
            <!-- COLLEGARE AI SITI -->
            <li><a class="social-button" href="#!"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a class="social-button" href="#!"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a class="social-button" href="#!"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.ms_card {
    background-color: #fff5f0;
    width: calc(25% - 1rem);
    margin-top: 4rem;
    border-radius: $rad-m;

    .ms_image-container {
        position: relative;
        top: -3rem;
        left: 0;
        transition: all 0.3s ease;

        &:hover {
            top: -1.5rem;
        }
    }

    .ms_links {
        padding: 1rem 0;
        gap: 1rem;
    }
}
</style>