<template>
  <Transition name="views" mode="out-in">
    <div
      v-if="view === 'intro'"
      class="flex flex-col justify-center items-center text-center w-full"
    >
      <p class="text-5xl text-fuchsia-500 mb-4">Welcome !</p>
      <p class="text-2xl text-violet-700 mb-2">Let's begin the registration process...</p>
      <p class="text-sm italic">(It is super fast !)</p>
    </div>
    <div
      v-else-if="view === 'register'"
      class="flex flex-col justify-start items-center w-full h-5/6 text-center"
    >
      <p class="text-4xl mb-5 text-white font-bold" style="text-shadow: purple 2px 2px 5px">
        Share House 1
      </p>
      <p class="mb-5 text-2xl text-purple-700">Tell us more about yourself...</p>

      <form
        class="w-full flex flex-col justify-center items-center font-montserrat"
        @submit.prevent="view = 'pre-confirm'"
      >
        <!-- Room choice -->
        <div v-if="gotRoomSuccess" class="flex flex-col w-full justify-center items-center">
          <label class="text-3xl">Room N° :</label>
          <select
            id="roomChoice"
            name="room"
            class="w-3/6 border-2 border-violet-400 py-1 rounded-xl text-center text-2xl overflow-y-auto"
            v-model="selectedRoom"
            required
          >
            <option v-for="roomKey in Object.keys(listRooms)" :key="roomKey" :value="roomKey">
              {{ listRooms[roomKey].roomNumber }}
            </option>
          </select>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
        <div class="mt-5 flex flex-col w-full justify-center items-center">
          <label class="text-3xl">Name <span class="text-sm">(Romaji)</span></label>
          <input
            type="text"
            id="nameChoice"
            name="name"
            class="w-4/6 border-2 border-violet-400 py-1 rounded-xl text-center text-2xl overflow-y-auto"
            placeholder="Your name"
            v-model="registerResidentName"
            required
          />
        </div>
        <div class="flex flex-row justify-center items-center w-5/6 mt-3">
          <input class="w-1/6 h-6 mr-5" type="checkbox" name="consent" v-model="consent" required />
          <p class="w-5/6 text-left text-red-600 font-semibold">
            I am sure that this is my room and that there is no other resident in this room
          </p>
        </div>

        <div class="flex flex-col items-center w-full mt-12">
          <button
            type="submit"
            class="border-2 text-white text-2xl py-1 px-5 rounded-full"
            :class="{
              'border-purple-700 bg-purple-600': consent && registerResidentName,
              'border-slate-700 bg-slate-600 opacity-20': !consent || !registerResidentName
            }"
            :disabled="!registerResidentName || !consent"
          >
            Register
          </button>
        </div>
      </form>

      <p
        class="px-5 py-1 mt-5 border-2 rounded-full border-slate-800 bg-slate-500 text-slate-50"
        @click="changeScreen('home')"
      >
        Cancel
      </p>
    </div>
    <div
      v-else-if="view === 'pre-confirm'"
      class="flex flex-col justify-center items-center h-full w-full"
    >
      <NewResidentRegisterPreConfirm :changeView="changeView" />
    </div>
    <div
      v-else-if="view === 'confirm'"
      class="flex flex-col justify-start items-center w-full h-4/6 text-center"
    >
      <p class="text-4xl mb-5 text-white font-bold" style="text-shadow: purple 2px 2px 5px">
        Share House 1
      </p>
      <p class="mb-8 text-2xl text-purple-700">Please check your information before validation</p>

      <p v-if="sendingRegisterStatus === 'error'" class="text-red-500">
        Error, please try again later
      </p>

      <form
        @submit.prevent="sendRegister"
        class="flex flex-col justify-center items-center w-full h-full"
      >
        <div class="flex flex-col justify-start items-center w-full my-10">
          <div class="flex flex-row justify-start items-center w-4/5 mb-5">
            <input
              class="h-7 w-7 mr-5"
              type="checkbox"
              name="confirmRoom"
              v-model="confirmRoom"
              required
            />
            <p class="text-2xl text-fuchsia-600 mr-4">Room n° :</p>
            <p class="font-bold text-3xl text-sky-600">{{ selectedRoom }}</p>
          </div>

          <div class="flex flex-row justify-start items-center w-4/5 mb-5">
            <input
              class="h-7 w-7 mr-5"
              type="checkbox"
              name="confirmName"
              v-model="confirmName"
              required
            />
            <p class="text-2xl text-fuchsia-600 mr-4">Name :</p>
            <p class="font-bold text-3xl text-sky-600">{{ registerResidentName }}</p>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center w-full mb-10">
          <button
            type="submit"
            class="border-2 text-white text-2xl py-1 px-5 rounded-full mb-7"
            :class="{
              'border-purple-700 bg-purple-600': confirmRoom && confirmName,
              'border-slate-700 bg-slate-600 opacity-20': !confirmRoom || !confirmName
            }"
            :disabled="!confirmRoom || !confirmName"
          >
            Finish registration
          </button>
          <p
            class="px-5 py-1 border-2 rounded-full border-slate-800 bg-slate-500 text-slate-50"
            @click="view = 'register'"
          >
            Edit information
          </p>
        </div>
      </form>
    </div>

    <div v-else-if="view === 'done'" class="flex flex-col justify-start items-center h-full w-full">
      <NewResidentDone :selectedRoom="this.selectedRoom" />
    </div>
  </Transition>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import useAuthenticationStore from '@/stores/authentication'
import { mapState, mapActions } from 'pinia'
import NewResidentRegisterPreConfirm from './NewResidentRegisterPreConfirm.vue'
import NewResidentDone from './NewResidentDone.vue'

export default {
  name: 'NewResidentRegister',
  data() {
    return {
      view: '',
      title0: false,

      selectedRoom: 'A101',
      registerResidentName: '',
      credentialsCheck: '',

      consent: false,
      confirmRoom: false,
      confirmName: false,

      sendingRegisterStatus: '',
      gotRoomSuccess: false
    }
  },
  components: { NewResidentRegisterPreConfirm, NewResidentDone },
  props: ['changeScreen'],
  async mounted() {
    setTimeout(() => {
      this.view = 'intro'
    }, 500)
    setTimeout(() => {
      this.view = 'register'
    }, 3000)

    // To avoid making a request everytime this component is mounted, we check if the list of rooms is empty. If empty, make a request, otherwise, just use the store
    if (!this.listRooms.A101.roomNumber) {
      const gotRoom = await this.getAllRooms
      gotRoom === true ? (this.gotRoomSuccess = true) : (this.gotRoomSuccess = false)
    } else {
      this.gotRoomSuccess = true
    }
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['sendLoginDB', 'getUserData', 'logOut']),
    ...mapActions(useRoomsStore, ['editRoom']),
    changeView() {
      setTimeout(() => {
        this.view = 'confirm'
      }, 1500)
    },
    async sendRegister() {
      console.log('sending data register')
      const register = this.editRoom(this.selectedRoom, this.registerResidentName)

      if ((await register) === true) {
        this.logOut()
        this.getUserData(this.selectedRoom)
        this.view = 'done'
      } else {
        this.sendingRegisterStatus = 'error'
      }
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['getAllRooms', 'listRooms'])
  }
}
</script>

<style scoped>
.views-enter-from {
  opacity: 0;
}

.views-leave-to {
  opacity: 0;
  position: absolute;
}

.views-enter-active {
  transition: opacity 1s ease-in-out;
}

.views-leave-active {
  transition: opacity 1s ease-in-out;
}
</style>
