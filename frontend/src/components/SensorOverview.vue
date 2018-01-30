<template>
  <div>
    <h1 class="md-headline">Sensor Overview</h1>
    <div class="card-container">
      <RoomCard class="room-card" v-for="room in allRooms" v-bind:key="room.number" v-bind:room="room"/>
    </div>
  </div>
</template>

<script>
import RoomCard from './RoomCard'
import { Room } from '../model/Room'

const dummyRooms = [
  new Room('D101'),
  new Room('D102'),
  new Room('D202'),
  new Room('D204'),
  new Room('E104')
]

let randomize = function (rooms) {
  // isDoorLocked
  setInterval(() => {
    if (Math.random() > 0.1) return
    const index = Math.floor(Math.random() * (rooms.length - 1) + 1)
    if (index === 2) return
    rooms[index].doorIsLocked = Math.random() < 0.5
  }, 1000)

  // Noise of room 4
  setInterval(() => {
    rooms[3].noise = 40 + Math.random() * 20
  }, 1020)

  // Attendance of room 3
  rooms[2].attendance = 4
  rooms[2].doorIsLocked = false
  rooms[2].temperature = 20
  setInterval(() => {
    if (Math.random() > 0.1) return
    rooms[2].attendance = 4 + Math.random() * 3
  }, 1030)

  // Temperature
  rooms[0].temperature = 19.3
  rooms[1].temperature = 22.1
  rooms[3].temperature = 15.8
  rooms[4].temperature = 17.9
  setInterval(() => {
    if (Math.random() > 0.1) return
    const index = Math.floor(Math.random() * rooms.length)
    rooms[index].temperature += Math.random() - 0.5
  }, 1140)
}
randomize(dummyRooms)

export default {
  name: 'sensor-overview',
  components: {
    RoomCard
  },
  data () {
    return {
      allRooms: dummyRooms
    }
  },
  sockets: {
    lockUpdate (isLocked) {
      this.allRooms[0].doorIsLocked = isLocked
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.room-card {
  margin-bottom: 16px;
  flex-basis: 49%;
}
</style>
