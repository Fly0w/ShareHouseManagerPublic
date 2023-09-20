<template>
  <div class="h-screen w-screen font-montserrat">
    <!-- Overlay Profile page -->
    <ProfileOverlay v-if="userTabTrigger" />
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
          <h3 class="font-montserrat text-lg text-slate-100">House n°1</h3>
        </div>

        <!-- User's profile access buttons -->
        <div
          v-if="isConnected && isGoodscreenWidth"
          class="relative z-5 flex flex-col justify-center items-end w-1/6"
        >
          <p
            class="h-10 w-10 flex flex-col items-center justify-center border-2 border-orange-500 bg-yellow-100/70 rounded-full text-xl mb-1 active:translate-y-1"
            @click="userTabTrigger = !userTabTrigger"
          >
            {{ userData.roomEmoji }}
          </p>
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
        <img src="../public/smartphone.png" alt="smartphone" class="mt-10" />
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
import useEventsStore from '@/stores/events'
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
      logoutBtnMsg: 'Logout',
      a: {
        A101: {
          roomEvents: [],
          roomNumber: 'A101',
          residentNameKanji: '人1',
          roomEmoji: '🐸',
          roomEmail: 'A101@hotmail.com',
          residentName: 'Resident 1',
          roomPassword: 'testpassword'
        },
        A1021: {
          roomEmoji: '🦅',
          residentName: 'Resident 2',
          residentNameKanji: '人2',
          roomNumber: 'A102-1',
          roomEvents: [],
          roomEmail: 'A1021@hotmail.com',
          roomPassword: 'testpassword'
        },
        A1022: {
          roomEmoji: '🦊',
          roomEvents: [],
          residentName: 'Resident 3',
          roomEmail: 'A1022@hotmail.com',
          roomNumber: 'A102-2',
          residentNameKanji: '人3',
          roomPassword: 'testpassword'
        },
        A201: {
          residentName: 'Resident 4',
          roomEmoji: '🐺',
          residentNameKanji: '人4',
          roomEmail: 'A201@hotmail.com',
          roomNumber: 'A201',
          roomEvents: [],
          roomPassword: 'testpassword'
        },
        A202: {
          residentNameKanji: '人5',
          roomEmail: 'A202@hotmail.com',
          roomEvents: [],
          roomEmoji: '🐮',
          roomNumber: 'A202',
          residentName: 'Resident 5',
          roomPassword: 'testpassword'
        },
        A203: {
          residentNameKanji: '人6',
          roomEvents: [],
          roomEmail: 'A203@hotmail.com',
          roomEmoji: '🐎',
          residentName: 'Resident 6',
          roomNumber: 'A203',
          roomPassword: 'testpassword'
        },
        A204: {
          residentNameKanji: '人7',
          residentName: 'Resident 7',
          roomEmail: 'A204@hotmail.com',
          roomEmoji: '🦓',
          roomNumber: 'A204',
          roomEvents: [],
          roomPassword: 'testpassword'
        },
        A205: {
          roomEvents: [],
          residentNameKanji: '人8',
          roomEmoji: '🦄',
          residentName: 'Resident 8',
          roomNumber: 'A205',
          roomEmail: 'A205@hotmail.com',
          roomPassword: 'testpassword'
        },
        A2061: {
          roomEmoji: '🦒',
          residentName: 'Resident 9',
          roomEvents: [],
          roomEmail: 'A2061@hotmail.com',
          residentNameKanji: '人9',
          roomNumber: 'A206-1',
          roomPassword: 'testpassword'
        },
        A2062: {
          roomEmoji: '🐼',
          roomEmail: 'A2062@hotmail.com',
          roomEvents: [],
          residentName: 'Resident 10',
          roomNumber: 'A206-2',
          residentNameKanji: '人10',
          roomPassword: 'testpassword'
        },
        B101: {
          residentNameKanji: '人11',
          roomNumber: 'B101',
          roomEvents: [],
          residentName: 'Resident 11',
          roomEmoji: '🦔',
          roomEmail: 'B101@hotmail.com',
          roomPassword: 'testpassword'
        },
        B102: {
          roomEmail: 'B102@hotmail.com',
          residentNameKanji: '人12',
          roomEmoji: '🐭',
          roomNumber: 'B102',
          residentName: 'Resident 12',
          roomEvents: [],
          roomPassword: 'testpassword'
        },
        B103: {
          residentNameKanji: '人13',
          roomNumber: 'B103',
          roomEvents: [],
          residentName: 'Resident 13',
          roomEmail: 'B103@hotmail.com',
          roomEmoji: '🦘',
          roomPassword: 'testpassword'
        },
        B104: {
          residentNameKanji: '人14',
          residentName: 'Resident 14',
          roomEmail: 'B104@hotmail.com',
          roomNumber: 'B104',
          roomEmoji: '🐰',
          roomEvents: [],
          roomPassword: 'testpassword'
        },
        B201: {
          roomEmail: 'B201@hotmail.com',
          residentNameKanji: '人15',
          residentName: 'Resident 15',
          roomEvents: [],
          roomEmoji: '🦉',
          roomNumber: 'B201',
          roomPassword: 'testpassword'
        },
        B202: {
          roomNumber: 'B202',
          roomEvents: [],
          roomEmoji: '🐬',
          residentName: 'Resident 16',
          roomEmail: 'B202@hotmail.com',
          residentNameKanji: '人16',
          roomPassword: 'testpassword'
        },
        B203: {
          roomNumber: 'B203',
          residentNameKanji: '人17',
          roomEvents: [],
          roomEmail: 'B203@hotmail.com',
          residentName: 'Resident 17',
          roomEmoji: '🐶',
          roomPassword: 'testpassword'
        },
        B204: {
          roomEmail: 'B204@hotmail.com',
          residentNameKanji: '人18',
          residentName: 'Resident 18',
          roomNumber: 'B204',
          roomEvents: [],
          roomEmoji: '🐨',
          roomPassword: 'testpassword'
        }
      },
      b: {
        rotation: {
          0: ['B104', 'B201'],
          1: ['B202', 'B203'],
          2: ['B204', 'A101'],
          3: ['A1021', 'A1022'],
          4: ['A201', 'A202'],
          5: ['A203', 'A204'],
          6: ['A205', 'B101'],
          7: ['A2061', 'A2062'],
          8: ['B102', 'B103']
        },
        daysWeek: [
          { icon: [], nextAction: { day: 'Tomorrow night', type: ['Burn'] }, id: 0, text: 'Sun' },
          { nextAction: { day: 'Tonight', type: ['Burn'] }, id: 1, icon: ['Throw'], text: 'Mon' },
          {
            nextAction: {
              day: 'Tomorrow night',
              type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw']
            },
            id: 2,
            text: 'Tue',
            icon: ['Burn']
          },
          {
            id: 3,
            icon: ['Throw'],
            nextAction: {
              day: 'Tonight',
              type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw']
            },
            text: 'Wed'
          },
          {
            text: 'Thu',
            nextAction: { type: ['Burn'], day: 'Tonight' },
            icon: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw'],
            id: 4
          },
          {
            icon: ['Burn'],
            nextAction: { day: 'Monday night', type: ['Burn'] },
            id: 5,
            text: 'Fri'
          },
          { icon: [], id: 6, text: 'Sat', nextAction: { day: 'Monday night', type: ['Burn'] } }
        ]
      },
      c: {
        rotation: {
          0: ['A203', 'B202'],
          1: ['A204', 'B203'],
          2: ['A205', 'B204'],
          3: ['A2061', 'A2062'],
          4: ['A101', 'B101'],
          5: ['A1021', 'B102'],
          6: ['A1022', 'B103'],
          7: ['A201', 'B104'],
          8: ['A202', 'B201']
        },
        needs: []
      }
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
    ...mapActions(useAuthenticationStore, ['getUserData', 'logOut', 'createAuthAndFirestoreDB']),
    ...mapActions(useBikeStore, ['setBike']),
    ...mapActions(useChoresStore, ['setChores']),
    ...mapActions(useEventsStore, ['setEventList']),
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
    ...mapWritableState(useEventsStore, ['eventList', 'getEventsData']),
    isGoodscreenWidth() {
      if (window.innerWidth <= 550) {
        return true
      } else {
        return false
      }
    }
  }
  // async mounted() {
  //   this.createAuthAndFirestoreDB(this.a)
  //   // this.setBike()
  //   // this.setChores(this.b, this.c)
  //   // this.setEventList()
  // }
}
</script>
