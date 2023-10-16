<script>
export default {
    data() {
        return {
            arr: [1,2,3],
        }
    }
}
</script>

<template>
    <div class="topPage"></div>

    <div class="secondPage">

        <p v-for =" in arr"></p>

    </div>

    <div class="thirdPage">
        <div class="left"></div>
        <div class="right">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime pariatur facilis minima esse reprehenderit similique quibusdam velit totam illum.</p>
        </div>
    </div>

    <div class="lastPage">
    </div>
</template>

<style lang="scss" scoped>
.topPage {
    height: 20vh;
    width: 100%;
    background-color: rgb(152, 235, 246);
}

.secondPage {
    height: 50vh;
    width: 100%;
    margin-top: 1%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    p{
        height: 70%;
        width: 30%;
        background-color: rgb(152, 235, 246);
    }
}
.thirdPage {
    height: 70vh;
    width: 100%;
    display: flex;

    .left {
        height: 70%;
        width: 40%;
        margin-top: 5%;
        background-color: rgb(152, 235, 246);
    }

    .right {
        height: 70%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            margin-left: 15%;
        }

        p {
            margin-left: 15%;
        }
    }
}

.lastPage {
    height: 20vh;
    width: 100%;
    background-color: rgb(152, 235, 246);
}
</style>