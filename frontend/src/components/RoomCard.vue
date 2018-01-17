<template>
  <md-card>
    <md-card-header class="md-title">Room {{ room.number }}</md-card-header>
    <md-card-content>
      <md-list>
        <md-list-item>
          <md-icon>{{ room.doorIsLocked ? "lock_outline" : "lock_open" }}</md-icon>
          <span class="md-list-item-text">Door is {{ room.doorIsLocked ? "locked" : "open" }}.</span>
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'room-card',
  props: ['room']
}
</script>

<style scoped>

</style>
