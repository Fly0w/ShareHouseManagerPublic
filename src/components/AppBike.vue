<template>
  <div class="flex flex-col items-center h-full w-full pb-3 font-montserrat text-center">
    <!-- Title -->
    <div class="flex flex-col items-center w-full py-2 bg-green-200/95" style="height: 10%">
      <h2 class="text-3xl tracking-widest italic text-green-700 font-bold">Omote-bike</h2>
      <p class="text-xl" v-if="bikeStore.isBikeUsed">
        <span class="text-red-700 font-bold text-2xl">{{ bikeStore.currentBikeUser }}</span> is
        using the bike now
      </p>
      <p class="text-xl" v-else>Nobody is using the bike</p>
    </div>

    <!-- Form -->
    <div class="w-full h-52 py-3">
      <form
        v-if="!bikeStore.isBikeUsed"
        class="h-full w-full flex flex-col items-center justify-center"
        @submit="bikeStore.startUsing"
      >
        <label class="text-2xl font-bold text-emerald-700 mb-2">Select your name :</label>
        <select
          id="nameChoice"
          name="name"
          class="border-2 border-yellow-500 p-3 rounded-full overflow-y-auto"
          v-model="bikeStore.selectedName"
          @change="bikeStore.handleNameSelection"
        >
          <option value="">Choose your name</option>
          <option v-for="room in listRooms" :key="room.residentName" :value="room.residentName">
            {{ room.residentName }}
          </option>
        </select>

        <button
          type="submit"
          class="z-10 relative flex flex-col items-center justify-center h-12 w-2/5 mt-3 border-2 rounded-full text-xl font-bold"
          :class="{
            'bg-gray-600 text-white opacity-20': bikeStore.isNameSelected === false,
            'border-white text-white rolling_bg active:translate-y-1':
              bikeStore.isNameSelected === true
          }"
          :disabled="bikeStore.isNameSelected === false"
        >
          Start
        </button>
      </form>

      <form
        v-else
        class="h-full w-full flex flex-col items-center justify-center"
        @submit="bikeStore.stopUsing"
      >
        <div class="flex flex-col">
          <p class="text-xl">The lock passcode is :</p>
          <p class="text-3xl font-bold my-1 text-green-700">7 1 5 3</p>
        </div>
        <button
          type="submit"
          class="flex flex-col items-center justify-center h-12 w-2/5 mt-3 border-2 rounded-full text-xl font-bold border-white bg-red-600 text-white active:translate-y-1"
        >
          Stop
        </button>
      </form>
    </div>

    <!-- History -->
    <h3 class="text-xl font-bold italic text-slate-800">History</h3>
    <div
      class="flex flex-col items-center px-3 py-2 mx-2 border-4 border-green-500 rounded-3xl bg-slate-50 bg-opacity-50 overflow-y-auto"
      :class="{
        'h-52': isScreenHeightLessThan670(),
        'h-96': isScreenHeightGreaterThanOrEqualTo670()
      }"
      style="width: 95%"
    >
      <div class="flex flex-col w-full" v-for="entry in bikeStore.history" :key="entry.startDate">
        <BikeHistoryCard :entry="entry" />
      </div>
    </div>
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import { mapState, mapStores } from 'pinia'
import BikeHistoryCard from './BikeHistoryCard.vue'
import useBikeStore from '@/stores/bike'

export default {
  name: 'AppBike',
  data() {
    return {}
  },
  mounted() {
    // importer historique & importer state database
    console.log('mounted comp bike')
  },
  methods: {
    isScreenHeightLessThan670() {
      return window.innerHeight < 670
    },
    isScreenHeightGreaterThanOrEqualTo670() {
      return window.innerHeight >= 670
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapStores(useBikeStore)
  },
  components: { BikeHistoryCard }
}
</script>

<style>
.rolling_bg {
  background: linear-gradient(0.63turn, rgb(230, 0, 199), rgb(0, 204, 255));
  animation: rolling_bg 10s ease-in-out infinite;
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
