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
  >
    <AppGroceryItemButton v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script>
import useRoomsStore from '@/stores/rooms'
import useChoresStore from '@/stores/chores'
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
    closeTabExp() {
      this.toggleExplanation = false
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useChoresStore, ['monthDuo'])
  },
  components: { RobotIcon, AppGroceryItemButton, AppGroceriesExplanation }
}
</script>
