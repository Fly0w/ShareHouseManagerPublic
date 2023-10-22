<template>
  <div
    class="flex flex-col items-center justify-between h-full w-full pb-3 font-montserrat text-center"
  >
    <!-- Title -->
    <div class="flex flex-col items-center justify-center h-20 w-full py-2 bg-green-200/95">
      <h2 class="text-3xl tracking-widest italic text-green-700 font-bold">Omote-bike</h2>
      <p class="text-xl" v-if="usageState.isBeingUsed">
        <span class="text-red-700 font-bold text-2xl">{{ usageState.currentUser }}</span>
        is using the bike now
      </p>
      <p class="text-xl" v-else>Nobody is using the bike</p>
    </div>

    <!-- Form -->
    <div class="flex flex-col items-center justify-center w-full h-110 py-3">
      <form
        v-if="!usageState.isBeingUsed && changeLockPanel == 'none'"
        class="h-full w-full flex flex-col items-center justify-center"
        @submit.prevent="startUsing(`${userData.residentName} ${userData.roomEmoji}`)"
      >
        <p class="w-full text-center text-3xl text-teal-700">
          {{ userData.residentName }} {{ userData.roomEmoji }}
        </p>
        <button
          type="submit"
          class="flex flex-col items-center justify-center h-16 w-3/6 my-5 border-2 rounded-full text-xl font-bold border-white text-white rolling_bg active:translate-y-1"
        >
          <p>Start</p>
        </button>
        <div
          class="flex flex-row justify-center items-center mt-5 px-5 py-1 rounded-full border-2 border-yellow-600 bg-yellow-400 text-orange-900 text-sm font-semibold"
          @click="changeLockPanel = 'newLock'"
        >
          <img src="../../public/lock.png" class="h-5 w-4 mr-2" />
          Change code
        </div>
      </form>

      <div
        v-else-if="changeLockPanel !== 'none'"
        class="flex flex-col items-center justify-center h-full w-4/5 border-4 rounded-xl"
        :class="{
          'border-yellow-600 bg-yellow-500/90': changeLockPanel == 'newLock',
          'border-red-600 bg-red-500/90': changeLockPanel == 'confirm',
          'border-blue-600 bg-blue-500/90': changeLockPanel == 'done'
        }"
      >
        <div
          v-if="changeLockPanel == 'newLock'"
          class="flex flex-col items-center justify-around h-5/6 w-5/6"
        >
          <p class="text-slate-50 text-xl font-semibold">Change Lock</p>

          <div class="flex flex-col items-center justify-center w-full">
            <p class="text-orange-900">Insert new code</p>
            <div class="flex flex-row items-center justify-around w-5/6 mt-1">
              <input
                class="w-10 h-10 text-center text-orange-900 font-bold text-xl border-4 rounded-lg border-red-700 bg-slate-100"
                type="number"
                v-model="digit1"
                @input="validateInput"
              />
              <input
                class="w-10 h-10 text-center text-orange-900 font-bold text-xl border-4 rounded-lg border-red-700 bg-slate-100"
                type="number"
                v-model="digit2"
                @input="validateInput"
              />
              <input
                class="w-10 h-10 text-center text-orange-900 font-bold text-xl border-4 rounded-lg border-red-700 bg-slate-100"
                type="number"
                v-model="digit3"
                @input="validateInput"
              />
              <input
                class="w-10 h-10 text-center text-orange-900 font-bold text-xl border-4 rounded-lg border-red-700 bg-slate-100"
                type="number"
                v-model="digit4"
                @input="validateInput"
              />
            </div>
          </div>

          <div class="flex flex-row justify-around items-center w-full mt-5">
            <p
              class="w-24 py-0.5 border-2 rounded-full border-red-800 bg-red-600 text-slate-50"
              @click="changeLockPanel = 'none'"
            >
              Cancel
            </p>
            <p
              class="w-24 py-0.5 border-2 rounded-full border-green-800 bg-green-600 text-slate-50"
              @click="changeLockPanel = 'confirm'"
            >
              Confirm
            </p>
          </div>
        </div>

        <div
          v-else-if="changeLockPanel == 'confirm'"
          class="flex flex-col items-center justify-around h-full w-full"
        >
          <p class="text-slate-50 text-xl font-semibold">Are you sure ?</p>
          <div
            class="flex flex-col justify-center items-center border-2 rounded-lg border-teal-500 w-4/6 py-1 bg-white/30"
          >
            <p class="text-sm text-gray-800">Passcode :</p>
            <p class="text-md line-through tracking-widest text-gray-800">{{ lockPass }}</p>
            <p class="text-3xl text-slate-100">⬇</p>
            <p class="text-4xl text-teal-600 tracking-widest font-semibold">
              {{ newLockString }}
            </p>
          </div>

          <div class="flex flex-row justify-around items-center w-full">
            <p
              class="w-24 py-0.5 border-2 rounded-full border-gray-600 bg-gray-500 text-slate-50"
              @click="changeLockPanel = 'newLock'"
            >
              Cancel
            </p>
            <p
              class="w-24 py-0.5 border-2 rounded-full border-green-800 bg-green-600 text-slate-50"
              @click="changeLockComponent()"
            >
              Confirm
            </p>
          </div>
        </div>

        <div
          v-else-if="changeLockPanel == 'done'"
          class="flex flex-col items-center justify-around py-4 h-full w-full"
        >
          <p class="text-slate-50 text-xl text-center mb-5">Bike lock changed successfully !</p>
          <img src="../../public/lock.png" class="h-12 w-10 mb-6" />
        </div>
      </div>

      <form
        v-else
        class="h-full w-full flex flex-col items-center justify-center"
        @submit.prevent="stopUsing"
      >
        <div class="flex flex-col">
          <p class="text-xl">The lock passcode is :</p>
          <p class="text-5xl font-bold my-1 text-green-700 tracking-widest">{{ lockPass }}</p>
        </div>
        <button
          type="submit"
          class="flex flex-col items-center justify-center h-12 w-2/5 mt-3 border-2 rounded-full text-xl font-bold border-white bg-red-600 text-white active:translate-y-1"
        >
          Stop
        </button>
        <BikeAnimation class="h-16 mt-3 pr-9" />
      </form>
    </div>

    <!-- History -->
    <h3
      class="border-x-4 border-t-4 border-b-2 border-x-green-500 border-t-green-500 border-b-green-800 rounded-t-3xl bg-emerald-50/50 text-2xl font-bold text-emerald-800 tracking-wider"
      style="width: 95%"
    >
      History
    </h3>
    <div
      class="flex flex-col justify-start px-3 py-2 mx-2 border-x-4 border-b-4 border-x-green-500 border-b-green-500 rounded-b-3xl bg-emerald-50/50 overflow-y-auto"
      style="width: 95%; height: 50%"
    >
      <div class="w-full" v-for="entry in history.slice().reverse()" :key="entry.startDate">
        <BikeHistoryCard :entry="entry" />
      </div>
    </div>
  </div>
