import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDoc, setDoc, collection, doc, updateDoc, arrayUnion } from 'firebase/firestore'

export default defineStore('events', {
  state: () => ({
    eventList: [],
    editEvent: {}
  }),
  actions: {
    async setEventList() {
      // Used to rewrite the db content
      try {
        const eventsRef = collection(db, 'events')
        await setDoc(doc(eventsRef, 'eventList'), { eventList: this.eventList })
        console.log('events ok')
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async addEvent(event) {
      try {
        const eventsRef = doc(db, 'events', 'eventList')
        await updateDoc(eventsRef, {
          eventList: arrayUnion(event)
        })
        console.log('event added successfully')
        return true
      } catch (error) {
        console.log('error while adding event', error)
        return false
      }
    }
  },
  getters: {
    async getEventsData(state) {
      // Gets the data from the db and updates the state
      try {
        const docEventList = doc(db, 'events', 'eventList')
        const docSnapEventList = await getDoc(docEventList)
        state.eventList = docSnapEventList.data().eventList
        return true
      } catch (error) {
        console.log(error, 'Something went wrong when importing the events info')
        return false
      }
    }
  }
})
