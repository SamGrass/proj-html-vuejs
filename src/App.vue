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

h1,
h2 {
  font-weight: 700;
}

h3,
h4 {
  font-weight: 500;
}

section {
  padding: 7.5rem 0;
  position: relative;
  color: $primary;
  text-align: center;

  .section-header {
    margin-bottom: 3.125rem;
  }

  h2 {
    font-size: 3.625rem;
  }

  h3 {
    font-size: 1.5rem;
    color: $blue;
  }
}
</style>