</template>

<script>
import BikeHistoryCard from './BikeHistoryCard.vue'
import BikeAnimation from './icons/BikeAnimation.vue'

import { mapState, mapActions } from 'pinia'
import useRoomsStore from '@/stores/rooms'
import useBikeStore from '@/stores/bike'
import useAuthenticationStore from '@/stores/authentication'

export default {
  name: 'AppBike',
  data() {
    return {
      changeLockPanel: 'none',
      digit1: null,
      digit2: null,
      digit3: null,
      digit4: null
    }
  },
  methods: {
    ...mapActions(useBikeStore, ['startUsing', 'stopUsing', 'changeBikeLock']),
    changeLockComponent() {
      // 9138
      let newCode =
        this.digit1.toString() +
        this.digit2.toString() +
        this.digit3.toString() +
        this.digit4.toString()
      this.changeBikeLock(newCode)
      this.digit1 = null
      this.digit2 = null
      this.digit3 = null
      this.digit4 = null
      this.changeLockPanel = 'done'
      setTimeout(() => {
        this.changeLockPanel = 'none'
      }, 2000)
    },
    validateInput() {
      if (this.digit1 < 0 || this.digit1 > 9) {
        this.digit1 = null
      } else if (this.digit2 < 0 || this.digit2 > 9) {
        this.digit2 = null
      } else if (this.digit3 < 0 || this.digit3 > 9) {
        this.digit3 = null
      } else if (this.digit4 < 0 || this.digit4 > 9) {
        this.digit4 = null
      }
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useAuthenticationStore, ['userData']),
    ...mapState(useBikeStore, ['usageState', 'lockPass', 'history']),
    newLockString() {
      let newCode =
        this.digit1.toString() +
        this.digit2.toString() +
        this.digit3.toString() +
        this.digit4.toString()
      return newCode
    }
  },
  components: { BikeHistoryCard, BikeAnimation }
}
</script>

<style scoped>
.rolling_bg {
  background: linear-gradient(0.63turn, rgb(230, 0, 199), rgb(0, 204, 255));
  animation: rolling_bg 15s ease-in-out infinite;
  z-index: 0;
}

@keyframes rolling_bg {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
