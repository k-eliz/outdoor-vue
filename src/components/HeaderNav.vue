<template>
  <nav class="header-nav">
    <header-nav-link
      v-for="linkItem in linkList"
      :link="linkItem.link"
      :text="linkItem.text"
    >
    </header-nav-link>
    <header-nav-button>Buy template</header-nav-button>
    <header-nav-button>
      <div class="button-cart">
        <i class="fa-solid fa-cart-shopping"></i><span>Cart</span>
        <span class="cart-count">0</span>
      </div></header-nav-button
    >
  </nav>
</template>

<script>
import HeaderNavLink from "./HeaderNavLink.vue";
import HeaderNavButton from "./HeaderNavButton.vue";
export default {
  components: {
    HeaderNavLink,
    HeaderNavButton,
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
  align-items: center;
}

.button-cart {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.cart-count {
  background: #ffffff;
  border-radius: 100%;
  color: #575445;
  font-size: 11px;
  padding: 2px 6px;
}
</style>
