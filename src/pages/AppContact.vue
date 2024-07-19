<script>
import ContactSection from '../components/ContactSection.vue';
import FAQSection from '../components/FAQSection.vue';

export default {
    name: 'AppContact',

    components: {
        ContactSection,
        FAQSection
    }
}
</script>

<template>
    <ContactSection />
    <FAQSection />
</template>

<style lang="scss" scoped></style>