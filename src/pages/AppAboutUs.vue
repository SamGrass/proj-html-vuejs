<script>
import TeamSection from '../components/TeamSection.vue';
import SmartSection from '../components/SmartSection.vue';
import FactsSection from '../components/FactsSection.vue';
import ServiceSection from '../components/ServiceSection.vue';

export default {
    name: 'AppAboutUs',
    components: {
        TeamSection,
        SmartSection,
        FactsSection,
        ServiceSection
    }

}
</script>

<template>
    <main>
        <SmartSection/>
        <FactsSection/>
        <ServiceSection/>
        <TeamSection/>
    </main> 
</template>

<style lang="scss" scoped></style>