<template>
  <div class="our-magazine-section">
    <img src="../assets/book.jpg" alt="our magazine" />
    <section-header
      subtitle="Some light reading"
      title="Subscribe to our magazine today."
      text=" We are an outdoor gear company focused on Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio
              et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi
              neque ex, condimentum dapibus congue et."
      link="#"
    />
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    SectionHeader,
  },
};
</script>

<style scoped>
.our-magazine-section {
  display: flex;
  flex-direction: row;
  gap: 104px;
  padding: 136px;
}
</style>
