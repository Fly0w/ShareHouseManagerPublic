<template>
  <!-- Title -->
  <div
    class="flex flex-col justify-center h-16 w-full py-3 text-center bg-teal-400/90 font-montserrat"
  >
    <h2 class="text-white text-3xl italic tracking-widest">Rooms</h2>
  </div>

  <div class="w-full" style="height: calc(100% - 4rem)">
    <!-- House Tabs -->
    <div class="pt-3 mb-5 flex flex-row justify-around font-montserrat font-semibold">
      <div
        class="px-8 py-2 border-4 rounded-full text-center"
        @click="houseSelect = 'A house'"
        :class="{
          'bg-teal-500 border-emerald-400 text-slate-50': houseSelect === 'A house',
          'bg-white bg-opacity-30 border-emerald-500 text-cyan-900': houseSelect === 'B house'
        }"
      >
        A House
      </div>
      <div
        class="px-8 py-2 border-4 rounded-full text-center"
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
    <div class="mx-5 overflow-y-auto rounded-2xl" style="height: 80%">
      <div v-if="houseSelect === 'A house'">
        <div v-for="(room, key) in listRooms" :key="room.roomNumber" class="">
          <AppRoom
            :roomNumberText="room.roomNumber"
            :roomNumberData="key"
            :residentName="room.residentName"
            :residentNameKanji="room.residentNameKanji"
            :roomEmoji="room.roomEmoji"
            :houseSelect="houseSelect"
          />
        </div>
      </div>
      <div v-else-if="houseSelect === 'B house'">
        <div v-for="(room, key) in listRooms" :key="room.roomNumber" class="">
          <AppRoom
            :roomNumberText="room.roomNumber"
            :roomNumberData="key"
            :residentName="room.residentName"
            :residentNameKanji="room.residentNameKanji"
            :roomEmoji="room.roomEmoji"
            :houseSelect="houseSelect"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRoom from './AppRoom.vue'

import useRoomsStore from '@/stores/rooms'
import { mapState } from 'pinia'

export default {
  name: 'AppListRooms',
  data() {
    return {
      houseSelect: 'A house'
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms'])
  },
  components: {
    AppRoom
  }
}
</script>
