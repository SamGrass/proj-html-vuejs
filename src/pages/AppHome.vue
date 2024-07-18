<script>
import TeamSection from '../components/TeamSection.vue';
import SmartSection from '../components/SmartSection.vue';
import FactsSection from '../components/FactsSection.vue';

export default {
    name: 'AppHome',
    components: {
        TeamSection,
        SmartSection,
        FactsSection
    }

}
</script>

<template>
    <main>
        <SmartSection/>
        <FactsSection/>
        <!-- AGGIUNGERE COMPONENTE OUR WORKS -->
        <!-- AGGIUNGERE COMPONENTE OUR PROCESS -->   
        <TeamSection/>
    </main>
</template>

<style lang="scss" scoped></style>