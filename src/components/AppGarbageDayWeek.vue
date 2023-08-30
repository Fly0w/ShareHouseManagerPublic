<template>
  <div
    class="flex flex-row justify-center w-full h-14 mt-3 rounded-full border-4"
    :class="{
      ' border-red-800': day.id === today,
      ' border-sky-700': day.id !== today
    }"
  >
    <!-- Day -->
    <div
      class="w-1/6 h-full rounded-l-full text-slate-50 font-montserrat font-bold text-md"
      :class="{
        'bg-red-500 ': day.id === today,
        'bg-sky-400 ': day.id !== today
      }"
    >
      <p class="relative text-center top-3">{{ day.text }}</p>
    </div>

    <!-- Icons -->
    <div
      class="flex flex-row justify-around w-4/6 h-full py-1 px-3 bg-opacity-90"
      :class="{
        'bg-red-50 ': day.id === today,
        'bg-sky-50': day.id !== today
      }"
    >
      <BurnableIcon v-if="day.icon.includes('Burn')" height="100%" />
      <CanIcon v-if="day.icon.includes('Can')" height="100%" />
      <CardboardIcon v-if="day.icon.includes('Cardboard')" height="100%" />
      <GlassIcon v-if="day.icon.includes('Glass')" height="100%" />
      <PETIcon v-if="day.icon.includes('PET')" height="100%" />
      <PlasticIcon v-if="day.icon.includes('Plastic')" height="100%" />
      <div
        v-if="day.id === 0"
        class="flex flex-row justify-center items-center align-middle tracking-widest"
      >
        <p
          class="font-montserrat capitalize italic font-bold text-center text-xl text-sky-900"
          :class="{ 'text-red-950': today === 0 }"
        >
          TEAM CHANGE !
        </p>
      </div>
    </div>
    <!-- Throw away icon -->
    <div
      class="flex justify-center items-center h-full w-1/6 px-2 rounded-r-full"
      :class="{
        'bg-red-400 ': day.id === today,
        'bg-sky-300 0': day.id !== today
      }"
    >
      <ThrowAwayIcon v-if="day.icon.includes('Throw')" height="80%" />
    </div>
  </div>
</template>

<script>
import BurnableIcon from './icons/garbage/BurnableIcon.vue'
import CanIcon from './icons/garbage/CanIcon.vue'
import CardboardIcon from './icons/garbage/CardboardIcon.vue'
import GlassIcon from './icons/garbage/GlassIcon.vue'
import PETIcon from './icons/garbage/PETIcon.vue'
import PlasticIcon from './icons/garbage/PlasticIcon.vue'
import ThrowAwayIcon from './icons/garbage/ThrowAwayIcon.vue'

export default {
  name: 'AppGarbageDayWeek',
  props: ['day', 'today'],
  components: {
    BurnableIcon,
    CanIcon,
    CardboardIcon,
    GlassIcon,
    PETIcon,
    PlasticIcon,
    ThrowAwayIcon
  }
}
</script>
