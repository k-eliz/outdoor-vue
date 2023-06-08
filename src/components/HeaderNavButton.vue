<template>
  <button class="header-nav-button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
.header-nav-button {
  background: #575445;
  border-radius: 6px;
  font-size: 16px;
  color: #fff;
  display: flex;
  padding: 6px 18px;
  border: none;
  outline: none;
}
</style>
