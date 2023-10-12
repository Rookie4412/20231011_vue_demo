<script setup>
import HomeView from "./views/HomeView.vue"
import Header from "../src/components/Header.vue"
import test from "../src/components/test.vue"

</script>

<template>
  <div class="topHeader">
  <Header />
  </div>

  <RouterView />
  <!-- <HomeView /> -->
</template>

<style scoped>
.headershow{
  width: 100vw;
  height: 15vh;
}

.contenshow{
  width: 100vw;
  height: 60vh;
  text-align: center;
}

</style>
