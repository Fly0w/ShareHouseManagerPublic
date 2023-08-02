import { defineStore } from 'pinia'

export default defineStore('rooms', {
  state: () => ({
    listRooms: {
      A101: {
        roomNumber: 'A101',
        residentName: 'Greg',
        residentNameKanji: '和道'
      },
      A1021: {
        roomNumber: 'A102-1',
        residentName: 'Yusei',
        residentNameKanji: '勇成'
      },
      A1022: {
        roomNumber: 'A102-2',
        residentName: 'Florian',
        residentNameKanji: 'フロリアン'
      },
      A201: {
        roomNumber: 'A201',
        residentName: 'Yuta',
        residentNameKanji: '優太'
      },
      A202: {
        roomNumber: 'A202',
        residentName: 'Kai',
        residentNameKanji: '海舟'
      },
      A203: {
        roomNumber: 'A203',
        residentName: 'Maya',
        residentNameKanji: 'マヤ'
      },
      A204: {
        roomNumber: 'A204',
        residentName: 'Siyun',
        residentNameKanji: 'シユン'
      },
      A205: {
        roomNumber: 'A205',
        residentName: 'Chie',
        residentNameKanji: ''
      },
      A2061: {
        roomNumber: 'A206-1',
        residentName: 'Mizuki',
        residentNameKanji: 'ミズキ'
      },
      A2062: {
        roomNumber: 'A206-2',
        residentName: 'Jessica',
        residentNameKanji: 'ジェシカ'
      },
      B101: {
        roomNumber: 'B101',
        residentName: 'Hiro',
        residentNameKanji: '大和'
      },
      B102: {
        roomNumber: 'B102',
        residentName: 'Rodrigo',
        residentNameKanji: 'ロド'
      },
      B103: {
        roomNumber: 'B103',
        residentName: 'Ricky',
        residentNameKanji: 'リッキー'
      },
      B104: {
        roomNumber: 'B104',
        residentName: '???',
        residentNameKanji: '???'
      },
      B201: {
        roomNumber: 'B201',
        residentName: 'Hanna',
        residentNameKanji: 'ハンナ'
      },
      B202: {
        roomNumber: 'B202',
        residentName: 'Marina',
        residentNameKanji: 'まりな'
      },
      B203: {
        roomNumber: 'B203"',
        residentName: 'Astrid',
        residentNameKanji: 'アスター'
      },
      B204: {
        roomNumber: 'B204',
        residentName: 'Haruki',
        residentNameKanji: '春貴'
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
