<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    RouterLink,
    RouterView,
    Header
  }
}
</script>

<template>
  <div class="headerShow">
    <h1>home</h1>
    <!-- <Header /> -->
  </div>

  <div class="showContent">
    <!-- <RouterView /> -->
  </div>
</template>

<style lang="scss" scoped>
.heaterShow {
  width: 100vw;
  height: 100vh;
}
</style>
