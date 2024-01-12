import { defineStore } from 'pinia'
import { db } from '../includes/firebase'
import { getDoc, setDoc, doc, updateDoc } from 'firebase/firestore'
import moment from 'moment/moment'

export default defineStore('money', {
  state: () => ({
    currentMonthData: {
      A101: {
        paid: false,
        date: '',
        name: ''
      },
      A1021: {
        paid: false,
        date: '',
        name: ''
      },
      A1022: {
        paid: false,
        date: '',
        name: ''
      },
      A201: {
        paid: true,
        date: '',
        name: ''
      },
      A202: {
        paid: false,
        date: '',
        name: ''
      },
      A203: {
        paid: false,
        date: '',
        name: ''
      },
      A204: {
        paid: false,
        date: '',
        name: ''
      },
      A205: {
        paid: false,
        date: '',
        name: ''
      },
      A2061: {
        paid: false,
        date: '',
        name: ''
      },
      A2062: {
        paid: false,
        date: '',
        name: ''
      },
      B101: {
        paid: false,
        date: '',
        name: ''
      },
      B102: {
        paid: false,
        date: '',
        name: ''
      },
      B103: {
        paid: false,
        date: '',
        name: ''
      },
      B104: {
        paid: false,
        date: '',
        name: ''
      },
      B201: {
        paid: false,
        date: '',
        name: ''
      },
      B202: {
        paid: false,
        date: '',
        name: ''
      },
      B203: {
        paid: false,
        date: '',
        name: ''
      },
      B204: {
        paid: false,
        date: '',
        name: ''
      }
    }
  }),
  actions: {
    async createNewMonth(monthAndYear) {
      //Create an new collection for a given month
      try {
        const docMoneyList = doc(db, 'money', monthAndYear)
        const docSnap = await getDoc(docMoneyList)
        if (docSnap.exists()) {
          console.log(monthAndYear + ' document already exists')
        } else {
          await setDoc(doc(db, 'money', monthAndYear), {
            A101: {
              paid: false,
              date: '',
              name: ''
            },
            A1021: {
              paid: false,
              date: '',
              name: ''
            },
            A1022: {
              paid: false,
              date: '',
              name: ''
            },
            A201: {
              paid: false,
              date: '',
              name: ''
            },
            A202: {
              paid: false,
              date: '',
              name: ''
            },
            A203: {
              paid: false,
              date: '',
              name: ''
            },
            A204: {
              paid: false,
              date: '',
              name: ''
            },
            A205: {
              paid: false,
              date: '',
              name: ''
            },
            A2061: {
              paid: false,
              date: '',
              name: ''
            },
            A2062: {
              paid: false,
              date: '',
              name: ''
            },
            B101: {
              paid: false,
              date: '',
              name: ''
            },
            B102: {
              paid: false,
              date: '',
              name: ''
            },
            B103: {
              paid: false,
              date: '',
              name: ''
            },
            B104: {
              paid: false,
              date: '',
              name: ''
            },
            B201: {
              paid: false,
              date: '',
              name: ''
            },
            B202: {
              paid: false,
              date: '',
              name: ''
            },
            B203: {
              paid: false,
              date: '',
              name: ''
            },
            B204: {
              paid: false,
              date: '',
              name: ''
            }
          })
          console.log(monthAndYear + ' document has been created')
        }
        return true
      } catch (error) {
        console.log('ici' + error)
        return false
      }
    },
    async changeToPaid(roomNo, name, monthAndYear) {
      // Change the status of one room to paid, with the name and date
      try {
        const docMoneyState = doc(db, 'money', monthAndYear)

        await updateDoc(docMoneyState, {
          [roomNo]: {
            paid: true,
            date: moment().format('YYYY, MMM, Do'),
            name: name
          }
        })
        await this.getMoneyData(monthAndYear)
        console.log('updated successfully')
        return true
      } catch (error) {
        console.log('error while editing the record', error)
        return false
      }
    },
    async getMoneyData(monthAndYear) {
      // Gets the data from the db and updates the state
      try {
        const docMoneyList = doc(db, 'money', monthAndYear)
        const docSnapMoneyList = await getDoc(docMoneyList)
        this.currentMonthData = docSnapMoneyList.data()
        return true
      } catch (error) {
        console.log(error, 'Something went wrong when importing the money info')
        return false
      }
    }
  }
})
