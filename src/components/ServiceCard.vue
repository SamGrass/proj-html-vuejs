<script>
export default {
    name: 'ServiceCard',
    props: {
        image: String,
        title: String,
        paragraph: String,
    }

}
</script>

<template>
    <div class="ms_card">
        <a class="ms_image-circle" href="#!">
            <img :src="image" :alt="image">
        </a>
        <h4><a href="#!">{{ title }}</a></h4>
        <p>{{ paragraph }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.ms_card {
    width: 100%;
    border: 1px solid $rose;
    border-radius: $rad-m;
    box-shadow: 0 0.5rem 1rem 0 rgba(48, 5, 108, 0.05);
    padding: 2rem;
    transition: all 0.3s ease;


    &:hover {
        box-shadow: none;
    }
}
</style>