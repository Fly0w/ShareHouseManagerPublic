import { defineStore } from 'pinia'

export default defineStore('bike', {
  state: () => ({
    selectedName: '',
    isNameSelected: false,
    isBikeUsed: false,
    currentBikeUser: 'Florian',
    history: [
      { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
      { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
      { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' },
      { user: 'Florian 🦊', startDate: '2023/08/12 21:21', endDate: '2023/08/12 23:56' }
    ]
  }),
  actions: {
    handleNameSelection() {
      if (this.selectedName === '') {
        this.isNameSelected = false
      } else {
        this.isNameSelected = true
      }
    },
    startUsing() {
      // Envoyer info database 1.update state 2. Ecrire history
      this.currentBikeUser = this.selectedName
      this.isBikeUsed = true
    },
    stopUsing() {
      // Envoyer info database 1.update state 2. Ecrire history
      this.currentBikeUser = ''
      this.isBikeUsed = false
    }
  }
})
