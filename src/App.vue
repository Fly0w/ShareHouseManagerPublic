<template>
  <div class="h-screen w-screen">
    <header class="px-2 py-3 h-36 text-center bg-cyan-600">
      <h1 class="font-montserrat text-3xl max-[364px]:text-2xl font-bold text-slate-100">
        Share House Manager
      </h1>
      <h3 class="font-montserrat text-lg text-slate-100 drop-shadow-xl">Omotesando 1</h3>
      <!-- Tabs -->
      <div v-if="isConnected" class="flex flex-row justify-around font-montserrat font-bold mt-2.5">
        <!-- Chores -->
        <div
          class="border-2 border-blue-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Chores'"
          :class="{
            'bg-blue-500 ': tab === 'Chores',
            ' bg-transparent text-black': tab !== 'Chores'
          }"
        >
          Chores
        </div>
        <!-- Rooms -->
        <div
          class="border-2 border-emerald-200 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Rooms'"
          :class="{
            'bg-teal-400': tab === 'Rooms',
            ' bg-transparent text-black': tab !== 'Rooms'
          }"
        >
          Rooms
        </div>
        <!-- Events -->
        <div
          class="border-2 border-purple-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Events'"
          :class="{
            'bg-purple-500 ': tab === 'Events',
            ' bg-transparent text-black': tab !== 'Events'
          }"
        >
          Events
        </div>
        <!-- Bike -->
        <div
          class="border-2 border-green-300 text-slate-50 rounded-full px-3 py-2"
          @click="tab = 'Bike'"
          :class="{
            'bg-green-500 ': tab === 'Bike',
            ' bg-transparent text-black': tab !== 'Bike'
          }"
        >
          Bike
        </div>
      </div>
      <h2
        v-else
        class="w-full px-3 bg-white/80 border-2 border-red-700 rounded-md text-red-600 text-lg font-montserrat"
      >
        This is a private website. To access it, please login first.
      </h2>
    </header>
    <div
      style="
        height: calc(100vh - 9rem);
        background-image: url('/bg-mobile-blue.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
      class=""
    >
      <div v-if="!isConnected" class="w-full" style="height: calc(100vh - 9rem)">
        <LoginForm />
      </div>
      <div v-else class="w-full" style="height: calc(100vh - 9rem)">
        <AppEventPlanner v-if="tab === 'Events'" />
        <AppChores v-if="tab === 'Chores'" />
        <AppListRooms v-if="tab === 'Rooms'" />
        <AppBike v-if="tab === 'Bike'" />
      </div>
    </div>
  </div>
</template>

<script>
import AppChores from './components/AppChores.vue'
import AppListRooms from './components/AppListRooms.vue'
import AppEventPlanner from './components/AppEventPlanner.vue'
import AppBike from './components/AppBike.vue'
import LoginForm from './components/LoginForm.vue'

import useAuthenticationStore from '@/stores/authentication'
import { mapWritableState, mapActions } from 'pinia'

import { auth } from './includes/firebase'

export default {
  name: 'App',
  data() {
    return {
      tab: 'Chores',
      loggedUser: ''
    }
  },
  // created() {
  //   if (auth.currentUser) {
  //     // Keep the user connected and gets his information to save it in the store if he's connected
  //     const roomNumber = auth.currentUser._delegate.email.split('@')[0].toUpperCase()
  //     this.getUserData(roomNumber)
  //     this.isConnected = true
  //   } else {
  //     // If not connected, reset the store
  //     this.isConnected = false
  //     this.userData = {
  //       roomNumber: '',
  //       residentName: '',
  //       residentNameKanji: '',
  //       roomEmoji: '',
  //       roomEvents: []
  //     }
  //   }
  // },
  methods: {
    ...mapActions(useAuthenticationStore, ['getUserData'])
  },
  components: {
    AppEventPlanner,
    AppChores,
    AppListRooms,
    AppBike,
    LoginForm
  },
  computed: {
    ...mapWritableState(useAuthenticationStore, ['isConnected', 'userData'])
  }
}
</script>
