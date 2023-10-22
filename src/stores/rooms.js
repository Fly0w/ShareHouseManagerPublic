import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore'

export default defineStore('rooms', {
  state: () => ({
    listRooms: {
      A101: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A1021: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A1022: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A201: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A202: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A203: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A204: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A205: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A2061: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      A2062: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B101: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B102: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B103: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B104: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B201: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B202: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B203: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      },
      B204: {
        roomNumber: '',
        residentName: '',
        residentNameKanji: '',
        roomEmail: '',
        roomEmoji: '',
        roomEvents: []
      }
    }
  }),
  actions: {
    async editRoom(roomNumber, newName) {
      try {
        const docRef = doc(db, 'users', roomNumber)
        await updateDoc(docRef, {
          residentName: newName,
          residentNameKanji: ''
        })
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  },
  getters: {
    async getAllRooms(state) {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        querySnapshot.forEach((doc) => {
          state.listRooms[doc.id] = doc.data()
        })
        return true
      } catch (error) {
        console.log('Something went wrong when importing the rooms')
        return false
      }
    }
  }
})
