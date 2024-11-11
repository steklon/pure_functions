import characterState from '../app';

describe.each([
  {
    character: {
      name: 'Маг',
      health: 60,
    },
    expected: 'healthy',
  },
  {
    character: {
      name: 'Рыцарь',
      health: 30,
    },
    expected: 'wounded',
  },
  {
    character: {
      name: 'Гном',
      health: 5,
    },
    expected: 'critical',
  },
])('function characterState', ({ character, expected }) => {
  test(`character status check: ${expected}`, () => {
    expect(characterState(character)).toBe(expected);
  });
});
