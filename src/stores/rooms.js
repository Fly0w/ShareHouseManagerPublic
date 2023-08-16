import { defineStore } from 'pinia'

export default defineStore('rooms', {
  state: () => ({
    listRooms: {
      A101: {
        roomNumber: 'A101',
        residentName: 'Gregory',
        residentNameKanji: '和道',
        roomPassword: 'A101password',
        roomEmail: 'A101@hotmail.com',
        roomEmoji: '🐸'
      },
      A1021: {
        roomNumber: 'A102-1',
        residentName: 'Yusei',
        residentNameKanji: '勇成',
        roomPassword: 'A1021password',
        roomEmail: 'A1021@hotmail.com',
        roomEmoji: '🦅'
      },
      A1022: {
        roomNumber: 'A102-2',
        residentName: 'Florian',
        residentNameKanji: 'フロリアン',
        roomPassword: 'A1022password',
        roomEmail: 'A1022@hotmail.com',
        roomEmoji: '🦊'
      },
      A201: {
        roomNumber: 'A201',
        residentName: 'Yuta',
        residentNameKanji: '優太',
        roomPassword: 'A201password',
        roomEmail: 'A201@hotmail.com',
        roomEmoji: '🐺'
      },
      A202: {
        roomNumber: 'A202',
        residentName: 'Kai',
        residentNameKanji: '海舟',
        roomPassword: 'A202password',
        roomEmail: 'A202@hotmail.com',
        roomEmoji: '🐮'
      },
      A203: {
        roomNumber: 'A203',
        residentName: 'Maya',
        residentNameKanji: 'マヤ',
        roomPassword: 'A203password',
        roomEmail: 'A203@hotmail.com',
        roomEmoji: '🐎'
      },
      A204: {
        roomNumber: 'A204',
        residentName: 'Siyun',
        residentNameKanji: 'シユン',
        roomPassword: 'A204password',
        roomEmail: 'A204@hotmail.com',
        roomEmoji: '🦓'
      },
      A205: {
        roomNumber: 'A205',
        residentName: 'Chie',
        residentNameKanji: '',
        roomPassword: 'A205password',
        roomEmail: 'A205@hotmail.com',
        roomEmoji: '🦄'
      },
      A2061: {
        roomNumber: 'A206-1',
        residentName: 'Mizuki',
        residentNameKanji: 'ミズキ',
        roomPassword: 'A2061password',
        roomEmail: 'A2061@hotmail.com',
        roomEmoji: '🦒'
      },
      A2062: {
        roomNumber: 'A206-2',
        residentName: 'Jessica',
        residentNameKanji: 'ジェシカ',
        roomPassword: 'A2062password',
        roomEmail: 'A2062@hotmail.com',
        roomEmoji: '🐼'
      },
      B101: {
        roomNumber: 'B101',
        residentName: 'Hiro',
        residentNameKanji: '大和',
        roomPassword: 'B101password',
        roomEmail: 'B101@hotmail.com',
        roomEmoji: '🦔'
      },
      B102: {
        roomNumber: 'B102',
        residentName: 'Rodrigo',
        residentNameKanji: 'ロド',
        roomPassword: 'B102password',
        roomEmail: 'B102@hotmail.com',
        roomEmoji: '🐭'
      },
      B103: {
        roomNumber: 'B103',
        residentName: 'Ricky',
        residentNameKanji: 'リッキー',
        roomPassword: 'B103password',
        roomEmail: 'B103@hotmail.com',
        roomEmoji: '🦘'
      },
      B104: {
        roomNumber: 'B104',
        residentName: '???',
        residentNameKanji: '???',
        roomPassword: 'B104password',
        roomEmail: 'B104@hotmail.com',
        roomEmoji: '🐰'
      },
      B201: {
        roomNumber: 'B201',
        residentName: 'Hanna',
        residentNameKanji: 'ハンナ',
        roomPassword: 'B201password',
        roomEmail: 'B201@hotmail.com',
        roomEmoji: '🦉'
      },
      B202: {
        roomNumber: 'B202',
        residentName: 'Marina',
        residentNameKanji: 'まりな',
        roomPassword: 'B202password',
        roomEmail: 'B202@hotmail.com',
        roomEmoji: '🐬'
      },
      B203: {
        roomNumber: 'B203',
        residentName: 'Astrid',
        residentNameKanji: 'アスター',
        roomPassword: 'B203password',
        roomEmail: 'B203@hotmail.com',
        roomEmoji: '🐶'
      },
      B204: {
        roomNumber: 'B204',
        residentName: 'Haruki',
        residentNameKanji: '春貴',
        roomPassword: 'B204password',
        roomEmail: 'B204@hotmail.com',
        roomEmoji: '🐨'
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
    ],
    isConnected: false
  })
})
