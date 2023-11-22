import {timestampToFormattedDate} from '../date';

test('timestampToFormattedDate returns the correct date', () => {
  const formattedDate = timestampToFormattedDate(1610913600000);
  expect(formattedDate).toBe('17/0/2021');
});
