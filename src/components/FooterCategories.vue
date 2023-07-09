<template>
  <div class="footer-categories">
    <h5 class="title">{{ title }}</h5>
    <a :href="link1" class="item">{{ item1 }}</a>
    <a :href="link2" class="item">{{ item2 }}</a>
    <a :href="link3" class="item">{{ item3 }}</a>
    <a :href="link4" class="item">{{ item4 }}</a>
    <a :href="link5" class="item">{{ item5 }}</a>
    <a :href="link6" class="item">{{ item6 }}</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    item1: {
      type: String,
      required: true,
    },
    link1: {
      type: String,
      required: true,
    },
    item2: {
      type: String,
      required: true,
    },
    link2: {
      type: String,
      required: true,
    },
    item3: {
      type: String,
      required: true,
    },
    link3: {
      type: String,
      required: true,
    },
    item4: {
      type: String,
      required: true,
    },
    link4: {
      type: String,
      required: true,
    },
    item5: {
      type: String,
      required: true,
    },
    link5: {
      type: String,
      required: true,
    },
    item6: {
      type: String,
      required: true,
    },
    link6: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer-categories {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title {
  color: #e6b939;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.item {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
</style>
