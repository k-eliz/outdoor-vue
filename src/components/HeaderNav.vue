<template>
  <nav class="header-nav">
    <header-nav-link
      v-for="linkItem in linkList"
      :link="linkItem.link"
      :text="linkItem.text"
    >
    </header-nav-link>
    <li class="menu__list-item_btn">
      <a class="menu__btn" href="#">Buy template</a>
    </li>
    <li class="menu__list-item_btn">
      <a class="menu__btn" href="#"
        ><i class="fa-solid fa-cart-shopping"></i>
        Cart
        <div class="menu__count">0</div>
      </a>
    </li>
  </nav>
</template>

<script>
import HeaderNavLink from "./HeaderNavLink.vue";
export default {
  components: {
    HeaderNavLink,
  },
  data() {
    return {
      linkList: [
        { link: "#", text: "Shop" },
        { link: "#", text: "About us" },
        { link: "#", text: "Our team" },
        { link: "#", text: "Buyer's guides" },
        { link: "#", text: "Categories" },
      ],
    };
  },
};
</script>

<style scoped>
.header-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}
</style>
