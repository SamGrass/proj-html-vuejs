<script>
export default {
    name: 'ProcessCard',
    props: {
        image: String,
        title: String,
        paragraph: String,
        num: Number,
    }

}
</script>

<template>
    <div class="ms_card">
        <a class="ms_image-circle" href="#!">
            <img  :src="image" :alt="image">
        </a>
        <div class="ms_bookmarker">{{ num + 1 }}</div>
        <h4><a href="#!">{{ title }}</a></h4>
        <p>{{ paragraph }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.ms_card {
    width: 300px;
    border: 1px solid $rose;
    border-radius: $rad-m;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;

    .ms_bookmarker {
        position: absolute;
        width: 2.5rem;
        top: 0;
        right: 5%;
        background-color: $lightgrey;
        padding: 2em 0 0.5em;
        border-radius: 0 0 $rad-m $rad-m;
        color: $grey;
        font-weight: 700;
    }
}

</style>