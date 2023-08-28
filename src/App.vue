<template>
  <div class="h-screen w-screen font-montserrat">
    <!-- Overlay Profile page -->

    <ProfileOverlay
      v-if="userTabTrigger"
      :roomNumber="userData.roomNumber"
      :residentName="userData.residentName"
      :residentNameKanji="userData.residentNameKanji"
      :roomEmoji="userData.roomEmoji"
    />

    <!-- Header section -->
    <header class="px-2 py-3 h-36 w-full bg-cyan-600">
      <!-- Title -->
      <div class="flex flex-row justify-start w-full px-2">
        <div
          class="flex flex-col w-full"
          :class="{
            'justify-start items-start w-5/6': isConnected && isGoodscreenWidth,
            'justify-center items-center': !isConnected || !isGoodscreenWidth
          }"
        >
          <h1 class="font-montserrat text-2xl max-[364px]:text-xl font-bold text-slate-100">
            Share House Manager
          </h1>
          <h3 class="font-montserrat text-lg text-slate-100">Omotesando 1</h3>
        </div>

        <!-- User's profile access buttons -->
        <div
          v-if="isConnected && isGoodscreenWidth"
          class="relative z-5 flex flex-col justify-center items-center w-1/6"
        >
          <p
            class="h-10 w-10 flex flex-col items-center justify-center border-2 border-orange-500 bg-yellow-100/70 rounded-full text-xl mb-1 active:translate-y-1"
            @click="userTabTrigger = !userTabTrigger"
          >
            {{ userData.roomEmoji }}
          </p>
          <p class="text-white tracking-wider">{{ userData.residentName }}</p>
          <p
            v-if="userTabTrigger"
            class="absolute -bottom-11 -right-2 px-3 max-[370px]:w-24 min-[370px]:w-28 py-0.5 text-center font-semibold border-2 border-red-400 bg-orange-600 text-slate-100 rounded-full active:translate-y-1"
            @click="loggingUserOut()"
          >
            {{ logoutBtnMsg }}
          </p>
        </div>
      </div>

      <!-- Tabs -->
      <div
        v-if="isConnected && isGoodscreenWidth"
        class="flex flex-row justify-start font-montserrat font-bold mt-2.5 overflow-x-auto"
      >
        <!-- Chores -->
        <div
          class="border-2 border-blue-300 text-slate-50 rounded-full px-3 py-2 mr-2"
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
          class="border-2 border-emerald-200 text-slate-50 rounded-full px-3 py-2 mr-2"
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
          class="border-2 border-purple-300 text-slate-50 rounded-full px-3 py-2 mr-2"
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
          class="border-2 border-green-300 text-slate-50 rounded-full px-3 py-2 mr-2"
          @click="tab = 'Bike'"
          :class="{
            'bg-green-500 ': tab === 'Bike',
            ' bg-transparent text-black': tab !== 'Bike'
          }"
        >
          Bike
        </div>
        <!-- Common money -->
        <div
          class="border-2 border-sky-300 text-slate-50 rounded-full px-3 py-2 mr-2"
          @click="tab = 'Money'"
          :class="{
            'bg-sky-500 ': tab === 'Money',
            ' bg-transparent text-black': tab !== 'Money'
          }"
        >
          Money
        </div>
        <!-- Noise alert -->
        <div
          class="border-2 border-red-300 text-slate-50 rounded-full px-3 py-2 mr-2"
          @click="tab = 'Noise'"
          :class="{
            'bg-red-600 ': tab === 'Noise',
            ' bg-transparent text-black': tab !== 'Noise'
          }"
        >
          Noise
        </div>
      </div>

      <h2
        v-else
        class="w-full px-3 bg-white/80 border-2 border-red-700 rounded-md text-red-600 text-lg text-center font-montserrat"
      >
        This is a private website. To access it, please login first.
      </h2>
    </header>

    <!-- Content section -->
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
      <div v-if="isGoodscreenWidth" class="w-full">
        <div v-if="!isConnected" class="" style="height: calc(100vh - 9rem)">
          <LoginForm />
        </div>
        <div v-else class="w-full" style="height: calc(100vh - 9rem)">
          <AppEventPlanner v-if="tab === 'Events'" />
          <AppChores v-if="tab === 'Chores'" />
          <AppListRooms v-if="tab === 'Rooms'" />
          <AppBike v-if="tab === 'Bike'" />
          <AppMoney v-if="tab === 'Money'" />
          <AppNoise v-if="tab === 'Noise'" />
        </div>
      </div>

      <!-- PC version -->
      <div v-else class="flex flex-col justify-center items-center h-full w-full p-5">
        <p class="text-sky-700 text-4xl text-center m-5">
          This app is meant to be used on a smartphone ...
        </p>
        <img src="../public/smartphone.png" alt="smartphone" class="h-4/6 mt-10" />
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
import ProfileOverlay from './components/ProfileOverlay.vue'
import AppMoney from './components/AppMoney.vue'
import AppNoise from './components/AppNoise.vue'

import useAuthenticationStore from '@/stores/authentication'
import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
import useBikeStore from '@/stores/bike'
import { mapWritableState, mapActions } from 'pinia'

import { auth } from './includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'App',
  data() {
    return {
      tab: 'Chores',
      loggedUser: '',
      userTabTrigger: false,
      logoutBtnMsg: 'Logout'
    }
  },
  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.isConnected = true

        // Keep the user connected and gets his information to save it in the store if he's connected
        const roomNumber = user.email.split('@')[0].toUpperCase()
        await this.getUserData(roomNumber)
        await this.getAllRooms
        await this.getChoresInfo
        this.weekIDs
        this.monthIDs
        await this.getBikeData
      } else {
        // If not connected, reset the store
        this.isConnected = false
        this.userData = {
          roomNumber: '',
          residentName: '',
          residentNameKanji: '',
          roomEmoji: '',
          roomEvents: []
        }
      }
    })
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['getUserData', 'logOut']),
    loggingUserOut() {
      this.logoutBtnMsg = `See ya' !`
      setTimeout(() => {
        this.userTabTrigger = false
        this.logOut()
        this.logoutBtnMsg = 'Logout'
      }, 1500)
    }
  },
  components: {
    AppEventPlanner,
    AppChores,
    AppListRooms,
    AppBike,
    LoginForm,
    ProfileOverlay,
    AppMoney,
    AppNoise
  },
  computed: {
    ...mapWritableState(useAuthenticationStore, ['isConnected', 'userData']),
    ...mapWritableState(useChoresStore, [
      'garbage',
      'groceries',
      'weekDuo',
      'monthDuo',
      'getChoresInfo',
      'weekIDs',
      'monthIDs'
    ]),
    ...mapWritableState(useRoomsStore, ['getAllRooms']),
    ...mapWritableState(useBikeStore, ['getBikeData', 'setBike']),
    isGoodscreenWidth() {
      if (window.innerWidth <= 550) {
        return true
      } else {
        return false
      }
    }
  }
  // async mounted() {
  //   // Initialisation functions
  // }
}
</script>
