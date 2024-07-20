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

// Default page section
section {
  padding: 7.5rem 0;
  position: relative;
  color: $primary;
  text-align: center;

  .section-header {
    margin: 0 auto 3.125rem;
    width: 95%;
    max-width: 45rem;

    p {
      margin: 0 3.75rem;
    }
  }

  h2 {
    font-size: 3.625rem;
  }

  h3 {
    font-size: 1.5rem;
    color: $blue;
  }
}

// Jumbotron section
section.jumbotron-section {
  color: $white;
  padding: 0;

  .section-header {
    max-width: 100%;
    width: 100%;

    h1 {
      font-size: 4.75rem;
    }

    h3 {
      color: $orange;
    }

    p {
      font-size: 1.5rem;
    }
  }
}

// Purple crack-like page section
section.crack-section {
  background-image: url(/counter-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: $white;

  h3 {
    color: $orange;
  }
}
</style>
