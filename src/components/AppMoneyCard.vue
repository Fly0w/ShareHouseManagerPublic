<template>
  <div
    v-if="otherPayPanel === 'confirm' || selfPayPanel === 'confirm'"
    class="flex justify-start items-center w-full h-fullfont-montserrat"
  >
    <div
      v-if="userData.roomNumber === roomNumberText"
      class="flex rounded-full justify-around items-center w-full h-12 mb-2 border-2 border-pink-500 bg-opacity-70 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
    >
      <div
        @click="selfPayPanel = 'none'"
        class="flex flex-col justify-center text-blue-100 w-1/6 h-full text-left pl-4"
      >
        No
      </div>
      <div class="flex flex-row justify-center items-center w-4/6 text-sky-100">
        <div class="ml-3 mr-1 full font-semibold text-md tracking-wider">
          <p class="text-xs min-[370px]:text-sm text-center">
            Did you pay <span class="text-md font-bold text-indigo-700">{{ month }}</span
            >'s common fee ?
          </p>
        </div>
      </div>
      <div
        @click="confirmSelfPay()"
        class="flex flex-col justify-center text-green-100 w-1/6 h-full text-right pr-4"
      >
        Yes
      </div>
    </div>

    <div
      v-else
      class="flex rounded-full justify-around items-center w-full h-12 mb-2 border-2 border-emerald-400 bg-opacity-70 bg-gradient-to-r from-red-400 via-sky-300 to-green-400"
    >
      <div
        @click="otherPayPanel = 'none'"
        class="flex flex-col justify-center text-red-100 w-1/6 h-full text-left pl-4"
      >
        No
      </div>
      <div class="flex flex-row justify-center items-center w-5/6 text-sky-100">
        <div class="ml-3 mr-1 full font-semibold tracking-wider">
          <p class="text-xs min-[370px]:text-sm text-center">
            Did {{ roomEmoji }}
            <span class="text-md font-bold text-fuchsia-500">{{ residentName }}</span> pay
            <span class="text-md font-bold text-emerald-700">{{ month }}</span
            >'s common fee ?
          </p>
        </div>
      </div>
      <div
        @click="confirmOtherPay()"
        class="flex flex-col justify-center text-green-100 w-1/6 h-full text-right pr-4"
      >
        Yes
      </div>
    </div>
  </div>

  <div v-else class="flex justify-start items-center w-full h-fullfont-montserrat mb-2">
    <div
      class="relative flex rounded-l-full justify-center items-center w-4/6 h-12 border-y-2 border-l-2 bg-opacity-70"
      :class="{
        ' border-orange-400 text-red-600 bg-orange-50': userData.roomNumber === roomNumberText,
        ' border-blue-400 text-sky-700 bg-orange-50': userData.roomNumber !== roomNumberText
      }"
    >
      <!-- Room number -->
      <div class="ml-3 mr-1 w-4/12 font-bold text-md tracking-wider">
        <p>
          {{ roomNumberText }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-center h-full w-1/12">
        <p class="text-2xl text-center">
          {{ roomEmoji }}
        </p>
      </div>

      <div v-if="namePaid" class="flex flex-col text-md text-center w-7/12">
        <p class="text-xl font-semibold tracking-wider">
          {{ namePaid }}
        </p>
      </div>
      <div v-else class="flex flex-col text-md text-center w-7/12">
        <p class="text-xl font-semibold tracking-wider">
          {{ residentName }}
        </p>
      </div>
    </div>

    <!-- Payment status -->
    <div
      v-if="paymentStatus === true && userData.roomNumber === roomNumberText"
      class="flex flex-col rounded-r-lg justify-center items-center w-2/6 h-12 px-1 border-2 border-green-600 text-white bg-green-400"
    >
      <p class="">You paid</p>
      <p class="text-xs">{{ datePaid }}</p>
    </div>

    <div
      v-else-if="paymentStatus === false && userData.roomNumber === roomNumberText"
      class="flex flex-col rounded-r-lg justify-center items-center w-2/6 h-12 px-1 border-2 text-sm"
      :class="{
        'border-orange-600 text-white bg-orange-400': selfPayPanel === 'none',
        'border-yellow-600 text-white bg-yellow-400': selfPayPanel === 'done'
      }"
    >
      <p
        v-if="selfPayPanel === 'none'"
        class="flex justify-center items-center w-full h-full animate-bounce text-lg tracking-wider font-semibold text-yellow-800"
        @click="selfPayPanel = 'confirm'"
      >
        Pay !
      </p>
      <p v-else class="flex justify-center items-center w-full h-full">Thank you !</p>
    </div>

    <div
      v-else-if="paymentStatus === true && userData.roomNumber !== roomNumberText"
      class="flex flex-col rounded-r-lg justify-center items-center w-2/6 h-12 px-1 border-2 border-blue-600 text-white bg-sky-400"
    >
      <p class="">Paid</p>
      <p class="text-xs">{{ datePaid }}</p>
    </div>

    <div
      v-else
      class="flex flex-col rounded-r-lg justify-center items-center w-2/6 h-12 px-1 border-2 text-sm text-center"
      :class="{
        'border-red-600 text-white bg-red-400': otherPayPanel === 'none',
        'border-yellow-600 text-white bg-yellow-400': otherPayPanel === 'done'
      }"
    >
      <p
        v-if="otherPayPanel === 'none'"
        class="flex justify-center items-center w-full h-full"
        @click="otherPayPanel = 'confirm'"
      >
        Not paid
      </p>
      <p v-else class="flex justify-center items-center w-full h-full">Thank you !</p>
    </div>
  </div>
</template>

<script>
import useAuthenticationStore from '@/stores/authentication'
import useMoneyStore from '@/stores/money'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'AppMoneyCard',
  data() {
    return {
      selfPayPanel: 'none',
      otherPayPanel: 'none'
    }
  },
  methods: {
    ...mapActions(useMoneyStore, ['changeToPaid']),
    confirmSelfPay() {
      this.selfPayPanel = 'done'
      setTimeout(async () => {
        await this.changeToPaid(this.roomNumberKey, this.residentName, this.monthYearString)
        this.selfPayPanel = 'none'
      }, 2000)
    },
    confirmOtherPay() {
      this.otherPayPanel = 'done'
      setTimeout(async () => {
        await this.changeToPaid(this.roomNumberKey, this.residentName, this.monthYearString)
        this.otherPayPanel = 'none'
      }, 2000)
    }
  },
  computed: {
    ...mapState(useAuthenticationStore, ['userData'])
  },
  props: [
    'roomNumberText',
    'roomNumberKey',
    'roomEmoji',
    'residentName',
    'paymentStatus',
    'namePaid',
    'datePaid',
    'monthYearString',
    'month'
  ]
}
</script>

<style>
.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-6%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
