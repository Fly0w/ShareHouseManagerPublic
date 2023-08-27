<template>
  <div class="flex flex-row w-full h-16 mt-1.5">
    <div
      class="flex flex-col items-center justify-center w-1/5 p-2 bg-blue-300 border-y-2 border-l-2 rounded-l-3xl border-sky-500"
    >
      <TinFoilIcon v-if="needInfo.item === 'Tin Foil'" class="" />
      <PlasticBagsIcon v-if="needInfo.item === 'Plastic Bags'" class="" />
      <DishSoapIcon v-if="needInfo.item === 'Dish Soap'" class="" />
      <PlasticWrapIcon v-if="needInfo.item === 'Plastic Wrap'" class="" />
      <ToiletPaperIcon v-if="needInfo.item === 'Toilet Paper'" class="" />
      <SoapIcon v-if="needInfo.item === 'Hand Soap'" class="" />
      <SpongeIcon v-if="needInfo.item === 'Sponge'" class="" />
      <CleaningProductIcon v-if="needInfo.item === 'Cleaning Product'" class="" />
      <KitchenPaperIcon v-if="needInfo.item === 'Kitchen Paper'" class="" />
    </div>

    <div
      v-if="triggerConfirm === 'none'"
      class="flex flex-row w-4/5 px-2 bg-slate-50/40 border-y-2 border-r-2 border-sky-500 rounded-r-xl"
    >
      <div class="flex flex-col items-start justify-center w-4/5 h-full px-1">
        <p class="font-semibold text-xl text-sky-700">{{ needInfo.item }}</p>
        <p class="text-xs">
          Ordered by <span class="text-sm font-semibold">{{ needInfo.orderedBy }}</span>
        </p>
      </div>
      <div
        class="relative top-2 w-11 h-11 flex flex-col items-center justify-center bg-emerald-500 border-4 border-emerald-700 rounded-full"
        @click="triggerConfirm = 'confirm'"
      >
        <p class="absolute text-white text-2xl font-bold">✓</p>
      </div>
    </div>

    <div
      v-else-if="triggerConfirm === 'confirm'"
      class="flex flex-row justify-around w-4/5 px-2 bg-sky-300/50 border-y-2 border-r-2 border-sky-500 rounded-r-xl"
    >
      <div class="flex flex-col justify-center items-center text-sky-800">
        <p>Did you get</p>
        <p class="text-lg font-semibold">{{ needInfo.item }} ?</p>
      </div>

      <div class="flex flex-row justify-around">
        <div
          class="relative top-3 w-9 h-9 flex flex-col items-center justify-center bg-emerald-500 border-4 border-emerald-700 rounded-full"
          @click="removeNeedComponent()"
        >
          <p class="absolute text-white text-2xl font-bold">✓</p>
        </div>
        <div
          class="relative top-3 w-9 h-9 flex flex-col items-center justify-center bg-red-500 border-4 border-red-700 rounded-full"
          @click="triggerConfirm = 'none'"
        >
          <p class="absolute text-white text-2xl">✖</p>
        </div>
      </div>
    </div>

    <div
      v-else-if="triggerConfirm === 'done'"
      class="flex flex-row justify-center w-4/5 px-2 bg-sky-300/50 border-y-2 border-r-2 border-sky-500 rounded-r-xl"
    >
      <div class="flex flex-col justify-center items-center w-full text-sky-800">
        <p class="text-2xl">Thank you ! 🙌</p>
      </div>
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
import { mapWritableState, mapActions } from 'pinia'

export default {
  name: 'NeedsCardComponent',
  data() {
    return {
      triggerConfirm: 'none'
    }
  },
  methods: {
    ...mapActions(useChoresStore, ['updateNeeds']),
    removeNeedComponent() {
      //Update the store and call the database function to remove the need
      this.triggerConfirm = 'done'
      setTimeout(() => {
        const updatedNeeds = this.groceries.needs.filter((need) => need.item !== this.needInfo.item)
        this.groceries.needs = updatedNeeds
        this.updateNeeds()
        this.triggerConfirm = 'none'
      }, 1500)
    }
  },
  computed: {
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
  props: ['needInfo']
}
</script>
