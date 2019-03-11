<template>
  <div class="hello">
    <form>
      <h4>아이디</h4>
      <input v-model="email" placeholder="Enter your ID" type="text"/>
      <h4>패스워드</h4>
      <input v-model="password" placeholder="Enter your password"  type="password"/>
      <div>
          <button @click="SignUp()">가입하기</button>
          <button @click="Login()">로그인</button>
          <router-link to="/users/join" class="nav-link">회원가입하기</router-link>
      </div>
    </form>
  </div>
</template>

<script>
// import LoginForm from '@/components/Login/LoginForm.vue';
import firebase from 'firebase'
import router from '../router'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js = PWA',
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          console.log(user.email)
          alert('회원가입 완료')
        })
        .catch((error) => {
          console.log(error)
          alert('이미존재하는 계정이거나 비밀번호가 올바르지 않습니다.')
        })
    },
    Login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          alert('로그인 성공')
          router.push({ path: '/main/main' })
        })
        .catch((error) => {
          console.log(error)
          alert('가입된 계정이거나 비밀번호가 올바르지 않습니다.')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #35495E;
}
</style>
