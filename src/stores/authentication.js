import { defineStore } from 'pinia'
import { auth, db, usersCollection } from '../includes/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'

export default defineStore('authentication', {
  state: () => ({
    isConnected: false,
    userData: {
      roomNumber: '',
      residentName: '',
      residentNameKanji: '',
      roomEmoji: '',
      roomEvents: []
    }
  }),
  actions: {
    async sendLoginDB(listRooms, selectedRoom, loginResidentName, loginRoomPassword) {
      // Checks the room, name and room password to authenticate the user
      const docRef = doc(db, 'users', selectedRoom)
      const docSnap = await getDoc(docRef)

      if (docSnap.data().residentName.toLowerCase() === loginResidentName.toLowerCase()) {
        try {
          await auth.signInWithEmailAndPassword(docSnap.data().roomEmail, loginRoomPassword)
          console.log('NICEEEEE')
          setTimeout(() => {
            this.isConnected = true
          }, 1500)
          return true
        } catch (error) {
          console.log(error)
          return false
        }
      } else {
        return false
      }
    },
    async getUserData(selectedRoom) {
      // Gets the information of one room and put it in the state
      try {
        const docRef = doc(db, 'users', selectedRoom)
        const docSnap = await getDoc(docRef)
        this.userData = {
          roomNumber: docSnap.data().roomNumber,
          residentName: docSnap.data().residentName,
          residentNameKanji: docSnap.data().residentNameKanji,
          roomEmoji: docSnap.data().roomEmoji,
          roomEvents: docSnap.data().roomEvents
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async createAuthAndFirestoreDB(listRooms) {
      // Used to initialize all the entries in the db, do not use
      try {
        for (let i = 0; i <= 17; i++) {
          // await auth.createUserWithEmailAndPassword(
          //   listRooms[Object.keys(listRooms)[i]].roomEmail,
          //   listRooms[Object.keys(listRooms)[i]].roomPassword
          // )
          await usersCollection.doc(Object.keys(listRooms)[i]).set({
            roomNumber: listRooms[Object.keys(listRooms)[i]].roomNumber,
            residentName: listRooms[Object.keys(listRooms)[i]].residentName,
            residentNameKanji: listRooms[Object.keys(listRooms)[i]].residentNameKanji,
            roomEmail: listRooms[Object.keys(listRooms)[i]].roomEmail,
            roomEmoji: listRooms[Object.keys(listRooms)[i]].roomEmoji,
            roomEvents: listRooms[Object.keys(listRooms)[i]].roomEvents
          })
        }

        console.log('ok')
      } catch (error) {
        console.log(error)
      }
    },
    async logOut() {
      try {
        signOut(auth)
        this.isConnected = false
        this.userData = {
          roomNumber: '',
          residentName: '',
          residentNameKanji: '',
          roomEmoji: '',
          roomEvents: []
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})
