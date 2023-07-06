<template>
  <div class="guides-section">
    <section-header
      class="section-header"
      subtitle="Buyer's guides"
      title="Navigating our offering."
      text=" Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt."
    />
    <div class="section-cards">
      <guides-card
        picture="post_img1.jpg"
        title="3 climbing accessories for the climber that has everything"
        photo="user1.jpg"
        name="Alex Jenna"
        prof="QA"
        :date="new Date('October 18, 2021')"
      />
      <guides-card
        picture="post_img2.jpg"
        title="Biking accessories for the beaten path"
        photo="user2.jpg"
        name="Woodie Brandon"
        prof="Product Designer"
        :date="new Date('October 18, 2021')"
      />
    </div>
    <a href="#" class="link">
      <span>Show all buyer's guides</span><i class="fa-solid fa-arrow-right"></i
    ></a>
  </div>
</template>

<script>
import GuidesCard from "./GuidesCard.vue";
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    GuidesCard,
    SectionHeader,
  },
};
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: start;
  max-width: 540px;
}
.guides-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 136px 0px 136px;
}
.section-cards {
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
}

.link {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding-top: 23px;
  color: #575445;
  font-size: 15px;
  font-weight: 400;
}
</style>
