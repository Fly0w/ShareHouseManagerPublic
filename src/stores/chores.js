import { defineStore } from 'pinia'

export default defineStore('chores', {
  state: () => ({}),
  getters: {
    weekIDs: () => {
      const now = new Date()
      const startDateMs = Date.parse('January 1, 2023')
      const nowDateMs = now.getTime()
      // const nowDateMs = Date.parse("January 8, 2023");
      let difDateMs = nowDateMs - startDateMs //Number of ms between January 1st 2023 and now
      const weekMs = 1000 * 60 * 60 * 24 * 7
      const difDateWeek = Math.floor(difDateMs / weekMs) //Number of weeks since Sunday 1st of January 2023

      //Definition of the key for the array
      let offset = 1
      let thisWeekID = (difDateWeek % 9) + offset

      let nextWeekID = thisWeekID + 1 //For next week key
      let lastWeekID = thisWeekID - 1 //For last week key

      //The key can't be more than 8 or less than 0
      if (thisWeekID >= 9) {
        thisWeekID = 0
      }

      if (thisWeekID === 8) {
        nextWeekID = 0
        lastWeekID = 7
      } else if (thisWeekID === 0) {
        nextWeekID = 1
        lastWeekID = 8
      }
      return { lastWeekID, thisWeekID, nextWeekID }
    },
    getDateToday: () => {
      const today = new Date()
      const day = today.getDay()
      return day
    },
    monthIDs: () => {
      const now = new Date()
      const startDate = new Date('2023-01-01')

      const nowDateMonth = now.getMonth()
      const nowDateYear = now.getYear()

      const startDateMonth = startDate.getMonth()
      const startDateYear = startDate.getYear()

      const diff = (nowDateYear - startDateYear) * 12 + (nowDateMonth - startDateMonth)

      //Definition of the key for the array
      let thisMonthID = diff % 9
      let nextMonthID = thisMonthID + 1 //For next month key
      let lastMonthID = thisMonthID - 1 //For last month key
      //The key can't be more than 8 or less than 0
      if (thisMonthID === 8) {
        nextMonthID = 0
        lastMonthID = 7
      } else if (thisMonthID === 0) {
        nextMonthID = 1
        lastMonthID = 8
      }
      return { lastMonthID, thisMonthID, nextMonthID }
    }
  }
})
