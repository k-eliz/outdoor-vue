<template>
  <div class="footer-section">
    <logo class="footer-logo" />
    <div class="footer-categories">
      <footer-categories
        title="Pages"
        item1="Home"
        link1="#"
        link2="#"
        link3="#"
        link4="#"
        link5="#"
        link6="#"
        item2="Shop"
        item3="Categories"
        item4="Buyer's guides"
        item5="404"
        item6="Password"
      />
      <footer-categories
        title="Gear categories"
        item1="Hiking Gear"
        item2="Climbing Gear"
        item3="Jackets"
        item4="Accessories"
        item5="Apparel"
        item6="Headwear"
        link1="#"
        link2="#"
        link3="#"
        link4="#"
        link5="#"
        link6="#"
      />
      <footer-categories
        title="Company"
        item1="About us"
        item2="Our team"
        item3="Contact"
        item4="Terms & Conditions"
        item5="Style guide"
        item6="Licenses"
        link1="#"
        link2="#"
        link3="#"
        link4="#"
        link5="#"
        link6="#"
      />
      <footer-input
        title="Newsletter"
        text="Subscribe to our (infrequent) newsletter where we share news
                  about upcoming listings and projects."
      />
    </div>
    <div class="contacts">
      <p class="info">
        © Outdoor Exploration, LLC. All rights reserved. Powered by
      </p>
      <div class="media">
        <media-footer icon="fa-brands fa-linkedin" />
        <media-footer icon="fa-brands fa-square-facebook" />
        <media-footer icon="fa-brands fa-vk" />
        <media-footer icon="fa-brands fa-twitter" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import FooterCategories from "./FooterCategories.vue";
import FooterInput from "./FooterInput.vue";
import MediaFooter from "./MediaFooter.vue";
export default {
  components: {
    Logo,
    FooterCategories,
    FooterInput,
    MediaFooter,
  },
};
</script>

<style scoped>
.footer-logo {
  margin: 0 auto;
}
.footer-section {
  background-color: #575445;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.footer-categories {
  display: flex;
  justify-content: space-between;
}
.contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.media {
  display: flex;
  gap: 20px;
}

.info {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
</style>
