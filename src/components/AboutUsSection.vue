<template>
  <div class="about-us-section">
    <img src="../assets/about-us.jpg" alt="about us" />
    <section-header
      subtitle="Who are we?"
      title="A bit about us."
      text="We are an outdoor gear company focused on Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nullam scelerisque aliquam
                odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
                Morbi neque ex, condimentum dapibus congue et."
      link="#"
    ></section-header>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    SectionHeader,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.about-us-section {
  background: url("../assets/background1.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 100px;
}
</style>
