<template>
  <div class="guides-card">
    <div class="guides-post">
      <img :src="useGetImageUrl(picture)" alt="" />
      <h3 class="title">{{ title }}</h3>
    </div>
    <guides-user :photo="photo" :name="name" :prof="prof" :date="date" />
  </div>
</template>

<script>
import { useGetImageUrl } from "../composables/useGetImageUrl";
import GuidesUser from "./GuidesUser.vue";
export default {
  components: {
    GuidesUser,
  },
  props: {
    picture: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    prof: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  methods: {
    useGetImageUrl,
  },
};
</script>

<style scoped>
.guides-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 568px;
}

.guides-post {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.title {
  color: #575445;
  font-size: 20px;
  font-weight: 400;
}
</style>
