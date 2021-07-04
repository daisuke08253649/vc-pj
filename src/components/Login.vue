<template>
  <div class="header">
    <div class="header-bar">
      <p>CryptoApp</p>
      <a @click="$router.push({name: 'About'})">ログイン</a>
    </div>
  </div>
</template>

<script>
export default{

}
  
</script>


<style scoped>
.header {
  background-color: #faf8f8;
  height: 80px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
}

.header-bar {
  display: flex;
  justify-content: space-between;
}

.header-bar p {
  font-size: 30px;
  font-weight: bold;
  margin-top: 23px;
  margin-left: 25px;
}

.header-bar a {
  font-size: 20px;
  font-weight: bold;
  margin-top: 28px;
  margin-right: 25px;
  text-decoration: none;
  color: #000;
  transition: 0.4s;
  cursor:pointer;
}
.header-bar a:hover {
  color: #40e0d0;
}
</style>