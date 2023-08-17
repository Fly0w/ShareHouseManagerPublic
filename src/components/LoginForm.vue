<template>
  <div
    v-if="loginTabTrigger"
    class="absolute flex flex-col justify-center items-center w-full px-3 py-2 border-2 text-center font-montserrat text-white text-2xl"
    :class="{
      'bg-red-600/95 border-red-800': credentialsCheck === 'error',
      'bg-blue-600/95 border-blue-800': credentialsCheck === 'checking',
      'bg-green-600/95 border-green-800': credentialsCheck === 'good'
    }"
  >
    {{ infoMsg }}
  </div>
  <form
    class="w-full h-full flex flex-col justify-center items-center font-montserrat"
    @submit.prevent="sendLogin"
  >
    <!-- Room choice -->
    <div class="flex flex-col w-full justify-center items-center">
      <label class="text-3xl">Room N° :</label>
      <select
        id="roomChoice"
        name="room"
        class="w-3/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto"
        v-model="selectedRoom"
        required
      >
        <option v-for="roomKey in Object.keys(listRooms)" :key="roomKey" :value="roomKey">
          {{ listRooms[roomKey].roomNumber }}
        </option>
      </select>
    </div>
    <div class="mt-5 flex flex-col w-full justify-center items-center">
      <label class="text-3xl">Name <span class="text-sm">(Romaji)</span></label>
      <input
        type="text"
        id="nameChoice"
        name="name"
        class="w-4/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto"
        placeholder="Your name"
        v-model="loginResidentName"
        required
      />
    </div>
    <div class="mt-5 flex flex-col w-full justify-center items-center">
      <label class="text-3xl">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-4/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto"
        placeholder="Password"
        v-model="loginRoomPassword"
        required
      />
    </div>
    <div class="flex flex-col items-center w-full mt-12">
      <button
        type="submit"
        class="w-3/6 border-2 text-white text-2xl py-1 rounded-full"
        :class="{
          'border-teal-700 bg-teal-500': !sendingLoginInfo,
          'border-slate-700 bg-slate-600 opacity-20': sendingLoginInfo
        }"
        :disabled="sendingLoginInfo"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import useAuthenticationStore from '@/stores/authentication'
import { mapState, mapWritableState, mapActions } from 'pinia'

export default {
  name: 'LoginForm',
  data() {
    return {
      selectedRoom: 'A101',
      loginResidentName: '',
      loginRoomPassword: '',

      infoMsg: '',
      loginTabTrigger: false,
      sendingLoginInfo: false,
      credentialsCheck: ''
    }
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['sendLoginDB', 'getUserData']),
    async sendLogin() {
      this.loginTabTrigger = false
      this.sendingLoginInfo = true
      this.infoMsg = 'Checking user credentials'
      this.credentialsCheck = 'checking'

      const login = this.sendLoginDB(
        this.listRooms,
        this.selectedRoom,
        this.loginResidentName,
        this.loginRoomPassword
      )

      if ((await login) === true) {
        this.loginTabTrigger = true
        this.credentialsCheck = 'good'
        this.infoMsg = 'You are successfully logged in !'
        this.getUserData(this.selectedRoom)
      } else {
        this.loginTabTrigger = true
        this.credentialsCheck = 'error'
        this.infoMsg = 'Something went wrong, try again'
        setTimeout(() => {
          this.sendingLoginInfo = false
        }, 800)
      }
    }
  },

  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapWritableState(useAuthenticationStore, ['isConnected'])
  }
}
</script>
