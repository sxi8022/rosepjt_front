<template>
  <div class="hello">
    <form>
      <h4>아이디</h4>
      <input placeholder="Enter your ID" />
      <h4>패스워드</h4>
      <input placeholder="Enter your password" />
      <div>
          <button @click="SignUp()">가입하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js = PWA'
    }
  },
  methods: {
    SignUp () {
      console.log('simple called')
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
