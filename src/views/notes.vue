<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterLink
    },
    data() {
        return {};
    },
    components: {
        RouterLink,
        RouterView,
    }
}
</script>

<template>
    <div class="toplink">
            <RouterLink to="/VtextAndVModel" class="oo1 link2">V-text & V-model</RouterLink>
            <RouterLink to="/Vfor" class="oo1 link3">V-for</RouterLink>
            <RouterLink to="/sweet" class="oo1 link4">sweet</RouterLink>
            <RouterLink to="/sweet2" class="oo1 link5">sweet2</RouterLink>
            <RouterLink to="/Von" class="oo1 link6">V-on</RouterLink>
            <RouterLink to="/dessert" class="oo1 link7">dessert</RouterLink>
            <RouterLink to="/nember" class="oo1 link8">猜數字</RouterLink>
            <RouterLink to="/Vbind" class="oo1 link9">v-bind</RouterLink>
            <RouterLink to="/Fall" class="oo1 link9">Fall</RouterLink>
        </div>
</template>

<style lang="scss" scoped>
.topNav {
    width: 100%;
    height: 100%;
    background-color: #f1939c;
    font-size: 24pt;
    color: white;
}   
.toplink {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .oo1 {
        text-decoration: none;
        font-size: 20pt;
        color: rgb(232, 53, 53);
    }

    .link1 {
        &:hover {
            color: black;
        }
    }
    .link2 {
        &:hover {
            color: black;
        }
    }
    .link3 {
        &:hover {
            color: black;
        }
    }
    .link4 {
        &:hover {
            color: black;
        }
    }
    .link5 {
        &:hover {
            color: black;
        }
    }
    .link6 {
        &:hover {
            color: black;
        }
    }
    .link7 {
        &:hover {
            color: black;
        }
    }
    .link8 {
        &:hover {
            color: black;
        }
    }
    .link9 {
        &:hover {
            color: black;
        }
    }
}
</style>