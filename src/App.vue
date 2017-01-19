<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <button @click="changeMsg"> Change Msg!</button>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Omg it\'s working',
    };
  },
  methods: {
    changeMsg() {
      this.msg = 'Of course it works as well!';
    },
  },
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
