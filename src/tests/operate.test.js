import operate from '../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('soustract 50 - 15 to equal 35', () => {
  expect(operate(50, 15, '-')).toBe('35');
});

test('multiply 3 x 8 to equal 24', () => {
  expect(operate(3, 8, 'x')).toBe('24');
});

test('divide 950 ÷ 5 to equal 190', () => {
  expect(operate(950, 5, '÷')).toBe('190');
});

test('soustract 46 % 6 to equal 4', () => {
  expect(operate(46, 6, '%')).toBe('4');
});
