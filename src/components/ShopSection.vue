<template>
  <div class="shop-section">
    <h3 class="shop-subtitle">Shop</h3>
    <h1 class="shop-title">Check out our products</h1>
    <p class="shop-text">
      Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
      Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut
      faucibus orci tincidunt.
    </p>
    <a class="shop-button" href="#">Visit shop</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shop-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: url("../assets/shop.jpg") center no-repeat;
  background-size: cover;
  padding: 100px 450px;
}
.shop-subtitle {
  color: #fafafc;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.shop-title {
  color: #e6b939;
  text-align: center;
  font-size: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
}
.shop-text {
  color: #fafafc;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.shop-button {
  color: #575445;
  font-size: 15px;
  font-weight: 400;
  border-radius: 6px;
  background: #fff;
  padding: 10px 20px;
}
</style>
