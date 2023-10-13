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
        margin-right: 5%;
    }
    .oo1{
        text-decoration: none;
        margin-right: 5%;
    }
    .oo2{
        text-decoration: none;
        margin-right: 5%;
    }
    .oo3{
        text-decoration: none;
        margin-right: 5%;
    }
    .oo4{
        text-decoration: none;
        margin-right: 5%;
    }
    .oo5{
        text-decoration: none;
        margin-right: 5%;
    }
    .oo6{
        text-decoration: none;
        margin-right: 5%;
    }
}

</style>
