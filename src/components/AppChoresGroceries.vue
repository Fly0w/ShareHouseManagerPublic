<template>
  <!-- TrashBot -->
  <div class="relative flex flex-col w-11/12 items-center justify-center font-montserrat">
    <!-- Confirmation -->
    <div
      v-show="toggleConfirmMonth !== 'none'"
      class="absolute z-10 flex flex-col w-full h-full items-center justify-center mt-4 px-2 py-3 bg-teal-600 border-2 border-teal-400 rounded-xl"
    >
      <p v-if="toggleConfirmMonth === 'skip'" class="text-slate-200 text-center">
        Do you want to <span class="font-bold text-green-300">skip</span> this month ?
      </p>
      <p v-else-if="toggleConfirmMonth === 'back'" class="text-slate-200 text-center">
        Do you want to <span class="font-bold text-red-600">go back</span> to last month ?
      </p>

      <div v-if="!confirmed" class="flex flex-row w-5/6 justify-around text-slate-200">
        <button
          @click="toggleConfirmMonth = 'none'"
          class="mt-5 px-3 py-1 rounded-full border-2 border-slate-300 bg-red-800"
        >
          Cancel
        </button>
        <button
          @click="confirmChangeMonth"
          class="mt-5 px-3 py-1 rounded-full border-2 border-slate-300 bg-green-600"
        >
          Confirm
        </button>
      </div>
      <div v-else-if="confirmed" class="flex flex-row w-4/5 justify-around text-center mt-3">
        <p class="text-yellow-200 text-sm">Month rotation has been changed successfully !</p>
      </div>
    </div>

    <!-- Duos display -->
    <div
      class="relative flex flex-row w-full items-center justify-center mt-4 px-2 py-4 bg-slate-50 bg-opacity-50 border-2 border-emerald-500 rounded-xl"
    >
      <button
        @click="toggleConfirmMonth = 'back'"
        class="absolute z-5 -top-2 px-5 border rounded-t-full border-white bg-teal-700 text-white minus"
      >
        - 1 month
      </button>

      <button
        @click="toggleConfirmMonth = 'skip'"
        class="absolute z-5 -bottom-2 px-5 border rounded-b-full border-white bg-sky-600 text-white plus"
      >
        + 1 month
      </button>

      <div class="flex flex-col h-11/12 mr-2">
        <p class="my-1 text-emerald-700 opacity-60">
          Last month:
          <span class="font-bold">{{ listRooms[monthDuo?.last?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[monthDuo?.last?.duo2]?.residentName }}</span>
        </p>
        <p class="text-lg text-emerald-800">
          This month:
          <span class="font-bold">{{ listRooms[monthDuo?.now?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[monthDuo?.now?.duo2]?.residentName }}</span>
        </p>
        <p class="my-1 text-emerald-700 opacity-60">
          Next month:
          <span class="font-bold">{{ listRooms[monthDuo?.next?.duo1]?.residentName }}</span>
          &
          <span class="font-bold">{{ listRooms[monthDuo?.next?.duo2]?.residentName }}</span>
        </p>
      </div>

      <div class="flex flex-row justify-center items-center">
        <RobotIcon class="h-24 w-full" />
      </div>
    </div>
  </div>

  <!-- Explanation tab -->
  <div v-show="toggleExplanation === true" class="relative w-full">
    <AppGroceriesExplanation :toggle="closeTabExp" />
  </div>

  <!-- Tabs -->
  <div class="flex flex-row w-11/12 text-center text-lg mt-8 relative">
    <!-- Explanation button -->
    <div class="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
      <div
        class="flex flex-col justify-center items-center h-11 w-11 border-2 border-teal-400 rounded-full bg-teal-500 text-center active:scale-95 pointer-events-auto"
        @click.prevent="toggleExplanation = !toggleExplanation"
      >
        <p class="relative font-montserrat font-semibold text-3xl text-slate-200">?</p>
      </div>
    </div>

    <div
      @click="tab = 'needs'"
      class="w-3/6 rounded-t-xl bg-sky-200/60 py-1.5 border-l-2 border-t-2"
      :class="{
        'border-r-2 border-sky-500 font-semibold text-sky-700': tab === 'needs',
        'border-b-2 border-b-teal-500 border-x-gray-400 border-t-gray-400': tab === 'items'
      }"
    >
      Needs
    </div>

    <div
      @click="tab = 'items'"
      class="w-3/6 rounded-t-xl bg-teal-100/60 py-1.5 border-r-2 border-t-2"
      :class="{
        'border-l-2 border-teal-500 font-semibold text-teal-700': tab === 'items',
        'border-b-2 border-b-sky-500 border-x-gray-400 border-t-gray-400': tab === 'needs'
      }"
    >
      Orders
    </div>
  </div>

  <div class="flex flex-col items-center w-full h-3/5">
    <div
      v-if="tab === 'needs'"
      class="flex flex-col items-end w-11/12 p-2 rounded-b-2xl bg-sky-200/60 border-x-2 border-b-2 border-sky-500"
    >
      <div v-if="groceries.needs[0]" class="h-full w-full">
        <NeedsCardComponent v-for="need in groceries.needs" :key="need.item" :needInfo="need" />
      </div>
      <div v-else class="flex flex-col justify-center items-center w-full p-3">
        <p class="text-3xl text-center text-sky-700">Nothing is needed at the moment !</p>
        <p class="text-5xl text-center text-emerald-700 font-semibold mt-2">✓</p>
      </div>
    </div>
    <div
      v-if="tab === 'items'"
      class="flex flex-row flex-wrap justify-around w-11/12 p-2 rounded-b-2xl bg-teal-100/60 border-x-2 border-b-2 border-teal-500"
    >
      <AppGroceryItemButton v-for="category in categories" :key="category" :category="category" />
    </div>
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
import { mapState, mapActions } from 'pinia'

import RobotIcon from './icons/RobotIcon.vue'
import AppGroceryItemButton from './AppGroceryItemButton.vue'
import AppGroceriesExplanation from './AppGroceriesExplanation.vue'
import NeedsCardComponent from './NeedsCardComponent.vue'

export default {
  name: 'AppChoresGroceries',
  data() {
    return {
      tab: 'needs',
      toggleExplanation: false,
      toggleConfirmMonth: 'none',
      confirmed: false,
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
    ...mapActions(useChoresStore, ['skipMonth', 'backMonth']),
    closeTabExp() {
      this.toggleExplanation = false
    },
    confirmChangeMonth() {
      this.confirmed = true
      if (this.toggleConfirmMonth === 'skip') {
        this.skipMonth()
      } else if (this.toggleConfirmMonth === 'back') {
        this.backMonth()
      }
      setTimeout(() => {
        this.toggleConfirmMonth = 'none'
        this.confirmed = false
      }, 2000)
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useChoresStore, ['monthDuo', 'groceries'])
  },
  components: { RobotIcon, AppGroceryItemButton, AppGroceriesExplanation, NeedsCardComponent }
}
</script>
