import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDoc, setDoc, collection, doc, updateDoc } from 'firebase/firestore'

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
      ],
      currentIndex: 0
      // offsetGarbage: 0
    },
    groceries: {
      rotation: [],
      needs: [],
      currentIndex: 0
      // offsetGroceries: 0
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
    calculateIDs() {
      // Function that calculates the IDs and update the state
      // Garbage rotation setting
      let thisWeekID
      if (this.garbage.currentIndex >= 0) {
        thisWeekID = this.garbage.currentIndex % 9 // --> [value always >= 0] % 9 --> gives a valid index from range 0 to 8
      } else {
        // In case the current index is Negative
        thisWeekID = 8 + ((this.garbage.currentIndex + 1) % 9) // --> 8 + [value always between -8 and 0] --> gives a valid index from range 0 to 8
      }
      ///////// Offset Version, do not use ////////
      // if (this.garbage.currentIndex + this.garbage.offsetGarbage > 0) {
      //   thisWeekID = (8 + (this.garbage.currentIndex + this.garbage.offsetGarbage)) % 9 // --> (8 + [value always > 0]) % 9 --> gives a valid index from range 0 to 8
      // } else {
      //   thisWeekID = 8 + ((this.garbage.currentIndex + this.garbage.offsetGarbage) % 9) // --> 8 + [value always between -8 and 0] --> gives a valid index from range 0 to 8
      // }

      let nextWeekID = (thisWeekID + 1) % 9 //For next week key
      let lastWeekID = (8 + thisWeekID) % 9 //For last week key

      this.weekDuo.last.duo1 = this.garbage.rotation[lastWeekID][0]
      this.weekDuo.last.duo2 = this.garbage.rotation[lastWeekID][1]
      this.weekDuo.now.duo1 = this.garbage.rotation[thisWeekID][0]
      this.weekDuo.now.duo2 = this.garbage.rotation[thisWeekID][1]
      this.weekDuo.next.duo1 = this.garbage.rotation[nextWeekID][0]
      this.weekDuo.next.duo2 = this.garbage.rotation[nextWeekID][1]

      // Groceries Rotation Settings
      let thisMonthID
      if (this.groceries.currentIndex >= 0) {
        thisMonthID = this.groceries.currentIndex % 9 // --> gives a valid index from range 0 to 8
      } else {
        // In case the current index is Negative
        thisMonthID = 8 + ((this.groceries.currentIndex + 1) % 9) // = 8 + [value always between -8 and 0] --> gives a valid index from range 0 to 8
      }

      ///////// Offset Version, do not use ////////
      // if (this.groceries.currentIndex + this.groceries.offsetGroceries > 0) {
      //   thisMonthID = (8 + this.groceries.currentIndex + this.groceries.offsetGroceries) % 9 // --> gives a valid index from range 0 to 8
      // } else {
      //   // In case the sum of current index and offset is Negative
      //   thisMonthID = 8 + ((this.groceries.currentIndex + this.groceries.offsetGroceries) % 9) // = 8 + [value always between -8 and 0] --> gives a valid index from range 0 to 8
      // }

      let nextMonthID = (thisMonthID + 1) % 9 //For next month key
      let lastMonthID = (8 + thisMonthID) % 9 //For last month key

      this.monthDuo.last.duo1 = this.groceries.rotation[lastMonthID][0]
      this.monthDuo.last.duo2 = this.groceries.rotation[lastMonthID][1]
      this.monthDuo.now.duo1 = this.groceries.rotation[thisMonthID][0]
      this.monthDuo.now.duo2 = this.groceries.rotation[thisMonthID][1]
      this.monthDuo.next.duo1 = this.groceries.rotation[nextMonthID][0]
      this.monthDuo.next.duo2 = this.groceries.rotation[nextMonthID][1]
    },
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
          daysWeek: garbage.daysWeek,
          currentIndex: garbage.currentIndex
          // offsetGarbage: garbage.offsetGarbage
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
          needs: groceries.needs,
          currentIndex: groceries.currentIndex
          // offsetGroceries: groceries.offsetGroceries
        })

        console.log('ok')
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async updateNeeds() {
      // Function to rewrite the needs in the database
      try {
        const docGroceries = doc(db, 'chores', 'groceries')
        await updateDoc(docGroceries, {
          needs: this.groceries.needs
        })
      } catch (error) {
        console.log('nope', error)
      }
    },
    async skipWeek() {
      try {
        const docGarbageOffset = doc(db, 'chores', 'garbage')
        await updateDoc(docGarbageOffset, {
          // offsetGarbage: this.garbage.offsetGarbage + 1
          currentIndex: this.garbage.currentIndex + 1
        })

        this.garbage.currentIndex += 1
        // this.garbage.offsetGarbage += 1
        this.calculateIDs(this.state)
      } catch (error) {
        console.log(error, 'Something went wrong when skipping one week')
      }
    },
    async backWeek() {
      try {
        const docGarbageOffset = doc(db, 'chores', 'garbage')
        await updateDoc(docGarbageOffset, {
          // offsetGarbage: this.garbage.offsetGarbage - 1
          currentIndex: this.garbage.currentIndex - 1
        })

        this.garbage.currentIndex -= 1
        // this.garbage.offsetGarbage -= 1
        this.calculateIDs(this.state)
      } catch (error) {
        console.log(error, 'Something went wrong when going back one week')
      }
    },
    async skipMonth() {
      try {
        const docGroceriesOffset = doc(db, 'chores', 'groceries')
        await updateDoc(docGroceriesOffset, {
          // offsetGroceries: this.groceries.offsetGroceries + 1
          currentIndex: this.groceries.currentIndex + 1
        })

        this.groceries.currentIndex += 1
        // this.groceries.offsetGroceries += 1
        this.calculateIDs(this.state)
      } catch (error) {
        console.log(error, 'Something went wrong when skipping one month')
      }
    },
    async backMonth() {
      try {
        const docGroceriesOffset = doc(db, 'chores', 'groceries')
        await updateDoc(docGroceriesOffset, {
          // offsetGroceries: this.groceries.offsetGroceries - 1
          currentIndex: (this.groceries.currentIndex -= 1)
        })

        this.groceries.currentIndex - 1
        // this.groceries.offsetGroceries -= 1
        this.calculateIDs(this.state)
      } catch (error) {
        console.log(error, 'Something went wrong when going back one month')
      }
    }
  },
  getters: {
    async getChoresInfo(state) {
      // Gets the db information regarding chores
      try {
        ///// GARBAGE /////
        const docGarbage = doc(db, 'chores', 'garbage')
        const docSnapGarbage = await getDoc(docGarbage)
        state.garbage.rotation = docSnapGarbage.data().rotation
        state.garbage.daysWeek = docSnapGarbage.data().daysWeek
        state.garbage.currentIndex = docSnapGarbage.data().currentIndex
        // state.garbage.offsetGarbage = docSnapGarbage.data().offsetGarbage

        // ///// GROCERIES /////
        const docGroceries = doc(db, 'chores', 'groceries')
        const docSnapGroceries = await getDoc(docGroceries)
        state.groceries.rotation = docSnapGroceries.data().rotation
        state.groceries.needs = docSnapGroceries.data().needs
        state.groceries.currentIndex = docSnapGroceries.data().currentIndex
        // state.groceries.offsetGroceries = docSnapGroceries.data().offsetGroceries

        this.calculateIDs()

        return true
      } catch (error) {
        console.log(error, 'Something went wrong when importing the chores info')
        return false
      }
    },
    ////////     Local functions for IDs, do not use     ///////////
    /* 
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
    },*/
    getDateToday: () => {
      const today = new Date()
      const day = today.getDay()
      return day
    }
  }
})
