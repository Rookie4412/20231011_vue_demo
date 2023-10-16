<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    methods: {

    }
}
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="toppage">
        <i class="fa-brands fa-pinterest"></i>
        <button v-on="but1" class="but">首頁</button>
        <button v-on="but2" class="but">建立</button>
        <i class="fa-solid fa-magnifying-glass">
            <input type="text">
        </i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-comment-dots"></i>
    </div>

    <div class="scond">
        <div class="photo" v-for="item in arr">
            <img :src="'https://picsum.photos/5'+item+'0/300/?random'"
                class="photoimg" alt="">
        </div>
        <div class="photo" v-for="item in arr">
            <img :src="'https://picsum.photos/4'+item+'0/100/?random'"
                class="photoimg" alt="">
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.toppage {
    height: 10vh;
    width: 100vw;
    // display: flex;
    margin-left: 1%;
    // align-items: center;

    .fa-brands {
        color: red;
        font-size: 45pt;
        margin-left: 1%;
    }

    button {
        width: 10vw;
        border-radius: 40%;
        margin-left: 1%;
        color: black;
        border: 1px solid white;
    }

    .fa-magnifying-glass {
        font-size: 20pt;
        margin-left: 1%;

        input {
            width: 50vw;
            border-radius: 5%;
        }
    }

    .fa-bell {
        font-size: 20pt;
        margin-left: 5%;
    }

    .fa-comment-dots {
        font-size: 20pt;
        margin-left: 5%;
    }
}

.scond {
    // height: 100vh;
    width: 100vw;
    column-count: 4;

}

img {
    height: auto;
    width: 100%;
    padding: 5px;
    // margin-right: 3%;
    border-radius: 5%;
}
</style>