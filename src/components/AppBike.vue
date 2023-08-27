<template>
  <div
    class="flex flex-col items-center justify-between h-full w-full pb-3 font-montserrat text-center"
  >
    <!-- Title -->
    <div
      class="flex flex-col items-center justify-center w-full py-2 bg-green-200/95"
      style="height: 15%"
    >
      <h2 class="text-3xl tracking-widest italic text-green-700 font-bold">Omote-bike</h2>
      <p class="text-xl" v-if="usageState.isBeingUsed">
        <span class="text-red-700 font-bold text-2xl">{{ usageState.currentUser }}</span>
        is using the bike now
      </p>
      <p class="text-xl" v-else>Nobody is using the bike</p>
    </div>

    <!-- Form -->
    <div class="w-full h-3/5 py-3">
      <form
        v-if="!usageState.isBeingUsed"
        class="h-full w-full flex flex-col items-center justify-center"
        @submit.prevent="startUsing(`${userData.residentName} ${userData.roomEmoji}`)"
      >
        <div class="w-full">
          <p class="text-center text-3xl text-teal-700">
            {{ userData.residentName }} {{ userData.roomEmoji }}
          </p>
        </div>

        <button
          type="submit"
          class="z-10 relative flex flex-col items-center justify-center h-16 w-3/6 mt-7 border-2 rounded-full text-xl font-bold border-white text-white rolling_bg active:translate-y-1"
        >
          Start
        </button>
      </form>

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
    <h3 class="text-xl font-bold italic text-slate-800">History</h3>
    <div
      class="flex flex-col justify-start px-3 py-2 mx-2 border-4 border-green-500 rounded-3xl bg-slate-50 bg-opacity-50 overflow-y-auto"
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
import BikeAnimation from './icons/bikeAnimation.vue'

import { mapState, mapActions } from 'pinia'
import useRoomsStore from '@/stores/rooms'
import useBikeStore from '@/stores/bike'
import useAuthenticationStore from '@/stores/authentication'

export default {
  name: 'AppBike',
  data() {
    return {}
  },
  methods: {
    ...mapActions(useBikeStore, ['startUsing', 'stopUsing'])
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useAuthenticationStore, ['userData']),
    ...mapState(useBikeStore, ['usageState', 'lockPass', 'history'])
  },
  components: { BikeHistoryCard, BikeAnimation }
}
</script>

<style>
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
