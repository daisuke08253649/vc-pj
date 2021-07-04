<template>
  <div class="second">
    <Logout></Logout>
    <div class="main">
      <div class="coin-price">
        <div class="group">
          <div class="font">
            <p class="coin-name">{{ symbol }}</p>
          </div>
        </div>
      </div>
      <div class="coin-time">
        <p class="last-price-name">最終取引価格</p>
        <p class="last-price">{{ last }}円</p>
        <p class="time-name">時間</p>
        <p class="time">{{ timestamp }}</p>
      </div>
    </div>

    <div class="back">
      <a class="backpage" @click="$router.push({ name: 'First' })">Back</a>
    </div>
  </div>
</template>

<script>
import Logout from "../components/Logout";
import axios from "axios";
export default {
  props: ["symbol"],
  data() {
    return {
      last: "",
      timestamp:""
    };
  },
  async created(){
    const item = await axios.get(
      `https://api.coin.z.com/public/v1/ticker?symbol=${this.symbol}`
    );
    const coinData = item.data;
    this.last = coinData.last;
    this.timestamp = coinData.last.timestamp;
    },

  components: {
    Logout
  }
};
</script>


<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 10%;
}

.group {
  display: flex;
}

.coin-name {
  font-size: 90px;
  margin-left: 40px;
}

.last-price-name,
.time-name {
  font-size: 30px;
}

.last-price,
.time {
  font-size: 25px;
}

.coin-time {
  line-height: 3em;
  margin-right: 70px;
}

.coin-price {
  margin-left: 70px;
}

.time-name {
  margin-top: 50px;
}

.back {
  text-align: center;
  font-size: 25px;
  margin-top: 150px;
}

.backpage {
  color: #508cff;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
}

.backpage:hover {
  color: #40e0d0;
}

@media screen and (max-width: 480px) {
  .main {
    display: block;
    margin-top: 70px;
  }

  .coin-name {
    font-size: 60px;
  }

  .last-price-name,
  .time-name {
    font-size: 25px;
  }

  .last-price,
  .time {
    font-size: 20px;
  }

  .coin-time {
    position:relative;
    top:60px;
    left:35px;
  }

  .back {
    font-size: 24px;
  }
}
</style>