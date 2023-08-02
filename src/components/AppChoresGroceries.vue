<template>
  <!-- TrashBot -->
  <div
    class="flex flex-row h-28 items-center justify-center mt-4 px-2 bg-slate-50 bg-opacity-50 border-2 border-emerald-500 rounded-xl font-montserrat"
  >
    <div class="flex flex-col mr-2">
      <p class="my-1 text-emerald-700 opacity-60">
        Last month:
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.lastMonthID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.lastMonthID][1]].residentName
        }}</span>
      </p>
      <p class="text-lg text-emerald-800">
        This month:
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.thisMonthID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.thisMonthID][1]].residentName
        }}</span>
      </p>
      <p class="my-1 text-emerald-700 opacity-60">
        Next month:
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.nextMonthID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGroceries[monthIDs.nextMonthID][1]].residentName
        }}</span>
      </p>
    </div>
    <RobotIcon height="70%" />
  </div>

  <!-- Explanation button -->
  <div class="flex justify-end pr-8 mt-2 w-full">
    <div
      class="h-10 w-10 border-2 border-slate-400 rounded-full bg-slate-300 text-center active:scale-95"
      @click.prevent="toggleExplanation = !toggleExplanation"
    >
      <p class="relative top-0.5 font-montserrat font-bold text-3xl text-slate-700">?</p>
    </div>
  </div>

  <!-- Explanation tab -->
  <div v-show="toggleExplanation === true" class="relative w-full">
    <AppGroceriesExplanation :toggle="closeTabExp" />
  </div>

  <!-- Buttons -->
  <div
    class="flex flex-row flex-wrap justify-around w-5/6 p-2 rounded-2xl bg-sky-100 bg-opacity-60 border-2 border-teal-500 overflow-y-auto"
    :class="{
      'h-52': isScreenHeightLessThan670(),
      'h-96': isScreenHeightGreaterThanOrEqualTo670()
    }"
  >
    <AppGroceryItemButton v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import { mapState } from 'pinia'

import RobotIcon from './icons/RobotIcon.vue'
import AppGroceryItemButton from './AppGroceryItemButton.vue'
import AppGroceriesExplanation from './AppGroceriesExplanation.vue'

export default {
  name: 'AppChoresGroceries',
  data() {
    return {
      toggleExplanation: false,
      categories: [
        'Toilet Paper',
        'Dish Soap',
        'Hand Soap',
        'Plastic Bags',
        'Plastic Wrap',
        'Tin Foil',
        'Kitchen Paper',
        'Sponge',
        'Cleaning Product'
      ]
    }
  },
  methods: {
    isScreenHeightLessThan670() {
      return window.innerHeight < 670
    },
    isScreenHeightGreaterThanOrEqualTo670() {
      return window.innerHeight >= 670
    },
    closeTabExp() {
      this.toggleExplanation = false
    }
  },
  computed: {
    getDateToday() {
      const today = new Date()
      const day = today.getDay()
      return day
    },
    monthIDs() {
      const now = new Date()
      const startDate = new Date('2023-01-01')

      const nowDateMonth = now.getMonth()
      const nowDateYear = now.getYear()

      const startDateMonth = startDate.getMonth()
      const startDateYear = startDate.getYear()

      const diff = (nowDateYear - startDateYear) * 12 + (nowDateMonth - startDateMonth)

      //Definition of the key for the array
      let thisMonthID = diff % 9
      let nextMonthID = thisMonthID + 1 //For next month key
      let lastMonthID = thisMonthID - 1 //For last month key
      //The key can't be more than 8 or less than 0
      if (thisMonthID === 8) {
        nextMonthID = 0
        lastMonthID = 7
      } else if (thisMonthID === 0) {
        nextMonthID = 1
        lastMonthID = 8
      }
      return { lastMonthID, thisMonthID, nextMonthID }
    },
    ...mapState(useRoomsStore, ['listRooms', 'duoRoomsGroceries'])
  },
  components: { RobotIcon, AppGroceryItemButton, AppGroceriesExplanation }
}
</script>
