<template>
  <!-- TrashBot -->
  <div
    class="flex flex-row h-28 items-center justify-center mt-4 px-2 bg-slate-50 bg-opacity-50 border-2 border-emerald-500 rounded-xl font-montserrat"
  >
    <div class="flex flex-col mr-2">
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
    <RobotIcon height="70%" />
  </div>

  <!-- Explanation tab -->
  <div v-show="toggleExplanation === true" class="relative w-full">
    <AppGroceriesExplanation :toggle="closeTabExp" />
  </div>

  <!-- Tabs -->
  <div class="flex flex-row w-5/6 text-center text-lg mt-8 relative">
    <!-- Explanation button -->
    <div class="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
      <div
        class="h-11 w-11 border-2 border-slate-400 rounded-full bg-indigo-200 text-center active:scale-95 pointer-events-auto"
        @click.prevent="toggleExplanation = !toggleExplanation"
      >
        <p class="relative top-1 font-montserrat font-bold text-3xl text-violet-700">?</p>
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
      class="flex flex-col items-start flex-wrap w-5/6 h-full p-2 rounded-b-2xl bg-sky-200/60 border-x-2 border-b-2 border-sky-500 overflow-y-auto"
    >
      <div v-if="groceries.needs[0]" class="h-full w-full">
        <NeedsCardComponent v-for="need in groceries.needs" :key="need.item" :needInfo="need" />
      </div>
      <div v-else class="flex flex-col justify-center items-center h-full w-full p-3">
        <p class="text-3xl text-center text-sky-700">Nothing is needed at the moment !</p>
        <p class="text-5xl text-center text-emerald-700 font-semibold mt-8">✓</p>
      </div>
    </div>
    <div
      v-if="tab === 'items'"
      class="flex flex-row flex-wrap justify-around w-5/6 h-full p-2 rounded-b-2xl bg-teal-100/60 border-x-2 border-b-2 border-teal-500 overflow-y-auto"
    >
      <AppGroceryItemButton v-for="category in categories" :key="category" :category="category" />
    </div>
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
import { mapState } from 'pinia'

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
    closeTabExp() {
      this.toggleExplanation = false
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useChoresStore, ['monthDuo', 'groceries'])
  },
  components: { RobotIcon, AppGroceryItemButton, AppGroceriesExplanation, NeedsCardComponent }
}
</script>
