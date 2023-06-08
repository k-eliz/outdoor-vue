<template>
  <main-header></main-header>
</template>
<script>
import MainHeader from "./components/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>
<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
html,
body {
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
}
</style>
