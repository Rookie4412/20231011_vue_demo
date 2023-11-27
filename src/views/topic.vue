<script>
import List from "../components/List.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
    data() {
        return {
            Question: "",
            arr: [],
            Quarr: []
        };
    },
    methods: {
        Allsearch() {
            const url = 'http://localhost:8080/api/quiz/search';
            //要帶入的值
            new URLSearchParams({
                title: "",
                start_Date: "",
                end_Date: "",
                ispublished:false
            });
            // 將查詢字串附加到URL
            const WithParams = `${url}?${queryParams}`;
            fetch(urlWithParams, {
                method: "GET",
                herder: new Headers({ 
                "Content-Type": "application/json", 
            })
            })
                .then((res) => res.json())
                .catch((error) => console.error("Error:", error))
                .then((response) => console.log("Success:", response))
        }
    },
    components: {
        RouterLink,
        List
    }
}
</script>

<template>
    <div class="all">
        <h1>新增問卷</h1>
        <div class="top">
            <List />
            <div class="second">
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
            <div class="last">
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
            <div class="button">
                <button>
                    <RouterLink to="/Question" style="text-decoration:none ; color: black;">上一頁</RouterLink>
                </button>
                <button>
                    <RouterLink to="/material" style="text-decoration:none ; color: black;">確認</RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all {
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #BEDAE5;
}

.top {
    height: 100%;
    width: 60%;
    background-color: #EECB27;

    .second {
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

    .last {
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

    .button {
        height: 6%;
        width: 30%;
        margin-left: 70%;
        display: flex;
        justify-content: space-around;
    }
}</style>
