<template>
  <div class="h-full w-full font-montserrat relative">
    <!-- Overlay Profile page -->
    <ProfileOverlay v-if="userTabTrigger" />
    <!-- Header section -->
    <header class="px-2 py-3 h-36 w-full bg-cyan-600">
      <!-- Title -->
      <div class="flex flex-row justify-start w-full px-2">
        <div
          class="flex flex-col w-full"
          :class="{
            'justify-start items-start w-5/6': isConnected,
            'justify-center items-center': !isConnected
          }"
        >
          <h1 class="font-montserrat text-2xl max-[364px]:text-xl font-bold text-slate-100">
            Share House Manager
          </h1>
          <h3 class="font-montserrat text-lg text-slate-100">Share House 1</h3>
        </div>

        <!-- User's profile access buttons -->
        <div v-if="isConnected" class="relative z-5 flex flex-col justify-center items-end w-1/6">
          <div
            class="relative flex flex-col justify-center items-center h-10 w-10 mb-1 rounded-full"
          >
            <div class="absolute z-1 h-10 w-10 bg-orange-500 rounded-full blinking"></div>
            <p
              class="absolute z-2 h-10 w-10 flex flex-col items-center justify-center border-2 border-orange-500 bg-slate-200 rounded-full text-xl active:translate-y-1"
              @click="userTabTrigger = !userTabTrigger"
            >
              {{ userData.roomEmoji }}
            </p>
          </div>

          <p class="text-white tracking-wider max-[350px]:text-sm whitespace-nowrap">
            {{ userData.residentName }}
          </p>
          <p
            v-if="userTabTrigger"
            class="absolute -bottom-12 -right-1 px-3 max-[380px]:w-20 min-[380px]:w-24 py-0.5 text-center font-semibold border-2 border-red-400 bg-orange-600 text-slate-100 rounded-full active:translate-y-1 text-sm"
            @click="loggingUserOut()"
          >
            {{ logoutBtnMsg }}
          </p>
        </div>
      </div>

      <!-- Tabs -->
      <div
        v-if="isConnected"
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
        height: calc(100% - 9rem);
        background-image: url('/bg-mobile-blue.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
      class="w-full flex flex-col justify-center items-center overflow-y-auto"
    >
      <div class="w-full h-full">
        <div v-if="!isConnected" class="w-full h-full">
          <LoginForm />
        </div>
        <div v-else class="w-full h-full">
          <AppEventPlanner v-if="tab === 'Events'" />
          <AppChores v-if="tab === 'Chores'" />
          <AppListRooms v-if="tab === 'Rooms'" />
          <AppBike v-if="tab === 'Bike'" />
          <AppMoney v-if="tab === 'Money'" />
          <AppNoise v-if="tab === 'Noise'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppChores from './AppChores.vue'
import AppListRooms from './AppListRooms.vue'
import AppEventPlanner from './AppEventPlanner.vue'
import AppBike from './AppBike.vue'
import LoginForm from './LoginForm.vue'
import ProfileOverlay from './ProfileOverlay.vue'
import AppMoney from './AppMoney.vue'
import AppNoise from './AppNoise.vue'

import useAuthenticationStore from '@/stores/authentication'
import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
import useBikeStore from '@/stores/bike'
import useEventsStore from '@/stores/events'
import { mapWritableState, mapActions } from 'pinia'

import { auth } from '../includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'AppHome',
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
        await this.getEventsData
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
    // ...mapActions(useChoresStore, ['setChores']),
    loggingUserOut() {
      this.logoutBtnMsg = `Bye !`
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
    ...mapWritableState(useEventsStore, ['eventList', 'getEventsData'])
  }
  // async mounted() {
  //   this.setChores(this.b, this.c)
  // }
}
</script>

<style scoped>
@keyframes blinks {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.4);
    opacity: 0;
  }
}

.blinking {
  animation: blinks 2s ease-in infinite;
}
</style>
