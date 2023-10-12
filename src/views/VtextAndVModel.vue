<script>
import test from "../components/test.vue";
export default {
    data() {
        return {
            //v-text
            title: "Title",
            address: "我家",
            info: {
                name: "想幹嘛",
                age: 18,
            },
            //v-model
            cool: "",
            age: 15,
            Sele: "",
            lazyText: "",
            lazynumber: "",
            lazytrim: "",
            checkText:[],
            radioText:"",
        };
    },
    components: {
        test,
    },
    methods: {
        test() {
            console.log("xxx");
        },
    },
};
</script>

<template>
    <h1>V-text And V-model</h1>
    <p>{{ this.title }}</p>
    <p v-text="address"></p>
    <p v-text="info"></p>
    <test v-text="address" />

    <br />
    <h1>V-model</h1>

    <div class="all">
        <input type="text" v-model="cool" class="inp">
        <br />
        <input type="number" v-model="age" class="inp">
        <br />
        <h4>{{ this.cool }}</h4>
        <h4 v-text="'年紀啦!!' + age"></h4>
        
    </div>
    
    <select name="" id="" v-model="Sele" class="tt">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <h4 v-text="Sele"></h4> 

    <p>v-modle.lazy</p>
    <input type="lazy" v-model.lazy="lazyText" />
    <p>{{ this.lazyText }}</p>

    <p>v-modle.number</p>
    <input type="number" v-model.number="lazynumber" />
    <p v-text="lazynumber"></p>

    <p>v-modle.trim</p>
    <input type="trim" v-model.trim="lazytrim" />
    <p v-text="lazytrim"></p>

    <p>checkbox</p>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
    <label for="">午餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">    
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    <h3 v-text="checkText"></h3>

    <p>radio</p>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="pork">
    <label for="">午餐</label>
    <input type="radio" v-model="radioText" name="food" value="chicken">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="fish">
    <h3 v-text="radioTextText"></h3>
</template>

<style lang="scss" scoped>
h1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
}

.all {
    height: 15vh;
    width: 100vw;

    input {
        margin-left: 43%;
    }
}

select {
    margin-top: 3%;
    margin-left: 49.5%;
}

h4 {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
