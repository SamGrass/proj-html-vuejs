<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'



export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Chakra Petch", sans-serif;
}
</style>
