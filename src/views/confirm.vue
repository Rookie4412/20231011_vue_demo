<script>
import { RouterLink, RouterView } from "vue-router";
export default {
    data() {
        return {
            num: 1
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
        <div class="all2">
            <div class="contop">
                <h1>標題</h1>
            </div>

            <div class="consecond">
                <span>姓名 : {{ this.num }}</span>
                <span>手機 : {{ }}</span>
                <span>E-mail : {{ }}</span>
                <span>年齡 : {{ }}</span>
            </div>
            <br>

            <div class="conthree">
                <h3>投票答案</h3>
                <br>
                <p>321</p>
            </div>

            <div class="conlast">
                <button>
                    <RouterLink to="/vote" style="text-decoration: none;">修改</RouterLink>
                </button>
                <button>
                    <RouterLink to="/" style="text-decoration: none;">送出</RouterLink>
                </button>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.all {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BEDAE5;
}

.all2 {
    height: 90%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EECB27;
}

.contop {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.consecond {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // align-items: center;
}

.conthree {
    height: 40%;
    width: 100%;

}

.conlast {
    height: 10%;
    width: 40%;
    margin-left: 50%;
    display: flex;
    justify-content: space-around;

    button {
        height: 50%;
    }
}
</style>
