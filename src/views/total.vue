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

}

</style>
