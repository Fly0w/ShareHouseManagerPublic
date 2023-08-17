<template>
  <!-- Title -->
  <div
    class="flex flex-col justify-center w-full py-3 text-center bg-teal-400/90 font-montserrat"
    style="height: 10%"
  >
    <h2 class="text-white text-3xl italic tracking-widest">Rooms</h2>
  </div>

  <div v-if="gotRoomSuccess" class="w-full" style="height: 90%">
    <!-- House Tabs -->
    <div class="pt-3 mb-5 flex flex-row justify-around font-montserrat font-semibold">
      <div
        class="px-8 py-2 border-4 rounded-full"
        @click="houseSelect = 'A house'"
        :class="{
          'bg-teal-500 border-emerald-400 text-slate-50': houseSelect === 'A house',
          'bg-white bg-opacity-30 border-emerald-500 text-cyan-900': houseSelect === 'B house'
        }"
      >
        A House
      </div>
      <div
        class="px-8 py-2 border-4 rounded-full"
        @click="houseSelect = 'B house'"
        :class="{
          'bg-purple-600 border-purple-500 text-slate-50': houseSelect === 'B house',
          'bg-white bg-opacity-30 border-purple-600 text-purple-700': houseSelect === 'A house'
        }"
      >
        B House
      </div>
    </div>

    <!-- Room list -->
    <div class="mx-5 overflow-y-auto rounded-2xl" style="height: 70%">
      <div v-if="houseSelect === 'A house'">
        <div v-for="room in listRooms" :key="room.roomNumber" class="">
          <AppRoom
            :roomNumber="room.roomNumber"
            :residentName="room.residentName"
            :residentNameKanji="room.residentNameKanji"
            :houseSelect="houseSelect"
          />
        </div>
      </div>
      <div v-else-if="houseSelect === 'B house'">
        <div v-for="room in listRooms" :key="room.roomNumber" class="">
          <AppRoom
            :roomNumber="room.roomNumber"
            :residentName="room.residentName"
            :residentNameKanji="room.residentNameKanji"
            :houseSelect="houseSelect"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col justify-center w-full" style="height: 90%">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.875s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.875s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.625s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.625s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.375s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.125s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
      <!-- [ldio] generated by https://loading.io/ -->
    </svg>
  </div>
</template>

<script>
import AppRoom from './AppRoom.vue'

import useRoomsStore from '@/stores/rooms'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AppListRooms',
  data() {
    return {
      houseSelect: 'A house',
      gotRoomSuccess: false
    }
  },
  async mounted() {
    // To avoid making a request everytime this component is mounted, we check if the list of rooms is empty. If empty, make a request, otherwise, just use the store
    if (!this.listRooms.A101.roomNumber) {
      const gotRoom = await this.getAllRooms()
      gotRoom === true ? (this.gotRoomSuccess = true) : (this.gotRoomSuccess = false)
    } else {
      this.gotRoomSuccess = true
    }
  },
  methods: {
    ...mapActions(useRoomsStore, ['getAllRooms'])
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms'])
  },
  components: {
    AppRoom
  }
}
</script>
