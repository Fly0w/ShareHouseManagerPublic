import { defineStore } from 'pinia'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { auth, db } from '../includes/firebase'

import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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
    async sendLoginDB(selectedRoom, loginResidentName, loginRoomPassword) {
      // Checks the room, name and room password to authenticate the user
      const docRef = doc(db, 'users', selectedRoom)
      const docSnap = await getDoc(docRef)

      if (docSnap.data().residentName.toLowerCase() === loginResidentName.toLowerCase()) {
        try {
          await signInWithEmailAndPassword(auth, docSnap.data().roomEmail, loginRoomPassword)
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
    async changeUserData() {
      // Update a user collection for the connected user's room
      try {
        const docRef = doc(db, 'users', this.userData.roomNumber.replace('-', ''))
        await updateDoc(docRef, {
          residentName: this.userData.residentName,
          residentNameKanji: this.userData.residentNameKanji
        })
        return true
      } catch (error) {
        console.log(error)
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
          await createUserWithEmailAndPassword(
            auth,
            listRooms[Object.keys(listRooms)[i]].roomEmail,
            listRooms[Object.keys(listRooms)[i]].roomPassword
          )
          await setDoc(doc(db, 'users', Object.keys(listRooms)[i]), {
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
      // Call firebase to logout the user
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
