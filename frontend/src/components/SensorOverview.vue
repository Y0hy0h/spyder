<template>
  <div>
    <h1 class="md-headline">Sensor Overview</h1>
    <RoomCard class="room-card" v-for="room in allRooms" v-bind:key="room.number" v-bind:room="room"/>
  </div>
</template>

<script>
import RoomCard from './RoomCard'
import { Room } from '../model/Room'

export default {
  name: 'sensor-overview',
  components: {
    RoomCard
  },
  data () {
    return {
      allRooms: [new Room(1)]
    }
  }
}
</script>

<style scoped>
.room-card {
  margin-bottom: 16px;
}
</style>
