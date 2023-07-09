<template>
  <header class="header">
    <logo />
    <header-nav></header-nav>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import Logo from "./Logo.vue";
export default {
  components: {
    HeaderNav,
    Logo,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
}
</style>
