<template>
  <div class="flex flex-col items-center h-full w-full pb-3 font-montserrat text-center">
    <!-- Title -->
    <div
      class="flex flex-col items-center px-8 py-2 mb-5 bg-green-400 rounded-full border-4 border-emerald-600 text-white"
    >
      <h2 class="text-3xl mb-3 tracking-widest">Omote-bike</h2>
      <h3 class="text-xl italic">How to use ?</h3>
    </div>

    <!-- Form -->
    <form
      class="h-1/5 w-full flex flex-col items-center justify-between border-2"
      @submit="startRent"
    >
      <label class="text-xl">Select your name</label>
      <select
        id="nameChoice"
        name="name"
        class="border-2 border-yellow-500 p-3 rounded-full overflow-y-auto"
        v-model="selectedName"
        @change="handleNameSelection()"
      >
        <option value="">Choose your name</option>
        <option v-for="room in listRooms" :key="room.residentName" :value="room.residentName">
          {{ room.residentName }}
        </option>
      </select>

      <div
        class="z-10 relative flex flex-col items-center justify-center h-2/6 w-2/5 border-2 rounded-full text-xl font-bold"
        :class="{
          'bg-gray-600 text-white opacity-20': isNameSelected === false,
          ' border-white bg-green-500 text-white rolling-shadow-container': isNameSelected === true
        }"
      >
        <p>Start</p>
      </div>
    </form>
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import { mapState } from 'pinia'

export default {
  name: 'AppBike',
  data() {
    return {
      selectedName: '',
      isNameSelected: false
    }
  },
  mounted() {
    console.log('mounted comp bike')
  },
  methods: {
    startRent() {
      console.log('starting the rent')
    },
    handleNameSelection() {
      if (this.selectedName === '') {
        this.isNameSelected = false
      } else {
        this.isNameSelected = true
      }
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms'])
  }
}
</script>

<style>
.rolling-shadow-container::before {
  content: '';
  position: absolute;
  border-radius: 100px;
  width: 105%;
  height: 125%;
  box-shadow:
    -2px 2px 5px #f700ff,
    2px -2px 5px #00f7ff;
  animation: rollingshadow1 10s linear infinite;
  z-index: 0;
}

.rolling-shadow-container::after {
  content: '';
  position: absolute;
  border-radius: 100px;
  width: 105%;
  height: 125%;
  box-shadow:
    -2px -2px 5px #00f7ff,
    2px 2px 5px #f700ff;
  animation: rollingshadow2 5s linear infinite;
  z-index: 0;
}

@keyframes rollingshadow1 {
  from {
    filter: blur(4px) hue-rotate(0deg);
  }
  to {
    filter: blur(4px) hue-rotate(360deg);
  }
}

@keyframes rollingshadow2 {
  from {
    filter: blur(4px) hue-rotate(180deg);
  }
  to {
    filter: blur(4px) hue-rotate(-180deg);
  }
}
</style>
