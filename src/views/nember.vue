<script>
export default {
    data() {
        return {
            small: "1",
            big: "100",
            right: Math.floor(Math.random() * 100) + 1,
            guess: "",
        }
    },
    methods: {
        print() {
            if (this.guess == this.right) {
                alert ("right")
                return;
            }

            if (this.guess < this.small || this.guess > this.big) {
                alert("請輸入範圍內數字")
                return;
            }

            if (this.guess > this.right) {
                this.big = this.guess;
                this.big.innerText = this.guess;
            }

            if (this.guess < this.right) {
                this.small = this.guess;
                this.small.innerText = this.guess;
            }
        },
    }
}

</script>

<template>
    <div class="all">
        <div class="card">
            <h1>猜數字</h1>
            <p v-text="small + '~' + big"></p>
            <input type="number" name="" id="guessNum" v-model="guess">
            <button @click="print()">回答</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all {
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        height: 50vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(87, 186, 229);
        color: white;

        input {
            width: 30%;
        }

        button {
            margin-top: 5%;
        }
    }
}
</style>