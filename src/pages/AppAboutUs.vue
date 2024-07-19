<script>
import TeamSection from '../components/TeamSection.vue';
import SmartSection from '../components/SmartSection.vue';
import FactsSection from '../components/FactsSection.vue';
import ServiceSection from '../components/ServiceSection.vue';
import SponsorSection from '../components/SponsorSection.vue';

export default {
    name: 'AppAboutUs',
    components: {
        TeamSection,
        SmartSection,
        FactsSection,
        ServiceSection,
        SponsorSection
    }

}
</script>

<template>
    <main>
        <SmartSection/>
        <FactsSection/>
        <ServiceSection/>
        <TeamSection/>
        <SponsorSection/>
    </main> 
</template>

<style lang="scss" scoped></style>