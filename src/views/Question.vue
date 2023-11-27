<script>
import List from "../components/List.vue";
import { RouterLink, RouterView } from "vue-router";
export default {

    components: {
        RouterLink,
        List
    }
}
</script>

<template>
    <div class="all">
        <h1>新增問卷</h1>
        <div class="top">
            <List />
            <div class="second">
                <p>
                    問卷名稱
                    <input type="text">
                </p>
                <p>
                    內容
                    <input type="text" style="height: 20vh;width: 15vw;">
                </p>
                <p>
                    開始日期
                    <input type="date">
                </p>
                <p>
                    結束日期
                    <input type="date">
                </p>
            </div>
            <div class="last">
                <button>
                    <RouterLink to="/BakeQuestion" style="text-decoration:none ; color: black;">取消</RouterLink>
                </button>
                <button>
                    <RouterLink to="/topic" style="text-decoration:none ; color: black;">送出</RouterLink>
                </button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.all {
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #BEDAE5;
}

.top {
    height: 100%;
    width: 60%;
    background-color: #EECB27;

    .second {
        height: 70%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        p {
            width: 60%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .last {
        height: 5%;
        width: 35%;
        display: flex;
        margin-top: 5%;
        margin-left: 80%;
        button {
            margin-right: 20%;
        }
    }
}
</style>
