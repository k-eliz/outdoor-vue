<template>
  <div class="categories-section">
    <section-header
      class="section-header"
      subtitle="Meet the family"
      title="What we have in store for you."
      text="Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt."
    />
    <div class="cards">
      <categories-card
        photo="card1.jpg"
        title="Accessories"
        text=" Accessories you didn't know you needed."
        link="View Accessories"
        address="#"
      />
      <categories-card
        photo="card2.jpg"
        title="Apparel"
        text="Check out our line of non-hiking clothes."
        link="View Apparel"
        address="#"
      />
      <categories-card
        photo="card3.jpg"
        title="Climbing Gear"
        text="Climbing gear for every occasion."
        link=" View Climbing Gear"
        address="#"
      />
      <categories-card
        photo="card4.jpg"
        title="Headwear"
        text="Our beanies are so comfy you won't believe it."
        link="View Headwear"
        address="#"
      />
      <categories-card
        photo="card5.jpg"
        title="Hiking Gear"
        text=" Desert or mountain? Doesn't matter."
        link="View Hiking Gear"
        address="#"
      />
      <categories-card
        photo="card6.jpg"
        title="Jackets"
        text=" Our jackets are perfect for every season."
        link="View Jackets"
        address="#"
      />
    </div>
    <a href="#" class="link">
      <span>Show all categories</span><i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</template>
<script>
import SectionHeader from "./SectionHeader.vue";
import CategoriesCard from "./CategoriesCard.vue";
export default {
  components: {
    SectionHeader,
    CategoriesCard,
  },
};
</script>

<style scoped>
.section-header {
  text-align: center;
  max-width: 540px;
}
.categories-section {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 16px;
  padding: 21px 0;
}

.link {
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: normal;
  margin: 0 auto;
  padding-bottom: 100px;
  font-size: 15px;
  color: #575445;
}
</style>
