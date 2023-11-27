<script>
import List from "../components/List.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        RouterLink,
        List
    }
}
</script>

<template>
    <div class="all" >
        <h1>新增問卷</h1>
        <div class="top">
            <List/>
            <div class="last">
            <div class="lastTop">
                <p>#</p>
                <p>姓名</p>
                <p>填寫日期</p>
                <p>觀看細節</p>
            </div>
            <div class="lastSecond" v-for=" (item, index) in arr">
                <span>{{ num }}</span>
                <span>
                    {{ num }}
                </span>
                <span>{{ num }}</span>
                
                <span><input type="checkbox"></span>
                <span>
                    <RouterLink>前往</RouterLink>
                </span>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all{
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #BEDAE5;
}

.top{
    height: 100%;
    width: 60%;
    background-color: #EECB27;
    .last{
        margin-top: 5%;
        height: 55%;
        width: 100;
        display: flex;
        justify-content: center;
        .lastTop{
            height: 10%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            border: 1px solid black;
        }
        .lastSecond{
            height: 50%;
            width: 100%;
            border: 1px solid black;
        }
    }
}

</style>
