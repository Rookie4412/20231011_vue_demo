<script>
    export default{
        data(){
            return{
                title:"cool",
                arr:[123]
            }
        },
        methods:{
            print(){      //print : function(){}
                console.log(this.title)
            },
            aa2(){
                console.log(this.arr)
            }
        }
    }
</script>

<template>
    <h1>V-on</h1>
    <button type="button" v-on:click="print()">but</button>
    <button type="button" @click="aa2()">buttttt</button>

</template>

<style lang="scss" scoped>

</style>