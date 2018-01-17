<template>
  <div id="app">
    <SensorOverview/>
  </div>
</template>

<script>
import SensorOverview from './components/SensorOverview'

export default {
  name: 'app',
  components: {
    SensorOverview
  }
}
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
