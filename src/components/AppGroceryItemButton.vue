<template>
  <div
    class="relative flex flex-col items-center justify-center w-2/5 h-32 my-2 p-1.5 border-4 border-emerald-800 rounded-2xl bg-teal-400 font-montserrat font-bold text-slate-50 text-center shadow-lg shadow-cyan-500"
    @click.prevent="triggerConfirm = 'confirm'"
  >
    <TinFoilIcon v-if="category === 'Tin Foil'" class="" />
    <PlasticBagsIcon v-if="category === 'Plastic Bags'" class="" />
    <DishSoapIcon v-if="category === 'Dish Soap'" class="" />
    <PlasticWrapIcon v-if="category === 'Plastic Wrap'" class="" />
    <ToiletPaperIcon v-if="category === 'Toilet Paper'" class="" />
    <SoapIcon v-if="category === 'Hand Soap'" class="" />
    <SpongeIcon v-if="category === 'Sponge'" class="" />
    <CleaningProductIcon v-if="category === 'Cleaning Product'" class="" />
    <KitchenPaperIcon v-if="category === 'Kitchen Paper'" class="" />
    <p class="mt-2 text-sm">{{ category }}</p>

    <div
      v-if="triggerConfirm === 'confirm'"
      class="absolute flex flex-col items-center justify-around z-1 h-full w-full p-1 border-4 border-yellow-600 rounded-xl bg-slate-50 bg-opacity-90 font-montserrat text-cyan-900"
    >
      <p
        class=""
        :class="{
          'text-sm': isScreenHeightLessThan670(),
          'text-md': isScreenHeightGreaterThanOrEqualTo670()
        }"
      >
        Order <span class="text-green-500">{{ category }}</span> ?
      </p>
      <div class="flex flex-row justify-around items-center w-full h-2/6">
        <div
          class="relative flex justify-center items-center h-9 w-9 border-4 border-red-800 rounded-full bg-red-600"
          @click.stop="triggerConfirm = 'none'"
        >
          <!-- @click.stop disables parents event contagion, and thus allows the click to close the overlay -->
          <p class="absolute text-red-800">✖</p>
        </div>
        <div
          class="relative flex justify-center items-center h-9 w-9 border-4 border-emerald-600 rounded-full bg-emerald-500"
          @click.stop="AddNeedComponent()"
        >
          <!-- @click.stop disables parents event contagion, and thus allows the click to close the overlay -->
          <p class="absolute text-green-800 text-lg font-bold">✓</p>
        </div>
      </div>
    </div>

    <div
      v-else-if="triggerConfirm === 'done'"
      class="absolute flex flex-col items-center justify-around z-1 h-full w-full p-1 rounded-xl bg-sky-500 bg-opacity-90 font-montserrat text-white text-3xl"
    >
      Done !
    </div>
  </div>
</template>

<script>
import TinFoilIcon from './icons/groceries/TinFoilIcon.vue'
import PlasticBagsIcon from './icons/groceries/PlasticBagsIcon.vue'
import DishSoapIcon from './icons/groceries/DishSoapIcon.vue'
import PlasticWrapIcon from './icons/groceries/PlasticWrapIcon.vue'
import SoapIcon from './icons/groceries/SoapIcon.vue'
import SpongeIcon from './icons/groceries/SpongeIcon.vue'
import CleaningProductIcon from './icons/groceries/CleaningProductIcon.vue'
import ToiletPaperIcon from './icons/groceries/ToiletPaperIcon.vue'
import KitchenPaperIcon from './icons/groceries/KitchenPaperIcon.vue'

import useChoresStore from '@/stores/chores'
import useAuthenticationStore from '@/stores/authentication'
import { mapWritableState, mapState, mapActions } from 'pinia'

export default {
  name: 'AppGroceryItemButton',
  data() {
    return {
      triggerConfirm: 'none'
    }
  },
  methods: {
    ...mapActions(useChoresStore, ['updateNeeds']),
    AddNeedComponent() {
      //Update the store and call the database function to add the need
      this.triggerConfirm = 'done'
      setTimeout(() => {
        this.groceries.needs.push({
          item: this.category,
          orderedBy: `${this.userData.residentName} ${this.userData.roomEmoji}`
        })
        this.updateNeeds()
        this.triggerConfirm = 'none'
      }, 1500)
    },
    isScreenHeightLessThan670() {
      return window.innerHeight < 670
    },
    isScreenHeightGreaterThanOrEqualTo670() {
      return window.innerHeight >= 670
    }
  },
  computed: {
    ...mapState(useAuthenticationStore, ['userData']),
    ...mapWritableState(useChoresStore, ['groceries'])
  },
  components: {
    TinFoilIcon,
    PlasticBagsIcon,
    DishSoapIcon,
    PlasticWrapIcon,
    ToiletPaperIcon,
    SoapIcon,
    SpongeIcon,
    CleaningProductIcon,
    KitchenPaperIcon
  },
  props: ['category']
}
</script>
