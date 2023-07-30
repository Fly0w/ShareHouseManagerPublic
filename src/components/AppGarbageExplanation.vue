<template>
  <div
    class="flex flex-col w-5/6 h-fit absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-90 text-lg text-emerald-950 font-montserrat font-semibold text-center"
    @click.prevent="toggle"
  >
    <div class="flex flex-row w-full h-full">
      <!-- Left column -->
      <div class="flex flex-col justify-around items-start w-3/6 px-1">
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <CanIcon class="w-1/4" height="100%" />
          <p class="w-3/4">Can</p>
        </div>
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <BurnableIcon class="w-1/4" height="100%" />
          <p class="w-3/4">Burnable</p>
        </div>
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <CardboardIcon class="w-1/4" height="100%" />
          <p class="w-3/4">Cardboard</p>
        </div>
      </div>
      <!-- Right Column -->
      <div class="flex flex-col justify-around items-start w-3/6 px-1">
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <GlassIcon class="w-1/4" height="100%" />
          <p class="w-3/4">Glass</p>
        </div>
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <PETIcon class="w-1/4" height="100%" />
          <p class="w-3/4">PET</p>
        </div>
        <div class="flex flex-row justify-around items-center w-full h-1/4">
          <PlasticIcon class="w-1/4" height="100%" />
          <p class="w-3/4">Plastic</p>
        </div>
      </div>
    </div>
    <!-- Bottom line -->
    <div class="w-full h-full px-7">
      <div class="flex flex-row justify-around items-center h-full">
        <ThrowAwayIcon class="w-1/6" height="100%" />
        <p class="w-5/6">Take the garbage out</p>
      </div>
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
  name: 'AppGarbageExplanation',
  components: {
    BurnableIcon,
    CanIcon,
    CardboardIcon,
    GlassIcon,
    PETIcon,
    PlasticIcon,
    ThrowAwayIcon
  },
  props: { toggle: Function }
}
</script>
