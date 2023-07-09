<template>
  <div class="footer-input">
    <h5 class="title">{{ title }}</h5>
    <p class="text">{{ text }}</p>
    <div class="input-btn">
      <input type="text" class="input" placeholder="Email" />
      <button class="btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
.footer-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 458px;
}
.title {
  color: #e6b939;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.text {
  color: #fafafc;
  font-size: 14px;
  font-weight: 400;
}

.input-btn {
  display: flex;
  justify-content: space-between;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 7px;
}

.input {
  padding-left: 14px;
  background: #f9fafb;
  border-radius: 8px;
  color: #575445;
  font-size: 14px;
  font-weight: 400;
  border: none;
  outline: none;
}

.btn {
  z-index: 1;
  border-radius: 10px;
  padding: 10px 12px;
  background: #575445;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
</style>
