<template>
  <div class="our-promise-section">
    <section-header
      class="section-header"
      subtitle="Our promise"
      title="Setting the bar for our products."
      text="Morbi neque ex, condimentum dapibus congue et, vulputate ut
                ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
                nisi ultrices, ut faucibus orci tincidunt."
    ></section-header>
    <div class="our-promise-cards">
      <our-promise-card
        photo="card1.svg"
        title="Sustainable sourcing"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
      <our-promise-card
        photo="card2.svg"
        title="Lifetime warranty"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
      <our-promise-card
        photo="card3.svg"
        title="All-terrain tested"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
      <our-promise-card
        photo="card4.svg"
        title="Premium materials"
        text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
      <our-promise-card
        photo="card5.svg"
        title="Designed by you"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
      <our-promise-card
        photo="card6.svg"
        title="Quality assured"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
      />
    </div>
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

<style scoped>
.our-promise-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.our-promise-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;
  row-gap: 110px;
  padding-top: 70px;
}
.section-header {
  text-align: center;
  max-width: 540px;
}
</style>
