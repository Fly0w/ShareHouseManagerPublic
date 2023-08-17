import { defineStore } from 'pinia'

export default defineStore('rooms', {
  state: () => ({
    listRooms: {
      A101: {
        roomNumber: 'A101',
        residentName: 'Gregory',
        residentNameKanji: '和道',
        roomEmail: 'A101@hotmail.com',
        roomEmoji: '🐸',
        roomEvents: []
      },
      A1021: {
        roomNumber: 'A102-1',
        residentName: 'Yusei',
        residentNameKanji: '勇成',
        roomEmail: 'A1021@hotmail.com',
        roomEmoji: '🦅',
        roomEvents: []
      },
      A1022: {
        roomNumber: 'A102-2',
        residentName: 'Florian',
        residentNameKanji: 'フロリアン',
        roomEmail: 'A1022@hotmail.com',
        roomEmoji: '🦊',
        roomEvents: []
      },
      A201: {
        roomNumber: 'A201',
        residentName: 'Yuta',
        residentNameKanji: '優太',
        roomEmail: 'A201@hotmail.com',
        roomEmoji: '🐺',
        roomEvents: []
      },
      A202: {
        roomNumber: 'A202',
        residentName: 'Kai',
        residentNameKanji: '海舟',
        roomEmail: 'A202@hotmail.com',
        roomEmoji: '🐮',
        roomEvents: []
      },
      A203: {
        roomNumber: 'A203',
        residentName: 'Maya',
        residentNameKanji: 'マヤ',
        roomEmail: 'A203@hotmail.com',
        roomEmoji: '🐎',
        roomEvents: []
      },
      A204: {
        roomNumber: 'A204',
        residentName: 'Siyun',
        residentNameKanji: 'シユン',
        roomEmail: 'A204@hotmail.com',
        roomEmoji: '🦓',
        roomEvents: []
      },
      A205: {
        roomNumber: 'A205',
        residentName: 'Chie',
        residentNameKanji: '',
        roomEmail: 'A205@hotmail.com',
        roomEmoji: '🦄',
        roomEvents: []
      },
      A2061: {
        roomNumber: 'A206-1',
        residentName: 'Mizuki',
        residentNameKanji: 'ミズキ',
        roomEmail: 'A2061@hotmail.com',
        roomEmoji: '🦒',
        roomEvents: []
      },
      A2062: {
        roomNumber: 'A206-2',
        residentName: 'Jessica',
        residentNameKanji: 'ジェシカ',
        roomPassword: 'A2062password',
        roomEmail: 'A2062@hotmail.com',
        roomEmoji: '🐼',
        roomEvents: []
      },
      B101: {
        roomNumber: 'B101',
        residentName: 'Hiro',
        residentNameKanji: '大和',
        roomEmail: 'B101@hotmail.com',
        roomEmoji: '🦔',
        roomEvents: []
      },
      B102: {
        roomNumber: 'B102',
        residentName: 'Rodrigo',
        residentNameKanji: 'ロド',
        roomEmail: 'B102@hotmail.com',
        roomEmoji: '🐭',
        roomEvents: []
      },
      B103: {
        roomNumber: 'B103',
        residentName: 'Ricky',
        residentNameKanji: 'リッキー',
        roomEmail: 'B103@hotmail.com',
        roomEmoji: '🦘',
        roomEvents: []
      },
      B104: {
        roomNumber: 'B104',
        residentName: '???',
        residentNameKanji: '???',
        roomEmail: 'B104@hotmail.com',
        roomEmoji: '🐰',
        roomEvents: []
      },
      B201: {
        roomNumber: 'B201',
        residentName: 'Hanna',
        residentNameKanji: 'ハンナ',
        roomEmail: 'B201@hotmail.com',
        roomEmoji: '🦉',
        roomEvents: []
      },
      B202: {
        roomNumber: 'B202',
        residentName: 'Marina',
        residentNameKanji: 'まりな',
        roomEmail: 'B202@hotmail.com',
        roomEmoji: '🐬',
        roomEvents: []
      },
      B203: {
        roomNumber: 'B203',
        residentName: 'Astrid',
        residentNameKanji: 'アスター',
        roomEmail: 'B203@hotmail.com',
        roomEmoji: '🐶',
        roomEvents: []
      },
      B204: {
        roomNumber: 'B204',
        residentName: 'Haruki',
        residentNameKanji: '春貴',
        roomEmail: 'B204@hotmail.com',
        roomEmoji: '🐨',
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
  })
})
