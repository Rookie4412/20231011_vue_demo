<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5],
            arr2:[
                {
                    name:"胖子",
                    age:400,
                    address: "河裡"
                },
                {
                    name:"瘦子",
                    age:4,
                    address: "山裡"
                },
                {
                    name:"老子",
                    age:1000,
                    address: "墓裡"
                }
            ]
        }
    }
}
</script>

<template>
<!-- arr -->
<h1>V-for</h1>
<p v-for =" item in arr">{{ item }}</p>
<!-- arr2 -->
<ol v-for=" x in arr2">
    <li>{{x.name}}</li>
    <li>{{x.age}}</li>
    <li>{{x.address}}</li>
        
</ol>
</template>

<style lang="scss" scoped>

</style>