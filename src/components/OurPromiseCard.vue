<template>
  <div class="our-promise-card">
    <img :src="getImageUrl(photo)" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url);
    },
  },
};
</script>

<style scoped>
.our-promise-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
