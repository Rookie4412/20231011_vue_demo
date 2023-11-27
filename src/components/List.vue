<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
        }
    },
    components: {
        RouterLink
    },

}
</script>

<template>
    <nav class="topNav">
        <RouterLink to="/Question" class="RL">問題</RouterLink>
        <RouterLink to="/topic" class="RL">題目</RouterLink>
        <RouterLink to="/material" class="RL">填寫資料</RouterLink>
        <RouterLink to="/total" class="RL">統計</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
.topNav {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    background-color: #EECB27;
    font-size: 24pt;
    color: white;

}

.RL {
    height: 100%;
    color: white;
    text-decoration: none;
    transition: 1s;
    &:hover{
        color: #E81E25;
        font-size: 30pt;
    }
}
</style>
