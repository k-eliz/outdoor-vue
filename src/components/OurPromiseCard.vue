<template>
  <div class="our-promise-card">
    <img :src="useGetImageUrl(photo)" alt="" />
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import { useGetImageUrl } from "../composables/useGetImageUrl";
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
    useGetImageUrl,
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

.title {
  font-family: "Roboto";
  font-size: 20px;
  color: #575445;
  font-weight: 400;
}
.text {
  text-align: center;
  color: #575445;
}
</style>
