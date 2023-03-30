import calculate from '../logic/calculate';

test('what happen when pressed 4', () => {
  const obj = {
    next: null,
    operation: null,
    total: null,
  };
  const buttonName = '4';
  expect(calculate(obj, buttonName)).toEqual({ next: '4', total: null });
});

test('from the previous result, what happen when pressed +', () => {
  const obj = {
    next: '4',
    operation: null,
    total: null,
  };
  const buttonName = '+';
  expect(calculate(obj, buttonName)).toEqual({ next: null, operation: '+', total: '4' });
});

test('from the previous result, what happen when pressed 8', () => {
  const obj = {
    next: null,
    operation: '+',
    total: '4',
  };
  const buttonName = '8';
  expect(calculate(obj, buttonName)).toEqual({ next: '8', operation: '+', total: '4' });
});

test('from the previous result, what happen when pressed =', () => {
  const obj = {
    next: '8',
    operation: '+',
    total: '4',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '12' });
});

test('what happen when pressed AC', () => {
  const obj = {
    next: '13',
    operation: '*',
    total: '250',
  };
  const buttonName = 'AC';
  expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: null });
});
