<template>
  <!-- Title -->
  <div
    class="flex flex-col justify-center h-16 w-full py-3 text-center bg-sky-400/90 font-montserrat"
  >
    <h2 class="text-white text-3xl italic tracking-widest">Common fee</h2>
  </div>

  <div class="flex flex-col justify-center items-center h-20 w-full bg-sky-50/50 mb-5">
    <div class="flex flex-row justify-center items-center h-16 w-11/12">
      <div class="flex flex-col justify-start items-center w-16 h-16">
        <CoinIcon />
        <p class="text-sm font-semibold text-orange-600">500 ¥</p>
      </div>
      <div class="flex flex-row justify-around items-center w-10/12 h-5/6">
        <div class="animleft" @click="substractOneMonth"><LeftArrow class="w-10 h-10" /></div>
        <div class="text-lg min-[370px]:text-xl font-semibold text-teal-800">
          {{ months[monthCounter] }} {{ year }}
        </div>
        <div class="animright" @click="addOneMonth"><RightArrow class="w-10 h-10" /></div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col justify-start items-start px-3 w-full overflow-y-auto"
    style="height: 70%"
  >
    <div v-for="(room, key) in listRooms" :key="room.roomNumber" class="w-full">
      <AppMoneyCard
        :roomNumberText="room.roomNumber"
        :roomNumberKey="key"
        :roomEmoji="room.roomEmoji"
        :residentName="room.residentName"
        :paymentStatus="currentMonthData[key].paid"
        :namePaid="currentMonthData[key].name"
        :datePaid="currentMonthData[key].date"
        :monthYearString="months[monthCounter].concat(year.toString())"
        :month="months[monthCounter]"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment/moment'

import AppMoneyCard from './AppMoneyCard.vue'
import CoinIcon from './icons/CoinIcon.vue'
import LeftArrow from './icons/LeftArrow.vue'
import RightArrow from './icons/RightArrow.vue'

import useRoomsStore from '@/stores/rooms'
import useMoneyStore from '@/stores/money'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AppMoney',
  data() {
    return {
      monthCounter: parseInt(moment().format('M')) - 1,
      year: parseInt(moment().format('YYYY')),
      months: {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      }
    }
  },
  methods: {
    ...mapActions(useMoneyStore, ['createNewMonth', 'getMoneyData']),
    async getData() {
      //get the data from the database for a given year and month
      let monthYearString = this.months[this.monthCounter].concat(this.year.toString())
      console.log(monthYearString)
      await this.createNewMonth(monthYearString)
      await this.getMoneyData(monthYearString)
      console.log('getting data for', monthYearString)
    },
    addOneMonth() {
      // Add 1 to the month conter, and makes sure the counter does not go over 11, otherwise add +1 year
      if (this.monthCounter > 11 || this.monthCounter < 0) {
        return 'error'
      } else {
        if (this.monthCounter === 11) {
          this.monthCounter = 0
          this.year++
        } else {
          this.monthCounter++
        }
        this.getData()
      }
    },
    substractOneMonth() {
      // Substract 1 to the month conter, and makes sure the counter does not go below 0, otherwise substract 1 year
      if (this.monthCounter > 11 || this.monthCounter < 0) {
        return 'error'
      } else {
        if (this.monthCounter === 0) {
          this.monthCounter = 11
          this.year--
        } else {
          this.monthCounter--
        }
        this.getData()
      }
    },
    getPaymentStatus(room) {
      this.currentMonthData[room.roomNumber] ? this.currentMonthData[room.roomNumber].paid : false // ou une valeur par défaut appropriée
    },
    getNamePaid(room) {
      this.currentMonthData[room.roomNumber] ? this.currentMonthData[room.roomNumber].name : '' // ou une valeur par défaut appropriée
    },
    getDatePaid(room) {
      this.currentMonthData[room.roomNumber] ? this.currentMonthData[room.roomNumber].date : '' // ou une valeur par défaut appropriée
    }
  },
  computed: {
    ...mapState(useRoomsStore, ['listRooms']),
    ...mapState(useMoneyStore, ['currentMonthData'])
  },
  components: {
    AppMoneyCard,
    CoinIcon,
    LeftArrow,
    RightArrow
  },
  created() {
    this.getData()
  }
}
</script>
<style>
@keyframes shake-left {
  0% {
    transform: translateX(0px);
  }
  60% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes shake-right {
  0% {
    transform: translateX(0px);
  }
  60% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0px);
  }
}

.animleft {
  animation: shake-left 2s ease-in-out infinite;
}

.animright {
  animation: shake-right 2s ease-in-out infinite;
}
</style>
