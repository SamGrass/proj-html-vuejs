<script>
import TeamSection from '../components/TeamSection.vue';
import SmartSection from '../components/SmartSection.vue';
import FactsSection from '../components/FactsSection.vue';
import ProcessSection from '../components/ProcessSection.vue';

export default {
    name: 'AppHome',
    components: {
        TeamSection,
        SmartSection,
        FactsSection,
        ProcessSection
    }

}
</script>

<template>
    <main>
        <SmartSection/>
        <FactsSection/>
        <!-- AGGIUNGERE COMPONENTE OUR WORKS -->
        <ProcessSection/>   
        <TeamSection/>
    </main>
</template>

<style lang="scss" scoped></style>