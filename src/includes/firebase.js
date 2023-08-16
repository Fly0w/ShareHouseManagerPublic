import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5breK_Vk9VV7AHQEeN8_tQv-9mHyrWIw',
  authDomain: 'sharehouse-96ee0.firebaseapp.com',
  projectId: 'sharehouse-96ee0',
  storageBucket: 'sharehouse-96ee0.appspot.com',
  messagingSenderId: '172112341807',
  appId: '1:172112341807:web:1718f46cc281c56a36cfda'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
