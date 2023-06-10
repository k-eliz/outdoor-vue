<template>
  <main-header />
  <intro-section />
  <about-us-section />
  <our-promise-section />
  <categories-section />
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import AboutUsSection from "./components/AboutUsSection.vue";
import OurPromiseSection from "./components/OurPromiseSection.vue";
import CategoriesSection from "./components/CategoriesSection.vue";
export default {
  components: {
    MainHeader,
    IntroSection,
    AboutUsSection,
    OurPromiseSection,
    CategoriesSection,
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
