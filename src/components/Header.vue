<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterLink
    },
}
</script>

<template>
    <nav class="topNav">
        <div class="toplink">
            <RouterLink to="/" class="oo1 link1">主頁</RouterLink>
            <RouterLink to="/notes" class="oo1 link10">課堂精隨</RouterLink>
            
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.topNav {
    width: 100%;
    height: 10vh;
    background-color: #c04851;
    font-size: 24pt;
    color: white;
}

.toplink {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .oo1 {
        text-decoration: none;
        font-size: 30pt;
        color: white;
    }

    .link1 {
        &:hover {
            color: black;
        }
    }
    .link10 {
        &:hover {
            color: black;
        }
    }

}
</style>
