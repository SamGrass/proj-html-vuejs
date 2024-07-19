<script>
import TeamSection from '../components/TeamSection.vue';
import SmartSection from '../components/SmartSection.vue';
import FactsSection from '../components/FactsSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import AppFeaturedProductions from '../components/AppFeaturedProductions.vue';


export default {
    name: 'AppHome',
    components: {
        TeamSection,
        SmartSection,
        FactsSection,
        ProcessSection,
        AppFeaturedProductions,
    }

}
</script>

<template>
    <main>
        <SmartSection/>
        <FactsSection/>
        <AppFeaturedProductions/>
        <ProcessSection/>   
        <TeamSection/>
    </main>
</template>

<style lang="scss" scoped></style>