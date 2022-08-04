<template>
  <h1>Hello Asliddin</h1>
  <router-link to="/">Home</router-link>
  <router-link to="/counter">Counter</router-link>
  <Conter/>
</template>

<script>
import Conter from "@/components/Conter.vue";
export default {
  name: 'App',
  components: {
    Conter
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
  margin-top: 60px;
}
</style>
