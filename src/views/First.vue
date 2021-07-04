<template>
  <div class="first">
    <Logout></Logout>
    <Coin v-for="(data, index) in lists" :key="index" :symbol="data.symbol"  :coinexp="data.coinexp"/>
  </div>
</template>

<script>
import Logout from "../components/Logout";
import Coin from "../components/Coin";
export default {
  data() {
    return {
      lists: [
        {
          symbol: "BTC",
          coinexp: "ビットコイン(現物取引)"
        },
        {
          symbol: "BTC_JPY",
          coinexp: "ビットコイン/円(レバレッジ取引)"
        },
        {
          symbol: "BCH",
          coinexp: "ビットコインキャッシュ(現物取引)"
        },
        {
          symbol: "BCH_JPY",
          coinexp: "ビットコインキャッシュ/円(レバレッジ取引)"
        },
        {
          symbol: "XRP",
          coinexp: "リップル(現物取引)"
        },
        {
          symbol: "XRP_JPY",
          coinexp: "リップル/円(レバレッジ取引)"
        },
        {
          symbol: "ETH",
          coinexp: "イーサリアム(現物取引)"
        },
        {
          symbol: "ETH_JPY",
          coinexp: "イーサリアム/円(レバレッジ取引)"
        },
        {
          symbol: "LTC",
          coinexp: "ライトコイン(現物取引)"
        },
        {
          symbol: "LTC_JPY",
          coinexp: "ライトコイン/円(レバレッジ取引)"
        }
      ]
    };
  },
  components: {
    Logout,
    Coin
  }
};
</script>
