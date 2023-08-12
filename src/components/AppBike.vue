<template>
  <div class="flex flex-col items-center h-full w-full pb-3 font-montserrat text-center">
    <!-- Title -->
    <div class="flex flex-col items-center w-full py-2 bg-green-200 bg-opacity-90">
      <h2 class="text-3xl tracking-widest italic text-green-700 font-bold">Omote-bike</h2>
      <p class="text-lg" v-if="isBikeUsed">
        <span class="text-red-700 font-bold text-xl">{{ currentBikeUser }}</span> is using the bike
      </p>
      <p class="text-lg" v-else>Nobody is using the bike</p>
    </div>

    <!-- Form -->
    <div class="w-full h-52 py-3">
      <form
        v-if="!isBikeUsed"
        class="h-full w-full flex flex-col items-center justify-center"
        @submit="startUsing"
      >
        <label class="text-2xl font-bold text-emerald-700 mb-2">Select your name :</label>
        <select
          id="nameChoice"
          name="name"
          class="border-2 border-yellow-500 p-3 rounded-full overflow-y-auto"
          v-model="selectedName"
          @change="handleNameSelection"
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
            'bg-gray-600 text-white opacity-20': isNameSelected === false,
            'border-white text-white rolling_bg active:translate-y-1': isNameSelected === true
          }"
          :disabled="isNameSelected === false"
        >
          Start
        </button>
      </form>

      <form
        v-else
        class="h-full w-full flex flex-col items-center justify-center"
        @submit="stopUsing(event)"
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
      <div class="flex flex-col w-full" v-for="entry in history" :key="entry.startDate">
        <BikeHistoryCard :entry="entry" />
      </div>
    </div>
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import { mapState } from 'pinia'
import BikeHistoryCard from './BikeHistoryCard.vue'

export default {
  name: 'AppBike',
  data() {
    return {
      selectedName: '',
      isNameSelected: false,
      isBikeUsed: false,
      currentBikeUser: 'Florian',
      history: [
        { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
        { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
        { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
        { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' }
      ]
    }
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
    },
    handleNameSelection() {
      if (this.selectedName === '') {
        this.isNameSelected = false
      } else {
        this.isNameSelected = true
      }
    },
    startUsing(event) {
      // Envoyer info database 1.update state 2. Ecrire history
      this.currentBikeUser = this.selectedName
      this.isBikeUsed = true
      event.preventDefault()
    },
    stopUsing(event) {
      // Envoyer info database 1.update state 2. Ecrire history
      this.currentBikeUser = ''
      this.isBikeUsed = false
      event.preventDefault()
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms'])
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
