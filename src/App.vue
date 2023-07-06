<template>
  <main-header />
  <intro-section />
  <about-us-section />
  <our-promise-section />
  <categories-section />
  <photo-section />
  <shop-section />
  <guides-section />
  <our-magazine-section />
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import AboutUsSection from "./components/AboutUsSection.vue";
import OurPromiseSection from "./components/OurPromiseSection.vue";
import CategoriesSection from "./components/CategoriesSection.vue";
import PhotoSection from "./components/PhotoSection.vue";
import ShopSection from "./components/ShopSection.vue";
import OurMagazineSection from "./components/OurMagazineSection.vue";
import GuidesSection from "./components/GuidesSection.vue";
export default {
  components: {
    MainHeader,
    IntroSection,
    AboutUsSection,
    OurPromiseSection,
    CategoriesSection,
    PhotoSection,
    ShopSection,
    OurMagazineSection,
    GuidesSection,
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
