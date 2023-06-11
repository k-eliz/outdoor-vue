<template>
  <div class="photo-section">
    <img class="photo" src="../assets/photo.jpg" alt="" />
    <div class="photo-items">
      <photo-item icon="fa-solid fa-cart-shopping" text="First Aid Kit" />
      <photo-item text="Banger Bottle" />
      <photo-item icon="fa-solid fa-camera" text="Brian Schultz" />
      <photo-item icon="fa-solid fa-user" text="Leah Stoff" />
      <photo-item
        icon="fa-solid fa-location-arrow"
        text="Catalina, California"
      />
    </div>
  </div>
</template>

<script>
import PhotoItem from "./PhotoItem.vue";
export default {
  components: {
    PhotoItem,
  },
};
</script>

<style scoped>
.photo-section {
  position: relative;
}
.photo {
  width: 100%;
}

.photo-items {
  position: absolute;
  right: 40px;
  bottom: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #292c32;
  border-radius: 16px;
  padding: 17px 22px;
}
</style>
