<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
export default {
  data() {
    return {
      arr:[1],
      
    };
  },
  methods:{

  },
  components: {
    RouterLink,
    // RouterView,
    Header,
    
  }
}
</script>

<template>
  <div class="all">
    
    <div class="top">
      <div class="topQu">
        <p>問卷標籤</p>
        <input type="text" class="Qu">
      </div>
      <div class="topStart">
        <p>開始</p>
        <input type="date" class="Start">
        <p>結束</p>
        <input type="date" class="Start">
        <button class="but" :nem="index">搜尋</button>
      </div>
    </div>
    

    <div class="second">
      <div class="secondTop">
        <p>#</p>
        <p>問卷</p>
        <p>狀態</p>
        <p>開始時間</p>
        <p>結束時間</p>
        <p>觀看統計</p>
      </div>
      <div class="secondLast" v-for=" (item,index) in arr" >
        <span>{{ num }}</span>
        <span><RouterLink to="/vote">vote</RouterLink>{{ num }}</span>
        <span>{{ num }}</span>
        <span>{{ num }}</span>
        <span>{{ num }}</span>
        <span>統計{{ num }}</span>
      </div>
    </div>
    <RouterLink to="/BakeQuestion">
      <i class="fa-solid fa-pen-to-square"></i>    
    </RouterLink>
    

  </div>

</template>

<style lang="scss" scoped>
.all {
  height: 100vh;
  width: 100vw;
  background-color: #BEDAE5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.top {
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #EECB27;

  .topQu {
    height: 20%;
    width: 40%;
    display: flex;
    justify-content: space-around;

    p {
      font-size: 16pt;
      color: #1F1762;
    }

    .Qu {
      height: 80%;
    }
  }

  .topStart {
    height: 20%;
    width: 80%;
    display: flex;
    justify-content: space-around;

    p {
      font-size: 16pt;
      color: #1F1762;
    }

    .Start {
      height: 80%;
    }

    .but {
      height: 80%;
      width: 10%;
      background-color: #E81E25;
      color: #1F1762;
      border-radius: 50%;
      border: none;
    }
  }
}

.second {
  height: 40%;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #EECB27;
  .secondTop{
    height: 10%;
    width: 100%;
    display: flex;
    position:relative ;

    p{
      height: 100%;
      width: 50%;
      border: 1px solid black;
    }
    
  }
    .secondLast{
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
}

.fa-pen-to-square{
  font-size: 26pt;
  bottom: 20px;
  right: 15px;
  color: white;
  justify-content: space-around;
  position: fixed;
  transition: 1s;
  &:hover{
    color: palevioletred;
    font-size: 30pt;
  }
}

</style>
