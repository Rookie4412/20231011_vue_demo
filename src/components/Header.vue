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
        
        <RouterLink to="/" class="oo">home</RouterLink>
        <RouterLink to="/VtextAndVModel" class="oo1">V-text & V-model</RouterLink>
        <RouterLink to="/Vfor" >V-for</RouterLink>
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
}

</style>
