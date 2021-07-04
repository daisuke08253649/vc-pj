<template>
  <div class="home">
    <Login></Login>

    <div class="main">
      <div class="main-font">
        <p>新規登録</p>
        <div class="email">
          <label>E-mail:</label>
          <input class="text" type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="password">
          <label>Password:</label>
          <input class="text" type="password" placeholder="Password" v-model="password"/>
        </div>
        <a class="link" @click="signup">登録</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Login from "../components/Login";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("アカウント登録が完了しました。", user.email);
          this.$router.push({ name: "About" });
        })
        .catch((error) => {
          alert("メールアドレス、パスワードを入力してください", error);
        });
    },
  },

  components: {
    Login,
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  margin-top: 150px;
}

.main-font {
  line-height: 3em;
}

.text {
  height: 25px;
  width: 220px;
}

.main-font p {
  font-family: Roboto;
  font-weight: normal;
  font-size: 28px;
  margin-bottom: 20px;
}

.main-font label {
  font-weight: normal;
  font-family: Roboto;
  font-size: 18px;
}

.email {
  margin-right: 4px;
}

.password {
  margin-right: 29px;
  margin-bottom: 20px;
}

.link {
  font-family: Roboto;
  font-weight: normal;
  font-size: 24px;
  text-decoration: none;
  color: #bfc1c1;
  transition: 0.4s;
  cursor: pointer;
}
.link:hover {
  color: #40e0d0;
}
</style>