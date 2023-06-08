<template>
  <main-header></main-header>
  <intro-section></intro-section>
  <about-us-section></about-us-section>
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import AboutUsSection from "./components/AboutUsSection.vue";
export default {
  components: {
    MainHeader,
    IntroSection,
    AboutUsSection,
  },
};
</script>
<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
html,
body {
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}
</style>
