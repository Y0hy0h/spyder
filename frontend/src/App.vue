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
  width: 800px;
  margin: auto;
}
</style>
