<template>
  <div id="app">
    <h1>Currency converter</h1>
    <FormComponent/>
  </div>
</template>

<script>
import {store} from "@/store/store";
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'App',
  store,
  components: {
    FormComponent
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
  padding: 15px;
}
</style>
