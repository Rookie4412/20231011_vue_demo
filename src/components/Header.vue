<script >
import { RouterLink, RouterView } from 'vue-router'
export default{
    components:{
        RouterLink
    }
}
</script>

<template>
    <nav class="topNav">
        
        <RouterLink to="/" class="oo">主頁</RouterLink>
        <RouterLink to="/VtextAndVModel" class="oo1">V-text & V-model</RouterLink>
        <RouterLink to="/Vfor" class="oo2">V-for</RouterLink>
        <RouterLink to="/sweet" class="oo3">sweet</RouterLink>
        <RouterLink to="/sweet2" class="oo4">sweet2</RouterLink>
        <RouterLink to="/Von" class="oo5">V-on</RouterLink>
        <RouterLink to="/dessert" class="oo6">dessert</RouterLink>
        <RouterLink to="/nember" class="oo7">猜數字</RouterLink>

    </nav>
</template>

<style lang="scss" scoped>
.topNav{
    width: 100%;
    height: 100%;
    background-color: skyblue;
    font-size: 24pt;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .oo{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo1{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo2{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo3{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo4{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo5{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo6{
        text-decoration: none;
        margin-right: 1%;
    }
    .oo7{
        text-decoration: none;
        margin-right: 1%;
    }
}

</style>
