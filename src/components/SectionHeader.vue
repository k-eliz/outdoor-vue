<template>
  <div class="section-header">
    <h5 class="subtitle">{{ subtitle }}</h5>
    <h1 class="title">{{ title }}</h1>
    <p class="text">{{ text }}</p>
    <a class="link" v-if="link" :href="link"
      ><span>See more</span> <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
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
      required: false,
    },
  },
};
</script>

<style scoped>
.section-header {
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.subtitle {
  text-transform: uppercase;
  color: #e6b939;
  font-weight: normal;
}
.title {
  font-size: 36px;
  color: #575445;
  font-family: "Roboto";
  font-weight: normal;
}

.text {
  font-size: 16px;
  color: #575445;
}

.link {
  font-size: 15px;
  color: #575445;
  display: flex;
  gap: 4px;
  align-items: center;
}
</style>
