import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyD5breK_Vk9VV7AHQEeN8_tQv-9mHyrWIw',
  authDomain: 'sharehouse-96ee0.firebaseapp.com',
  projectId: 'sharehouse-96ee0',
  storageBucket: 'sharehouse-96ee0.appspot.com',
  messagingSenderId: '172112341807',
  appId: '1:172112341807:web:1718f46cc281c56a36cfda'
}

// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export { auth, db }
