<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
}
</script>

<template>
    <div class="topPage"></div>

    <div class="secondPage"></div>

    <div class="thirdPage">
        <div class="letf"></div>
        <div class="right">
            <div class="name">

                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis!</p>
            </div>

            <div class="out">
                <div v-for =" in arr" class="box">
                    <h6>POP</h6>
                </div>
            </div>
        </div>
    </div>

    <div class="lastPage"></div>
</template>

<style lang="scss" scoped>
.topPage {
    height: 10vh;
    width: 100%;
    background-color: rgb(131, 201, 212);
}

.secondPage {
    height: 30vh;
    width: 100%;
    background-color: rgb(168, 237, 247);
}

.thirdPage {
    height: 150vh;
    width: 100%;
    display: flex;

    .letf {
        height: 90%;
        width: 30%;
        background-color: rgb(131, 201, 212);
        margin-top: 3%;
    }

    .right {
        display: flex;
        flex-direction: column;
        height: 90%;
        width: 70%;
        margin-top: 3%;
        margin-left: 5%;
        .name{
            height: 10%;
            width: 100%;
            display: flex;
            p{
                margin-left:5% ;
            }
        }
        .out{  
            height: 100%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .box{
                height: 20%;
                width: 30%;
                background-color: rgb(131, 201, 212);
                
            }

            h6{
                display: flex;
                justify-content: center;
                margin-top: 60%;
            }
        }
    }
}

.lastPage {
    height: 20vh;
    width: 100%;
    background-color: rgb(131, 201, 212);
}
</style>