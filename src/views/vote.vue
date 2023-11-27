<script>
import { RouterLink, RouterView } from "vue-router";
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        RouterLink
    }
}
</script>

<template>
    <div class="all">
        <!-- top生命週期 -->
        <div class="votetop">
            <br>
            <h1>123</h1>
            <br>
            <div class="votesecond">
                <h3>說明</h3>
            </div>
            <br>

            <div class="votethree">
                <p>姓名:
                    <input type="text" class="in">
                </p>
                <p>手機:
                    <input type="text" class="in">
                </p>
                <p>E-mail:
                    <input type="text" class="in">
                </p>
                <p>年齡:
                    <input type="text" class="in">
                </p>

            </div>

            <div class="votefour">
                <h1>投票項目</h1>
            </div>

            <div class="votelast">
                <button>取消</button>
                <button>
                    <RouterLink to="/confirm" style="text-decoration: none;">送出</RouterLink>
                </button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.all {
    height: 150vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BEDAE5;
}

.votetop {
    height: 90%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EECB27;
}

.votesecond {
    height: 30%;
    width: 80%;
}

.votethree {
    height: 25%;
    width: 60%;
    display: flex;
    flex-direction: column;
    color: #1F1762;

    p {
        display: flex;
        justify-content: space-around;
        height: 20%;

        .in {
            height: 60%;
            width: 50%;
            display: flex;
        }
    }
}

.votefour {
    height: 25%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.votelast {
    height: 5%;
    width: 30%;
    margin-left: 70%;
    display: flex;
    justify-content: space-around;

    button {
        height: 70%;
        width: 30%;
    }
}</style>
