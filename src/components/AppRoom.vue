<template>
  <div v-if="roomNumberData.includes(houseSelect[0])">
    <div
      class="relative flex rounded-full items-center w-full h-16 px-1 mb-3 border-4 bg-opacity-70 font-montserrat"
      :class="{
        ' border-cyan-500 flex-row text-teal-700 bg-white': houseSelect === 'A house',
        ' border-purple-500 flex-row-reverse text-violet-600 bg-white': houseSelect === 'B house',
        ' border-orange-400 text-red-600 bg-orange-50': userData.roomNumber === roomNumberText
      }"
    >
      <!-- Room number -->
      <div
        class="ml-3 mr-1 w-3/12 font-bold text-lg tracking-wider"
        :class="{
          'text-left': houseSelect === 'A house',
          'text-right': houseSelect === 'B house'
        }"
      >
        <p>
          {{ roomNumberText }}
        </p>
      </div>

      <div class="flex flex-col justify-center h-full w-1/12">
        <p class="text-3xl text-center">
          {{ roomEmoji }}
        </p>
      </div>

      <div class="flex flex-col text-lg text-center w-6/12">
        <p class="text-xl font-semibold tracking-wider">
          {{ residentName }}
        </p>
        <p>
          {{ residentNameKanji }}
        </p>
      </div>

      <div class="flex flex-row justify-center items-center h-4/6 w-3/12">
        <ThrowAwayIcon
          v-if="weekDuo.now.duo1 === roomNumberData || weekDuo.now.duo2 === roomNumberData"
          class="w-full h-full mx-1 font-bold text-2xl text-red-500 text-center"
        />

        <GroceriesIcon
          v-if="monthDuo.now.duo1 === roomNumberData || monthDuo.now.duo2 === roomNumberData"
          class="w-full h-full mx-1 font-bold text-2xl text-green-500 text-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import useChoresStore from '@/stores/chores'
import useAuthenticationStore from '@/stores/authentication'

import GroceriesIcon from './icons/groceries/GroceriesIcon.vue'
import ThrowAwayIcon from './icons/garbage/ThrowAwayIcon.vue'

import { mapState } from 'pinia'

export default {
  name: 'AppRoom',
  computed: {
    ...mapState(useChoresStore, ['weekDuo', 'monthDuo']),
    ...mapState(useAuthenticationStore, ['userData'])
  },
  props: [
    'roomNumberData',
    'roomNumberText',
    'residentName',
    'residentNameKanji',
    'roomEmoji',
    'houseSelect'
  ],
  components: { GroceriesIcon, ThrowAwayIcon }
}
</script>
