import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const component = renderer.create(
    <Calculator />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// it('changes the text when the button is clicked', () => {
//   const { getByText } = render(<Calculator />);
//   const button = getByText('9');
//   const text = getByText('0');

//   fireEvent.click(button);

//   expect(text.textContent).toBe('9');
// });
