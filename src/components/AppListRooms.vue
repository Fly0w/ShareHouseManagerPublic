<template>
  <!-- House Tabs -->
  <div class="mb-5 flex flex-row justify-around font-montserrat font-semibold">
    <div
      class="px-8 py-2 border-2 rounded-full"
      @click="houseSelect = 'A house'"
      :class="{
        'bg-teal-500 border-cyan-300 text-slate-50': houseSelect === 'A house',
        'bg-white opacity-60 border-emerald-500 text-cyan-900': houseSelect === 'B house'
      }"
    >
      A House
    </div>
    <div
      class="px-8 py-2 border-2 rounded-full"
      @click="houseSelect = 'B house'"
      :class="{
        'bg-purple-600 border-fuchsia-400 text-slate-50': houseSelect === 'B house',
        'bg-white opacity-60 border-purple-500 text-fuchsia-900': houseSelect === 'A house'
      }"
    >
      B House
    </div>
  </div>

  <!-- Room list -->
  <div class="mx-5 overflow-y-auto rounded-2xl" style="height: 80%">
    <div v-if="houseSelect === 'A house'" class="">
      <div v-for="room in rooms.A" :key="room.roomNumber" class="flex justify-center">
        <AppRoom
          :roomNumber="room.roomNumber"
          :residentName="room.residentName"
          :residentNameKanji="room.residentNameKanji"
          :houseSelect="houseSelect"
        />
      </div>
    </div>
    <div v-else-if="houseSelect === 'B house'">
      <div v-for="room in rooms.B" :key="room.roomNumber" class="">
        <AppRoom
          :roomNumber="room.roomNumber"
          :residentName="room.residentName"
          :residentNameKanji="room.residentNameKanji"
          :houseSelect="houseSelect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppRoom from './AppRoom.vue'

export default {
  name: 'AppListRooms',
  data() {
    return {
      houseSelect: 'A house',
      rooms: {
        A: [
          {
            roomNumber: 'A101',
            residentName: 'Greg',
            residentNameKanji: '和道'
          },
          {
            roomNumber: 'A102-1',
            residentName: 'Yusei',
            residentNameKanji: '勇成'
          },
          {
            roomNumber: 'A102-2',
            residentName: 'Florian',
            residentNameKanji: 'フロリアン'
          },
          {
            roomNumber: 'A201',
            residentName: 'Yuta',
            residentNameKanji: '優太'
          },
          {
            roomNumber: 'A202',
            residentName: 'Kai',
            residentNameKanji: '海舟'
          },
          {
            roomNumber: 'A203',
            residentName: 'Maya',
            residentNameKanji: 'マヤ'
          },
          {
            roomNumber: 'A204',
            residentName: 'Siyun',
            residentNameKanji: 'シユン'
          },
          {
            roomNumber: 'A205',
            residentName: 'Chie',
            residentNameKanji: ''
          },
          {
            roomNumber: 'A206-1',
            residentName: 'Mizuki',
            residentNameKanji: 'ミズキ'
          },
          {
            roomNumber: 'A206-2',
            residentName: 'Jessica',
            residentNameKanji: 'ジェシカ'
          }
        ],
        B: [
          {
            roomNumber: 'B101',
            residentName: 'Hiro',
            residentNameKanji: '大和'
          },
          {
            roomNumber: 'B102',
            residentName: 'Rodrigo',
            residentNameKanji: 'ロド'
          },
          {
            roomNumber: 'B103',
            residentName: 'Ricky',
            residentNameKanji: 'リッキー'
          },
          {
            roomNumber: 'B104',
            residentName: '???',
            residentNameKanji: '???'
          },
          {
            roomNumber: 'B201',
            residentName: 'Hanna',
            residentNameKanji: 'ハンナ'
          },
          {
            roomNumber: 'B202',
            residentName: 'Marina',
            residentNameKanji: 'まりな'
          },
          {
            roomNumber: 'B203"',
            residentName: 'Astrid',
            residentNameKanji: 'アスター'
          },
          {
            roomNumber: 'B204',
            residentName: 'Haruki',
            residentNameKanji: '春貴'
          }
        ]
      }
    }
  },
  methods: {},
  components: {
    AppRoom
  }
}
</script>
