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
import { mapState, mapWritableState } from 'pinia'
import { auth, db, usersCollection } from '../includes/firebase'
import { doc, getDoc } from 'firebase/firestore'

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
    async sendLogin() {
      this.loginTabTrigger = false
      this.sendingLoginInfo = true
      this.infoMsg = 'Checking user credentials'
      this.credentialsCheck = 'checking'

      const docRef = doc(db, 'users', this.selectedRoom)
      const docSnap = await getDoc(docRef)

      if (docSnap.data().residentName === this.loginResidentName) {
        try {
          await auth.signInWithEmailAndPassword(docSnap.data().roomEmail, this.loginRoomPassword)
          console.log('NICEEEEE')
          this.credentialsCheck = 'good'
          this.loginTabTrigger = true
          this.infoMsg = 'You are successfully logged in !'
          setTimeout(() => {
            this.isConnected = true
          }, 1500)
          return
        } catch (error) {
          console.log(error)
          this.credentialsCheck = 'error'
          this.loginTabTrigger = true
          this.infoMsg = 'Something went wrong, try again'
          setTimeout(() => {
            this.sendingLoginInfo = false
          }, 800)
          return
        }
      } else {
        this.credentialsCheck = 'error'
        this.loginTabTrigger = true
        this.infoMsg = 'Something went wrong, try again'
        setTimeout(() => {
          this.sendingLoginInfo = false
        }, 800)
      }
    },
    async createAuthAndFirestore() {
      // Used to initialize all the entries in the db, do not use
      try {
        for (let i = 0; i <= 17; i++) {
          await auth.createUserWithEmailAndPassword(
            this.listRooms[Object.keys(this.listRooms)[i]].roomEmail,
            this.listRooms[Object.keys(this.listRooms)[i]].roomPassword
          )
          await usersCollection.doc(Object.keys(this.listRooms)[i]).set({
            roomNumber: this.listRooms[Object.keys(this.listRooms)[i]].roomNumber,
            residentName: this.listRooms[Object.keys(this.listRooms)[i]].residentName,
            residentNameKanji: this.listRooms[Object.keys(this.listRooms)[i]].residentNameKanji,
            roomEmail: this.listRooms[Object.keys(this.listRooms)[i]].roomEmail,
            roomEmoji: this.listRooms[Object.keys(this.listRooms)[i]].roomEmoji
          })
        }

        console.log('ok')
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapWritableState(useRoomsStore, ['isConnected'])
  }
}
</script>
