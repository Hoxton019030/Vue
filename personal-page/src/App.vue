<template>
  <p class="headerLink">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/products">Products</router-link>|
  </p>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
.headerLink {
  font: 36px;
  text-align: center;
}

.content {
  width: 90%;
  height: 600px;
  border: 1px solid #ccc;
  margin: 20px auto;
}
</style>