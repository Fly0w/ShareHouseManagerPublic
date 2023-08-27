import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDoc, setDoc, collection, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import moment from 'moment/moment'

export default defineStore('bike', {
  state: () => ({
    usageState: {
      isBeingUsed: false,
      startTime: '',
      currentUser: ''
    },
    lockPass: '',
    history: []
  }),
  actions: {
    async setBike() {
      // Do not use, used to initialize the db
      try {
        const bikeRef = collection(db, 'bike')

        await setDoc(doc(bikeRef, 'usageState'), {
          isBeingUsed: false,
          startTime: '',
          currentUser: ''
        })
        await setDoc(doc(bikeRef, 'lockPass'), {
          lockPass: '1234'
        })
        await setDoc(doc(bikeRef, 'history'), {
          history: []
        })
        console.log('bike ok')
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async startUsing(userName) {
      // Envoyer info database 1.update state 2. Ecrire history
      // Updates the state "isBeingUsed" in the db with userName and creates a history entry
      try {
        const docUsageState = doc(db, 'bike', 'usageState')
        await updateDoc(docUsageState, {
          isBeingUsed: true,
          currentUser: userName,
          startTime: moment().format('llll')
        })

        this.usageState = {
          isBeingUsed: true,
          startTime: moment().format('llll'),
          currentUser: userName
        }
      } catch (error) {
        console.log(error, 'Something went wrong when starting using the bike')
      }
    },
    async stopUsing() {
      try {
        const docHistory = doc(db, 'bike', 'history')
        const docUsageState = doc(db, 'bike', 'usageState')

        await updateDoc(docHistory, {
          history: arrayUnion({
            name: this.usageState.currentUser,
            startTime: this.usageState.startTime,
            endTime: moment().format('llll')
          })
        })

        this.history.push({
          name: this.usageState.currentUser,
          startTime: this.usageState.startTime,
          endTime: moment().format('llll')
        })

        await updateDoc(docUsageState, {
          isBeingUsed: false,
          startTime: '',
          currentUser: ''
        })

        this.usageState = {
          isBeingUsed: false,
          startTime: '',
          currentUser: ''
        }
      } catch (error) {
        console.log(error, 'Something went wrong when stoping using the bike')
      }
    }
  },
  getters: {
    async getBikeData(state) {
      try {
        const docUsageState = doc(db, 'bike', 'usageState')
        const docSnapUsageState = await getDoc(docUsageState)
        state.usageState = docSnapUsageState.data()

        const docLockPass = doc(db, 'bike', 'lockPass')
        const docSnapLockPass = await getDoc(docLockPass)
        state.lockPass = docSnapLockPass.data().lockPass

        const docHistory = doc(db, 'bike', 'history')
        const docSnapHistory = await getDoc(docHistory)
        state.history = docSnapHistory.data().history

        return true
      } catch (error) {
        console.log(error, 'Something went wrong when importing the chores info')
        return false
      }
    }
  }
})
