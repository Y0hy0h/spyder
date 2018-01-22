// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueMaterial)

export const SocketInstance = socketio('http://localhost:3000')
Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
