;(users = {
  A101: {
    roomEmail: 'A101@hotmail.com',
    residentNameKanji: '和道',
    roomNumber: 'A101',
    roomEvents: [],
    residentName: 'Gregory',
    roomEmoji: '🐸'
  },
  A1021: {
    roomEmail: 'A1021@hotmail.com',
    residentName: 'Yusei',
    roomNumber: 'A102-1',
    residentNameKanji: '勇成',
    roomEmoji: '🦅',
    roomEvents: []
  },
  A1022: {
    residentName: 'Florian',
    roomEmail: 'A1022@hotmail.com',
    roomEmoji: '🦊',
    roomNumber: 'A102-2',
    residentNameKanji: 'フロリアン',
    roomEvents: []
  },
  A201: {
    roomEvents: [],
    roomEmail: 'A201@hotmail.com',
    roomNumber: 'A201',
    roomEmoji: '🐺',
    residentNameKanji: '優太',
    residentName: 'Yuta'
  },
  A202: {
    roomEmail: 'A202@hotmail.com',
    roomEvents: [],
    residentNameKanji: 'かいしゅう',
    roomEmoji: '🐮',
    roomNumber: 'A202',
    residentName: 'Kai'
  },
  A203: {
    roomNumber: 'A203',
    residentName: 'Maya',
    residentNameKanji: 'マヤ',
    roomEmoji: '🐎',
    roomEmail: 'A203@hotmail.com',
    roomEvents: []
  },
  A204: {
    roomEmail: 'A204@hotmail.com',
    roomEmoji: '🦓',
    roomEvents: [],
    residentName: 'Siyun',
    residentNameKanji: 'シユン',
    roomNumber: 'A204'
  },
  A205: {
    roomEmoji: '🦄',
    residentNameKanji: '',
    roomEvents: [],
    residentName: 'Chie',
    roomNumber: 'A205',
    roomEmail: 'A205@hotmail.com'
  },
  A2061: {
    roomEmail: 'A2061@hotmail.com',
    roomEmoji: '🦒',
    residentName: 'Mizuki',
    residentNameKanji: 'ミズキ',
    roomNumber: 'A206-1',
    roomEvents: []
  },
  A2062: {
    roomEmail: 'A2062@hotmail.com',
    roomEvents: [],
    residentName: 'Jessica',
    roomEmoji: '🐼',
    roomNumber: 'A206-2',
    residentNameKanji: 'ジェシカ'
  },
  B101: {
    roomEmoji: '🦔',
    roomEvents: [],
    residentName: 'Hiro',
    residentNameKanji: '大和',
    roomEmail: 'B101@hotmail.com',
    roomNumber: 'B101'
  },
  B102: {
    residentNameKanji: 'ロド',
    roomEmail: 'B102@hotmail.com',
    roomEvents: [],
    roomEmoji: '🐭',
    residentName: 'Rodrigo',
    roomNumber: 'B102'
  },
  B103: {
    roomEmail: 'B103@hotmail.com',
    roomEmoji: '🦘',
    roomEvents: [],
    roomNumber: 'B103',
    residentName: 'Ricky',
    residentNameKanji: 'リッキー'
  },
  B104: {
    residentName: 'Hana',
    residentNameKanji: 'ハナ',
    roomNumber: 'B104',
    roomEmoji: '🐰',
    roomEvents: [],
    roomEmail: 'B104@hotmail.com'
  },
  B201: {
    residentNameKanji: '???',
    residentName: '???',
    roomEmail: 'B201@hotmail.com',
    roomNumber: 'B201',
    roomEmoji: '🦉',
    roomEvents: []
  },
  B202: {
    residentName: 'Marina',
    roomEmail: 'B202@hotmail.com',
    roomEmoji: '🐬',
    residentNameKanji: 'まりな',
    roomNumber: 'B202',
    roomEvents: []
  },
  B203: {
    roomNumber: 'B203',
    roomEmoji: '🐶',
    roomEvents: [],
    roomEmail: 'B203@hotmail.com',
    residentName: '???',
    residentNameKanji: '???'
  },
  B204: {
    roomEvents: [],
    roomEmoji: '🐨',
    roomEmail: 'B204@hotmail.com',
    residentName: 'Haruki',
    roomNumber: 'B204',
    residentNameKanji: '春貴'
  }
}),
  (garbage = {
    rotation: {
      0: ['B104', 'B201'],
      1: ['B202', 'B203'],
      2: ['B204', 'A101'],
      3: ['A1021', 'A1022'],
      4: ['A201', 'A202'],
      5: ['A203', 'A204'],
      6: ['A205', 'B101'],
      7: ['A2061', 'A2062'],
      8: ['B102', 'B103']
    },
    daysWeek: [
      { icon: [], nextAction: { day: 'Tomorrow night', type: ['Burn'] }, id: 0, text: 'Sun' },
      { icon: ['Throw'], nextAction: { day: 'Tonight', type: ['Burn'] }, text: 'Mon', id: 1 },
      {
        id: 2,
        nextAction: {
          type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw'],
          day: 'Tomorrow night'
        },
        icon: ['Burn'],
        text: 'Tue'
      },
      {
        text: 'Wed',
        nextAction: {
          type: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw'],
          day: 'Tonight'
        },
        id: 3,
        icon: ['Throw']
      },
      {
        id: 4,
        text: 'Thu',
        nextAction: { day: 'Tonight', type: ['Burn'] },
        icon: ['Plastic', 'PET', 'Glass', 'Can', 'Cardboard', 'Throw']
      },
      { icon: ['Burn'], text: 'Fri', id: 5, nextAction: { day: 'Monday night', type: ['Burn'] } },
      { id: 6, nextAction: { day: 'Monday night', type: ['Burn'] }, text: 'Sat', icon: [] }
    ]
  }),
  (groceries = {
    rotation: {
      0: ['A203', 'B202'],
      1: ['A204', 'B203'],
      2: ['A205', 'B204'],
      3: ['A2061', 'A2062'],
      4: ['A101', 'B101'],
      5: ['A1021', 'B102'],
      6: ['A1022', 'B103'],
      7: ['A201', 'B104'],
      8: ['A202', 'B201']
    },
    needs: []
  })
