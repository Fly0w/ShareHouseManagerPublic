import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDocs, collection } from 'firebase/firestore'

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
    },
    duoRoomsGarbage: [
      ['B104', 'B201'],
      ['B202', 'B203'],
      ['B204', 'A101'],
      ['A1021', 'A1022'],
      ['A201', 'A202'],
      ['A203', 'A204'],
      ['A205', 'B101'],
      ['A2061', 'A2062'],
      ['B102', 'B103']
    ],
    duoRoomsGroceries: [
      ['A203', 'B202'],
      ['A204', 'B203'],
      ['A205', 'B204'],
      ['A2061', 'A2062'],
      ['A101', 'B101'],
      ['A1021', 'B102'],
      ['A1022', 'B103'],
      ['A201', 'B104'],
      ['A202', 'B201']
    ]
  }),
  actions: {
    async getAllRooms() {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        querySnapshot.forEach((doc) => {
          this.listRooms[doc.id] = doc.data()
        })
        return true
      } catch (error) {
        console.log('Something went wrong when importing the rooms')
        return false
      }
    }
  }
})
