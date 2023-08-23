import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDoc, setDoc, collection, doc } from 'firebase/firestore'

export default defineStore('chores', {
  state: () => ({
    garbage: {
      rotation: [],
      daysWeek: [
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        },
        {
          icon: [],
          id: 0,
          nextAction: {
            day: '',
            type: []
          },
          text: ''
        }
      ]
    },
    groceries: {
      rotation: [],
      needs: []
    },
    weekDuo: {
      last: {
        duo1: '',
        duo2: ''
      },
      now: {
        duo1: '',
        duo2: ''
      },
      next: {
        duo1: '',
        duo2: ''
      }
    },
    monthDuo: {
      last: {
        duo1: '',
        duo2: ''
      },
      now: {
        duo1: '',
        duo2: ''
      },
      next: {
        duo1: '',
        duo2: ''
      }
    }
  }),
  actions: {
    async setChores(garbage, groceries) {
      // Do not use, used to initialize the db
      try {
        const choresRef = collection(db, 'chores')

        await setDoc(doc(choresRef, 'garbage'), {
          rotation: {
            0: garbage.rotation[0],
            1: garbage.rotation[1],
            2: garbage.rotation[2],
            3: garbage.rotation[3],
            4: garbage.rotation[4],
            5: garbage.rotation[5],
            6: garbage.rotation[6],
            7: garbage.rotation[7],
            8: garbage.rotation[8]
          },
          daysWeek: garbage.daysWeek
        })

        await setDoc(doc(choresRef, 'groceries'), {
          rotation: {
            0: groceries.rotation[0],
            1: groceries.rotation[1],
            2: groceries.rotation[2],
            3: groceries.rotation[3],
            4: groceries.rotation[4],
            5: groceries.rotation[5],
            6: groceries.rotation[6],
            7: groceries.rotation[7],
            8: groceries.rotation[8]
          },
          needs: groceries.needs
        })

        console.log('ok')
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  },
  getters: {
    async getChoresInfo(state) {
      // Gets the db information regarding chores
      try {
        const docGarbage = doc(db, 'chores', 'garbage')
        const docSnapGarbage = await getDoc(docGarbage)
        state.garbage.rotation = docSnapGarbage.data().rotation
        state.garbage.daysWeek = docSnapGarbage.data().daysWeek

        const docGroceries = doc(db, 'chores', 'groceries')
        const docSnapGroceries = await getDoc(docGroceries)
        state.groceries.rotation = docSnapGroceries.data().rotation
        state.groceries.needs = docSnapGroceries.data().needs
        return true
      } catch (error) {
        console.log(error, 'Something went wrong when importing the chores info')
        return false
      }
    },

    weekIDs(state) {
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
      state.weekDuo.last.duo1 = state.garbage.rotation[lastWeekID][0]
      state.weekDuo.last.duo2 = state.garbage.rotation[lastWeekID][1]
      state.weekDuo.now.duo1 = state.garbage.rotation[thisWeekID][0]
      state.weekDuo.now.duo2 = state.garbage.rotation[thisWeekID][1]
      state.weekDuo.next.duo1 = state.garbage.rotation[nextWeekID][0]
      state.weekDuo.next.duo2 = state.garbage.rotation[nextWeekID][1]
      return true
    },
    monthIDs(state) {
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
      state.monthDuo.last.duo1 = state.groceries.rotation[lastMonthID][0]
      state.monthDuo.last.duo2 = state.groceries.rotation[lastMonthID][1]
      state.monthDuo.now.duo1 = state.groceries.rotation[thisMonthID][0]
      state.monthDuo.now.duo2 = state.groceries.rotation[thisMonthID][1]
      state.monthDuo.next.duo1 = state.groceries.rotation[nextMonthID][0]
      state.monthDuo.next.duo2 = state.groceries.rotation[nextMonthID][1]
      return true
    },
    getDateToday: () => {
      const today = new Date()
      const day = today.getDay()
      return day
    }
  }
})
