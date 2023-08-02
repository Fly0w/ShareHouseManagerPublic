<template>
  <!-- TrashBot -->
  <div
    class="flex flex-row h-28 items-center justify-center mt-4 px-2 bg-slate-50 bg-opacity-50 border-2 border-sky-700 rounded-xl font-montserrat"
  >
    <RobotIcon height="70%" />
    <div class="flex flex-col ml-2">
      <p class="my-1 text-sky-700 opacity-60">
        Last week:
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.lastWeekID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.lastWeekID][1]].residentName
        }}</span>
      </p>
      <p class="text-lg text-sky-900">
        This week:
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.thisWeekID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.thisWeekID][1]].residentName
        }}</span>
      </p>
      <p class="my-1 text-sky-700 opacity-60">
        Next week:
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.nextWeekID][0]].residentName
        }}</span>
        &
        <span class="font-bold">{{
          listRooms[duoRoomsGarbage[weekIDs.nextWeekID][1]].residentName
        }}</span>
      </p>
    </div>
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
    <AppGarbageExplanation :toggle="closeTabExp" />
  </div>

  <!-- Timetable -->
  <div
    class="flex flex-col items-center px-3 py-2 mx-2 border-2 border-sky-400 rounded-3xl bg-slate-50 bg-opacity-30 overflow-y-auto"
    :class="{
      'h-52': isScreenHeightLessThan670(),
      'h-96': isScreenHeightGreaterThanOrEqualTo670()
    }"
    style="width: 95%"
  >
    <div class="flex flex-col w-full" v-for="day in daysWeek" :key="day.text">
      <AppGarbageDayWeek :day="day" :today="getDateToday" />
    </div>
  </div>
</template>

<script>
import AppGarbageDayWeek from './AppGarbageDayWeek.vue'
import AppGarbageExplanation from './AppGarbageExplanation.vue'
import RobotIcon from './icons/RobotIcon.vue'

import useRoomsStore from '@/stores/rooms'
import { mapState } from 'pinia'

export default {
  name: 'AppChoresGarbage',
  data() {
    return {
      toggleExplanation: false
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
    weekIDs() {
      const now = new Date()
      const startDateMs = Date.parse('January 1, 2023')
      const nowDateMs = now.getTime()
      // const nowDateMs = Date.parse("January 8, 2023");
      let difDateMs = nowDateMs - startDateMs //Number of ms between January 1st 2023 and now
      const weekMs = 1000 * 60 * 60 * 24 * 7
      const difDateWeek = Math.floor(difDateMs / weekMs) //Number of weeks since Sunday 1st of January 2023

      //Definition of the key for the array
      let offset = 1
      let thisWeekID = (difDateWeek % 9) + offset

      let nextWeekID = thisWeekID + 1 //For next week key
      let lastWeekID = thisWeekID - 1 //For last week key

      //The key can't be more than 8 or less than 0
      if (thisWeekID >= 9) {
        thisWeekID = 0
      }

      if (thisWeekID === 8) {
        nextWeekID = 0
        lastWeekID = 7
      } else if (thisWeekID === 0) {
        nextWeekID = 1
        lastWeekID = 8
      }
      return { lastWeekID, thisWeekID, nextWeekID }
    },
    ...mapState(useRoomsStore, ['listRooms', 'duoRoomsGarbage'])
  },
  components: { AppGarbageDayWeek, AppGarbageExplanation, RobotIcon },
  props: ['daysWeek']
}
</script>
