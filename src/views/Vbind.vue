<script>
export default{
    data(){
        return{
            title:"cool",
            isRed:false,
            isLarge:false,
            styleArr:[],
            imgtext:"https://www.shutterstock.com/zh-Hant/blog/wp-content/uploads/sites/11/2021/12/1215-cover.png"
        }
    }
}
</script>

<template>
    <!-- v-model ==> 綁定 標籤的 值-->
    <!-- v-bind ==> 綁定標籤 屬性-->
    <h1 class="cool">cool1</h1>

    <h2 v-bind:class="title">cool2</h2>

    <h3>class:{}</h3>
    <label for=""> isRed</label>
    <input type="checkbox" value="true" v-model="isRed">

    <label for=""> isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">
<!-- 未啟動時h2無class名稱  -->
    <h2 :class="{
        red:isRed,
        large:isLarge
        }">hear</h2>
        <!-- 當 isRed/isLarge 為true時  立即赴於h2標籤 red/large 名稱-->


    <h3>class []</h3>
    <label for=""> Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for=""> Large</label>
    <input type="checkbox" value="large" v-model="styleArr">
    <label for=""> bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">
    <h2 :class="styleArr">hear</h2>

        <img :src="imgtext" alt="">
</template>

<style lang="scss" scoped>
.cool{
    color: #c04851;
}
.red{
    color: palegreen;
}
.large{
    font-size: 50pt;
}
.bold{
    background-color: rgb(40, 65, 65);
}

img{
    height: 50vh;
    width: 30vw;
}
</style>