<template>
  <div class="w-full h-full">
    <!-- Garbage next notification -->
    <AutoScrollText
      class="flex flex-col justify-center h-12 w-full mb-3 bg-white bg-opacity-80 text-teal-700 text-center text-lg font-montserrat font-bold"
    >
      <template v-slot:content>
        <div class="h-full flex flex-row justify-between w-full items-center">
          <p class="">Take out</p>
          <div v-if="garbage" class="flex flex-row h-full">
            <BurnableIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('Burn')"
              height="100%"
            />
            <CanIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('Can')"
              height="100%"
            />
            <CardboardIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('Cardboard')"
              height="100%"
            />
            <GlassIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('Glass')"
              height="100%"
            />
            <PETIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('PET')"
              height="100%"
            />
            <PlasticIcon
              v-if="garbage.daysWeek[getDateToday].nextAction.type.includes('Plastic')"
              height="100%"
            />
          </div>
          <p class="">before {{ garbage.daysWeek[getDateToday].nextAction.day }}</p>
        </div>
      </template>
    </AutoScrollText>

    <!-- Garbage/Groceries Tabs -->
    <div
      class="flex flex-row mx-5 h-11 justify-center text-center text-lg font-montserrat font-bold border-2 border-sky-800 rounded-full"
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
      <AppChoresGarbage v-if="choreTab === 'Garbage'" :daysWeek="garbage.daysWeek" />
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

import useChoresStore from '@/stores/chores'
import { mapState } from 'pinia'

export default {
  name: 'AppChores',
  data() {
    return {
      choreTab: 'Garbage'
    }
  },
  computed: {
    ...mapState(useChoresStore, ['garbage', 'groceries']),
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

<style>
@keyframes shake-up {
  0% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes shake-down {
  0% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0px);
  }
}

.minus {
  animation: shake-up 4s ease-in-out infinite;
}

.plus {
  animation: shake-down 4s ease-in-out infinite;
}
</style>
