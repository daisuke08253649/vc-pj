<template>
    <div class="select">
      <button class="coin" @click="$router.push({name:'Second', params:{ symbol: symbol } })">
        <div class="click">
          <div class="esc">
            <div class="title">
              <p>{{ symbol }}</p>
            </div>
            <div class="exp">
              <p>{{ coinexp }}</p>
            </div>
          </div>
          <p class="map">></p>
        </div>
      </button>
    </div>
</template>

<script>
export default{
  props:['coinimg', 'symbol', 'coinexp'],
};
</script>


<style scoped>
.select {
  text-align: center;
  margin-bottom:0;
}

.click {
  display: flex;
  justify-content: flex-start;
}

.esc {
  display: flex;
}

.title {
  font-size: 60px;
  margin-left: 140px;
}

.exp {
  font-size: 16px;
  margin-left: 50px;
  padding-top: 35px;
}

.map {
  font-size: 25px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: 20px;
}

.coin {
  border-radius: 70px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: 60%;
  height: 80px;
  cursor: pointer;
  margin-top: 5%;
  transition: 0.4s;
}

.coin:hover {
  background-color: #e9e4e4;
  box-shadow:none;
}

@media screen and (max-width: 480px) {
  .select {
    text-align: center;
  }

  .icon {
    height: 45px;
    width: 45px;
    margin-top: 0;
    margin-left: 20px;
  }

  .title {
    font-size: 30px;
    margin-left: 30px;
  }

  .exp {
    font-size: 10px;
    margin-left: 30px;
    padding-top: 0;
  }

  .map {
    font-size: 20px;
    padding-top: 14px;
    margin-left: auto;
    margin-right: 20px;
  }

  .coin {
    width: 300px;
    height: 60px;
    margin-top: 10%;
  }

  .esc {
    display: block;
    text-align:left;
  }
}
</style>