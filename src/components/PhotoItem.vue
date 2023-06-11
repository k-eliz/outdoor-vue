<template>
  <div class="photo-item">
    <i style="color: #fff; font-weight: 400" :class="icon"></i>
    <h6 class="text">{{ text }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.photo-item {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.text {
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
}
</style>
