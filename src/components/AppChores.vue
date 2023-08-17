<template>
  <div class="w-full h-full">
    <!-- Garbage next notification -->
    <AutoScrollText
      class="flex flex-col justify-center w-full mb-3 bg-white bg-opacity-80 text-teal-700 text-center text-lg font-montserrat font-bold"
      style="height: 9%"
    >
      <template v-slot:content>
        <div class="h-full flex flex-row justify-between w-full items-center">
          <p class="">Take out</p>
          <div class="flex flex-row h-full">
            <BurnableIcon
              v-if="daysWeek[getDateToday].nextAction.type.includes('Burn')"
              height="100%"
            />
            <CanIcon v-if="daysWeek[getDateToday].nextAction.type.includes('Can')" height="100%" />
            <CardboardIcon
              v-if="daysWeek[getDateToday].nextAction.type.includes('Cardboard')"
              height="100%"
            />
            <GlassIcon
              v-if="daysWeek[getDateToday].nextAction.type.includes('Glass')"
              height="100%"
            />
            <PETIcon v-if="daysWeek[getDateToday].nextAction.type.includes('PET')" height="100%" />
            <PlasticIcon
              v-if="daysWeek[getDateToday].nextAction.type.includes('Plastic')"
              height="100%"
            />
          </div>
          <p class="">before {{ daysWeek[getDateToday].nextAction.day }}</p>
        </div>
      </template>
    </AutoScrollText>

    <!-- Garbage/Groceries Tabs -->
    <div
      class="flex flex-row mx-5 justify-center text-center text-lg font-montserrat font-bold border-2 border-sky-800 rounded-full"
      style="height: 7%"
    >
      <div
        class="flex flex-col justify-center px-8 py-2 w-3/6 rounded-l-full"
        @click="choreTab = 'Garbage'"
        :class="{
          'bg-sky-500 text-slate-50': choreTab === 'Garbage',
          'bg-slate-100 border-emerald-500 text-cyan-900': choreTab !== 'Garbage'
        }"
      >
        Garbage
      </div>
      <div
        class="flex flex-col justify-center px-8 py-2 w-3/6 rounded-r-full"
        @click="choreTab = 'Groceries'"
        :class="{
          'bg-emerald-500 text-slate-50': choreTab === 'Groceries',
          'bg-slate-100 text-emerald-900': choreTab !== 'Groceries'
        }"
      >
        Groceries
      </div>
    </div>

    <!-- Display tab -->
    <div class="flex flex-col items-center overflow-y-auto" style="height: 80%">
      <AppChoresGarbage v-if="choreTab === 'Garbage'" :daysWeek="daysWeek" />
      <AppChoresGroceries v-if="choreTab === 'Groceries'" />
    </div>
  </div>
</template>

<script>
import AppChoresGarbage from './AppChoresGarbage.vue'
import AppChoresGroceries from './AppChoresGroceries.vue'

import AutoScrollText from './utility/AutoScrollText.vue'

import BurnableIcon from './icons/garbage/BurnableIcon.vue'
import CanIcon from './icons/garbage/CanIcon.vue'
import CardboardIcon from './icons/garbage/CardboardIcon.vue'
import GlassIcon from './icons/garbage/GlassIcon.vue'
import PETIcon from './icons/garbage/PETIcon.vue'
import PlasticIcon from './icons/garbage/PlasticIcon.vue'

export default {
  name: 'AppChores',
  data() {
    return {
      choreTab: 'Garbage',
      daysWeek: [
        {
          text: 'Sun',
          id: 0,
          icon: [],
          nextAction: { day: 'Tomorrow night', type: ['Burn'] }
        },
        {
          text: 'Mon',
          id: 1,
          icon: ['Throw'],
          nextAction: { day: 'Tonight', type: ['Burn'] }
        },
        {
          text: 'Tue',
          id: 2,
          icon: ['Burn'],
          nextAction: {
            day: 'Tomorrow night',
            type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw']
          }
        },
        {
          text: 'Wed',
          id: 3,
          icon: ['Throw'],
          nextAction: {
            day: 'Tonight',
            type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw']
          }
        },
        {
          text: 'Thu',
          id: 4,
          icon: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw'],
          nextAction: { day: 'Tonight', type: ['Burn'] }
        },
        {
          text: 'Fri',
          id: 5,
          icon: ['Burn'],
          nextAction: { day: 'Monday night', type: ['Burn'] }
        },
        {
          text: 'Sat',
          id: 6,
          icon: [],
          nextAction: { day: 'Monday night', type: ['Burn'] }
        }
      ]
    }
  },
  computed: {
    getDateToday() {
      const today = new Date()
      const day = today.getDay()
      return day + 0
    }
  },
  components: {
    AppChoresGarbage,
    AppChoresGroceries,
    BurnableIcon,
    CanIcon,
    CardboardIcon,
    GlassIcon,
    PETIcon,
    PlasticIcon,
    AutoScrollText
  }
}
</script>
