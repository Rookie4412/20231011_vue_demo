<script>
// 前置環境 環境安裝 In json
// "scripts": {
//   "serve": "vue-cli-service serve",
//   "build": "vue-cli-service build",
//   "lint": "vue-cli-service lint"
// }放入這個，跑
// npm run serve 這個
// 不行再跑 npm install @vue/cli 之後再執行

// 匯入Three
import ThreeSphere from "./components/ThreeSphere.vue";
// import HomeView from "./views/HomeView.vue";

export default {
    name: "App",
    components: {
    ThreeSphere,
    // HomeView
},
};
</script>

<template>
    <div id="app">
            <ThreeSphere />
        <!-- <HomeView /> -->
    </div>
</template> 

<style>
/* Add any global styles if needed */
</style>

