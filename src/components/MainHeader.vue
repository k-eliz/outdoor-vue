<template>
  <header class="header">
    <a class="logo" href="#"> <img src="../assets/logo.svg" alt="" /></a>
    <header-nav></header-nav>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
}
</style>
