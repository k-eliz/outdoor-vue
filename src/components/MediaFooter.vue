<template>
  <i :class="icon" id="icon"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#icon {
  width: 24px;
  color: #fff;
  height: 24px;
}
</style>
