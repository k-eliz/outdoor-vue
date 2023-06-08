<template>
  <div class="our-promise-section">
    <section-header
      subtitle="Our promise"
      title="Setting the bar for our products."
      text="Morbi neque ex, condimentum dapibus congue et, vulputate ut
                ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
                nisi ultrices, ut faucibus orci tincidunt."
    ></section-header>
    <our-promise-card
      photo="card1.svg"
      title="Sustainable sourcing"
      text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
    ></our-promise-card>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import OurPromiseCard from "./OurPromiseCard.vue";
export default {
  components: {
    SectionHeader,
    OurPromiseCard,
  },
};
</script>

<style lang="scss" scoped></style>
