<script>
export default {
    data() {
        return {
            arr: [
            "../../甜點圖片/3.png",
            "../../甜點圖片/2.png",
            "../../甜點圖片/4.png",
            ],
            arr2: [
            "../../甜點圖片/5.png",
            "../../甜點圖片/6.png",
            "../../甜點圖片/7.png"
            ],
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="first page">
        <div class="firstleft"></div>
        <div class="firstright">
            <img src="../../甜點圖片/Group 10.png" alt="">
        </div>
    </div>

    <div class="second page">
        <div class="secondleft">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto, totam repellat hic asperiores soluta
                ab sequi, libero nostrum aperiam, consequatur enim deserunt? Similique quisquam eaque voluptate accusantium
                perferendis ea sequi optio, consequuntur voluptatibus voluptatem natus. Qui quasi aspernatur nobis ab maxime
                doloribus odio, sapiente quod quaerat tenetur asperiores labore?</p>
        </div>
        <div class="secondright">
            <img src="../../甜點圖片/1.png" alt="">
        </div>
    </div>

    <div class="thired page">
        <div class="thiredtop">
            <h1>On sale</h1>
        </div>
        <div class="thiredlast">
            <div class="card01" style="width: 18rem;" v-for="x in arr">
                <img :src="x" class="card-img-top" alt="...">
                <div class="card-body">
                    <a href="#" class="btn btn-primary">item</a>
                </div>
            </div>
        </div>
        <div class="hr"></div>
    </div>

    <div class="four page">
        <div class="fourtop">
            <h1>News</h1>
        </div>
        <div class="fourcard">
            <div class="card" style="width: 18rem;" v-for="item in arr2">
                <img :src="item" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <button class="more">More</button>
    </div>

    <div class="five page">
        <div class="fiveleft">
            <img src="../../甜點圖片/8.png" alt="">
        </div>
        <div class="fiveright">
            <h1>New Arrival</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque quidem. Error laborum quam fugit ipsum
                cum nulla nihil quod nemo officia sint ea, ex beatae fugiat ratione veniam maiores reprehenderit. Laborum
                aliquid vitae facere modi commodi culpa sit, odio excepturi cumque molestiae, atque, dolorem autem
                voluptatibus doloremque explicabo assumenda.</p>
        </div>
    </div>

    <div class="last page">
        <p>Copyright@2023 by kouhei</p>
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100vw;
    margin: 0;
    background-color: blanchedalmond;
}

.first {
    height: 30vh;
    display: flex;
    justify-content: space-between;

    .firstleft {
        height: 90%;
        width: 15%;
        margin-top: 1%;
        margin-left: 2%;
        background-color: palevioletred;
    }

    .firstright {
        height: 90%;
        width: 7%;
        margin-right: 3%;
        margin-top: 3%;

        img {
            height: 30%;
            width: 100%;
        }
    }
}

.second {
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .secondleft {
        height: 100%;
        width: 40%;
        margin-top: 10%;
    }

    .secondright {
        height: 100%;
        width: 50%;

        img {
            height: 90%;
            width: 100%;
            margin-bottom: 3%;
        }
    }
}

.thired {
    height: 80vh;

    h1 {
        height: 20%;
        width: 100%;
    }

    .thiredlast {
        height: 80%;
        width: 90%;
        margin-left: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        img{
            height: 100%;
        }
        .card-body{
            margin-top :-15%;
            color: palevioletred;
        }
    }

    .hr {
        height: 0%;
        width: 100%;
        border: 0.5px solid black;
        margin-top: 1%;
    }
}

.four {
    height: 90vh;

    .fourcard {
        height: 70%;
        width: 90%;
        margin-left: 5%;
        display: flex;
        justify-content: space-between;

        .card {
            height: 100%;
            width: 20%;

            p {
                font-size: 15pt;
            }

            button {
                width: 60%;
                margin-left: 2%;
                background-color: black;
                color: white;
            }
        }
    }

    .more {
        margin-top: 3%;
        width: 15%;
        background-color: palevioletred;
        color: white;
    }
}

.five {
    height: 90vh;
    display: flex;
    justify-content: space-between;

    .fiveleft {
        height: 90%;
        width: 40%;
        background-color: palevioletred;

        img {
            height: 80%;
            width: 100%;
            margin-top: 8%;
            margin-left: 40%;

        }
    }

    .fiveright {
        height: 50%;
        width: 40%;
        margin-top: 8%;
        font-size: 10pt;
        background-color: palevioletred;
    }
}

.last {
    height: 10vh;
    background-color: palevioletred;
    display: flex;
    flex-direction: column;
    justify-content: center;
}</style>