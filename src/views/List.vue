<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            page: 0
        }
    },
    methods: {
        changepage() {
            this.page = 0
        },
        changepage1() {
            this.page = 1
        },
        changepage2() {
            this.page = 2
        },
        changepage3() {
            this.page = 3
        }
    },
    components: {
        RouterLink
    },

}
</script>

<template>
    <div class="all">
        <nav class="topNav">
            <button @click="changepage"> 問題</button>
            <button @click="changepage1"> 題目</button>
            <button @click="changepage2"> 填寫資料</button>
            <button @click="changepage3"> 統計</button>
        </nav>

        <div class="question" v-show="page == 0">
            <div class="questionSecond">
                <p>
                    問卷名稱
                    <input type="text">
                </p>
                <p>
                    內容
                    <textarea style="height: 20vh;width: 15vw;"></textarea>
                </p>
                <p>
                    開始日期
                    <input type="date">
                </p>
                <p>
                    結束日期
                    <input type="date">
                </p>
            </div>
            <div class="questionLast">
                <button>
                    <RouterLink to="/BakeQuestion" style="text-decoration:none ; color: black;">取消</RouterLink>
                </button>
                <button @click="changepage1">送出</button>
            </div>
        </div>

        <div class="topic" v-show="page == 1">
            <div class="topicSecond">
                <div class="secondQu">
                    <p>問卷標籤
                        <input type="text" class="Qu" v-text="Question">
                    </p>

                    <select v-model="Quarr" style="margin-right: 10%;">
                        <option>單選</option>
                        <option>多選</option>
                    </select>

                </div>
                <div class="secondStart">
                    <p>選項
                        <input type="text" class="Start">
                    </p>

                    <button class="but" :nem="index" @click="arr">加入</button>
                </div>
            </div>
            <div class="topicLast">
                <div class="lastTop">
                    <p>#</p>
                    <p>問卷</p>
                    <p>種類</p>
                    <p>必填</p>
                    <p></p>
                </div>
                <div class="lastSecond" v-for=" (item, index) in arr">
                    <span>{{ num }}</span>
                    <span>
                        {{ num }}
                    </span>
                    <span>{{ num }}</span>

                    <span><input type="checkbox"></span>
                    <span>統計</span>
                </div>
            </div>
            <div class="topicButton">
                <button @click="changepage">上一頁</button>
                <button @click="changepage2">確認</button>
            </div>
        </div>

        <div class="material" v-show="page == 2">
            <div class="materiallast">
                <div class="lastTop">
                    <p>#</p>
                    <p>姓名</p>
                    <p>填寫日期</p>
                    <p>觀看細節</p>
                </div>
                <div class="lastSecond" v-for=" (item, index) in arr">
                    <span>{{ num }}</span>
                    <span>
                        {{ num }}
                    </span>
                    <span>{{ num }}</span>

                    <span><input type="checkbox"></span>
                    <span>
                        <RouterLink>前往</RouterLink>
                    </span>
                </div>
            </div>
        </div>

        <div class="total" v-show="page == 3">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.topNav {
    width: 70%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    background-color: #EECB27;
    font-size: 24pt;
    color: white;

}

.question {
    height: 80vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EECB27;

    .questionSecond {
        height: 70%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        p {
            width: 60%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .questionLast {
        height: 5%;
        width: 35%;
        display: flex;
        margin-top: 5%;
        margin-left: 80%;

        button {
            margin-right: 20%;
        }
    }
}

.topic {
    height: 80vh;
    width: 70%;
    background-color: #EECB27;

    .topicSecond {
        height: 15%;
        width: 100%;
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .secondQu {
            height: 30%;
            width: 100%;
            display: flex;
            justify-content: space-around;
        }

        .secondStart {
            height: 50%;
            width: 100%;
            margin-top: 3%;
            display: flex;
            justify-content: space-around;
        }
    }

    .topicLast {
        margin-top: 5%;
        height: 55%;
        width: 100;
        display: flex;
        justify-content: center;

        .lastTop {
            height: 10%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            border: 1px solid black;
        }

        .lastSecond {
            height: 50%;
            width: 100%;
            border: 1px solid black;
        }
    }

    .topicButton {
        height: 6%;
        width: 30%;
        margin-left: 70%;
        display: flex;
        justify-content: space-around;
    }
}

.material {
    height: 80vh;
    width: 70%;
    background-color: #EECB27;

    .materiallast {
        margin-top: 5%;
        height: 55%;
        width: 100;
        display: flex;
        justify-content: center;

        .lastTop {
            height: 10%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            border: 1px solid black;
        }

        .lastSecond {
            height: 50%;
            width: 100%;
            border: 1px solid black;
        }
    }
}

.total {
    height: 80vh;
    width: 70%;
    background-color: #EECB27;

}
</style>
