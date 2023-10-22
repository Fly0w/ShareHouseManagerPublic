<template>
  <!-- TrashBot -->
  <div class="relative flex flex-col w-11/12 items-center justify-center font-montserrat">
    <!-- Confirmation -->
    <div
      v-show="toggleConfirmWeek !== 'none'"
      class="absolute z-10 flex flex-col w-full h-full items-center justify-center mt-4 px-2 py-3 bg-sky-700 border-2 border-sky-400 rounded-xl"
    >
      <p v-if="toggleConfirmWeek === 'skip'" class="text-slate-200 text-center">
        Do you want to <span class="font-bold text-green-300">skip</span> this week ?
      </p>
      <p v-else-if="toggleConfirmWeek === 'back'" class="text-slate-200 text-center">
        Do you want to <span class="font-bold text-red-600">go back</span> to last week ?
      </p>

      <div v-if="!confirmed" class="flex flex-row w-5/6 justify-around text-slate-200">
        <button
          @click="toggleConfirmWeek = 'none'"
          class="mt-5 px-3 py-1 rounded-full border-2 border-slate-300 bg-red-800"
        >
          Cancel
        </button>
        <button
          @click="confirmChangeWeek"
          class="mt-5 px-3 py-1 rounded-full border-2 border-slate-300 bg-green-600"
        >
          Confirm
        </button>
      </div>
      <div v-else-if="confirmed" class="flex flex-row w-4/5 justify-around text-center mt-3">
        <p class="text-yellow-200 text-sm">Week rotation has been changed successfully !</p>
      </div>
    </div>

    <!-- Duos display -->
    <div
      class="relative flex flex-row w-full items-center justify-center mt-4 px-2 py-4 bg-slate-50 bg-opacity-50 border-2 border-sky-700 rounded-xl"
    >
      <button
        @click="toggleConfirmWeek = 'back'"
        class="absolute z-5 -top-2 px-5 border rounded-t-full border-white bg-purple-600 text-white plus"
      >
        - 1 week
      </button>
      <button
        @click="toggleConfirmWeek = 'skip'"
        class="absolute z-5 -bottom-2 px-5 border rounded-b-full border-white bg-blue-500 text-white minus"
      >
        + 1 week
      </button>
      <div class="flex flex-row justify-center items-center">
        <RobotIcon class="h-24 w-full" />
      </div>
      <div class="flex flex-col h-11/12 ml-2">
        <p class="my-1 text-sky-700 opacity-60">
          Last week:
          <span class="font-bold">{{ listRooms[weekDuo?.last?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[weekDuo?.last?.duo2]?.residentName }}</span>
        </p>
        <p class="text-lg text-sky-900">
          This week:
          <span class="font-bold">{{ listRooms[weekDuo?.now?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[weekDuo?.now?.duo2]?.residentName }}</span>
        </p>
        <p class="my-1 text-sky-700 opacity-60">
          Next week:
          <span class="font-bold">{{ listRooms[weekDuo?.next?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[weekDuo?.next?.duo2]?.residentName }}</span>
        </p>
      </div>
    </div>
  </div>

  <!-- Explanation tab -->
  <div v-show="toggleExplanation === true" class="relative w-full">
    <AppGarbageExplanation :toggle="closeTabExp" />
  </div>

  <!-- Timetable -->
  <div class="flex flex-col items-center w-11/12 mt-7">
    <div class="flex flex-row items-center justify-center w-full">
      <p class="w-5/6 text-sky-800 font-bold text-3xl text-center mb-1">Week Schedule</p>
      <!-- Explanation button -->
      <div class="flex justify-center w-1/6">
        <div
          class="flex flex-col items-center justify-center h-10 w-10 border-4 border-sky-700 rounded-full bg-blue-400 text-center active:scale-95"
          @click.prevent="toggleExplanation = !toggleExplanation"
        >
          <p class="relative font-semibold text-2xl text-slate-200">?</p>
        </div>
      </div>
    </div>
    <!-- Days schedule -->
    <div
      class="w-full px-3 py-2 mx-2 border-2 border-sky-400 rounded-3xl bg-slate-50 bg-opacity-30"
    >
      <div class="flex flex-col w-full" v-for="day in daysWeek" :key="day.text">
        <AppGarbageDayWeek :day="day" :today="getDateToday" />
      </div>
    </div>
  </div>
</template>

<script>
import AppGarbageDayWeek from './AppGarbageDayWeek.vue'
import AppGarbageExplanation from './AppGarbageExplanation.vue'
import RobotIcon from './icons/RobotIcon.vue'

import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AppChoresGarbage',
  data() {
    return {
      toggleExplanation: false,
      toggleConfirmWeek: 'none',
      confirmed: false
    }
  },
  methods: {
    ...mapActions(useChoresStore, ['skipWeek', 'backWeek']),
    closeTabExp() {
      this.toggleExplanation = false
    },
    confirmChangeWeek() {
      this.confirmed = true
      if (this.toggleConfirmWeek === 'skip') {
        this.skipWeek()
      } else if (this.toggleConfirmWeek === 'back') {
        this.backWeek()
      }
      setTimeout(() => {
        this.toggleConfirmWeek = 'none'
        this.confirmed = false
      }, 2000)
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useChoresStore, ['weekDuo', 'getDateToday'])
  },
  components: { AppGarbageDayWeek, AppGarbageExplanation, RobotIcon },
  props: ['daysWeek']
}
</script>
