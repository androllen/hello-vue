<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BaseSearch />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import BaseSearch from './components/BaseSearch'

export default {
  name: 'App',
  components: {
    BaseSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
  float: left;
}
</style>
