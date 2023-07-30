<template>
  <div class="flex flex-row justify-center w-full h-12 mt-3 rounded-full">
    <!-- Day -->
    <div
      class="w-1/6 border-y-2 border-l-2 rounded-l-full text-slate-50 font-montserrat font-bold text-md"
      :class="{
        'bg-red-500 border-red-800': day.includes(today),
        'bg-teal-500 border-sky-400': !day.includes(today)
      }"
    >
      <p class="relative text-center top-2.5">{{ day[0] }}</p>
    </div>
    <!-- Icons -->
    <div
      class="flex flex-row justify-around w-4/6 py-1 px-3 bg-opacity-90 border-y-2"
      :class="{
        'bg-red-50 border-red-800': day.includes(today),
        'bg-slate-50 border-sky-400': !day.includes(today)
      }"
    >
      <BurnableIcon v-if="day.includes('Burn')" height="100%" />
      <CanIcon v-if="day.includes('Can')" height="100%" />
      <CardboardIcon v-if="day.includes('Cardboard')" height="100%" />
      <GlassIcon v-if="day.includes('Glass')" height="100%" />
      <PETIcon v-if="day.includes('PET')" height="100%" />
      <PlasticIcon v-if="day.includes('Plastic')" height="100%" />
      <div
        v-if="day.includes(0)"
        class="flex flex-row justify-center items-center align-middle tracking-widest"
      >
        <p
          class="font-montserrat capitalize italic font-bold text-center text-2xl text-sky-900"
          :class="{ 'text-red-950': today === 0 }"
        >
          Team change !
        </p>
      </div>
    </div>
    <!-- Throw away icon -->
    <div
      class="flex justify-center items-center h-12 w-1/6 px-2 border-y-2 border-r-2 rounded-r-full"
      :class="{
        'bg-red-400 border-red-800': day.includes(today),
        'bg-sky-300 border-sky-400': !day.includes(today)
      }"
    >
      <ThrowAwayIcon v-if="day.includes('Throw')" height="80%" />
    </div>
  </div>
</template>

<script>
import BurnableIcon from './icons/BurnableIcon.vue'
import CanIcon from './icons/CanIcon.vue'
import CardboardIcon from './icons/CardboardIcon.vue'
import GlassIcon from './icons/GlassIcon.vue'
import PETIcon from './icons/PETIcon.vue'
import PlasticIcon from './icons/PlasticIcon.vue'
import ThrowAwayIcon from './icons/ThrowAwayIcon.vue'

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
