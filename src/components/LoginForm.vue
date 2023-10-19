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
    v-if="gotRoomSuccess"
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
  <div v-else class="flex flex-col justify-center w-full" style="height: 90%">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.875s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.875s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.625s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.625s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.375s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.125s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
      <!-- [ldio] generated by https://loading.io/ -->
    </svg>
  </div>
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
      loginResidentName: 'Resident 1',
      loginRoomPassword: 'testpassword',

      infoMsg: '',
      loginTabTrigger: false,
      sendingLoginInfo: false,
      credentialsCheck: '',

      gotRoomSuccess: false
    }
  },
  async mounted() {
    // To avoid making a request everytime this component is mounted, we check if the list of rooms is empty. If empty, make a request, otherwise, just use the store
    if (!this.listRooms.A101.roomNumber) {
      const gotRoom = await this.getAllRooms
      gotRoom === true ? (this.gotRoomSuccess = true) : (this.gotRoomSuccess = false)
    } else {
      this.gotRoomSuccess = true
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
    ...mapState(useRoomsStore, ['listRooms', 'getAllRooms']),
    ...mapWritableState(useAuthenticationStore, ['isConnected'])
  }
}
</script>
