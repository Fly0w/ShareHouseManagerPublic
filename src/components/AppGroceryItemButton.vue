<template>
  <div
    class="relative flex flex-col items-center justify-center w-2/5 h-32 my-2 p-1.5 border-4 border-emerald-800 rounded-2xl bg-teal-400 font-montserrat font-bold text-slate-50 text-center shadow-lg shadow-cyan-500"
    @click.prevent="toggleConfirm = true"
  >
    <TinFoilIcon v-if="category === 'Tin Foil'" class="w-5/6" />
    <PlasticBagsIcon v-if="category === 'Plastic Bags'" class="w-4/6" />
    <DishSoapIcon v-if="category === 'Dish Soap'" class="w-4/6" />
    <PlasticWrapIcon v-if="category === 'Plastic Wrap'" class="w-5/6" />
    <ToiletPaperIcon v-if="category === 'Toilet Paper'" class="w-4/6" />
    <SoapIcon v-if="category === 'Hand Soap'" class="w-4/6" />
    <SpongeIcon v-if="category === 'Sponge'" class="w-4/6" />
    <CleaningProductIcon v-if="category === 'Cleaning Product'" class="w-4/6" />
    <KitchenPaperIcon v-if="category === 'Kitchen Paper'" class="w-4/6" />
    <p class="mt-2 text-sm">{{ category }}</p>

    <div
      v-show="toggleConfirm"
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
          class="flex justify-center items-center h-full w-2/5 border-4 border-red-900 rounded-2xl bg-red-600 text-red-800"
          @click.stop="toggleConfirm = false"
        >
          <!-- @click.stop disables parents event contagion, and thus allows the click to close the overlay -->
          x
        </div>
        <div
          class="flex justify-center items-center h-full w-2/5 border-4 border-emerald-600 rounded-2xl bg-emerald-500 text-green-800"
          @click.stop="sendAlertItem(category), toggleItemOrderedScreen()"
        >
          <!-- @click.stop disables parents event contagion, and thus allows the click to close the overlay -->
          o
        </div>
      </div>
    </div>

    <div
      v-show="toggleOrderOk"
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

export default {
  name: 'AppGroceryItemButton',
  data() {
    return {
      toggleConfirm: false,
      toggleOrderOk: false
    }
  },
  methods: {
    sendAlertItem(item) {
      this.toggleConfirm = false
      console.log('Sending alert for', item)
    },
    toggleItemOrderedScreen() {
      this.toggleOrderOk = true
      setTimeout(() => {
        this.toggleOrderOk = false
      }, 2000)
    },
    isScreenHeightLessThan670() {
      return window.innerHeight < 670
    },
    isScreenHeightGreaterThanOrEqualTo670() {
      return window.innerHeight >= 670
    }
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
