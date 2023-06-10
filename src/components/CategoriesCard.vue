<template>
  <div class="categories-card">
    <img class="photo" :src="getImageUrl(photo)" alt="" />
    <div class="info">
      <h3 class="title">{{ title }}</h3>
      <p class="text">{{ text }}</p>
      <a :href="address" class="link">
        <span>{{ link }}</span> <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
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
    link: {
      type: String,
      required: true,
    },
    address: {
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
.categories-card {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.photo {
  width: 100%;
  border-radius: 10px;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.title {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 28px;
  color: #575445;
}

.text {
  font-size: 16px;
  color: #575445;
  max-width: 250px;
  text-align: center;
}

.link {
  font-size: 15px;
  font-weight: 400;
  display: flex;
  color: #575445;
  gap: 4px;
  align-items: center;
}
</style>
