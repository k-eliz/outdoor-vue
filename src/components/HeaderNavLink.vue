<template>
  <a class="header-nav-link" :href="link">{{ text }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header-nav-link {
}
</style>
