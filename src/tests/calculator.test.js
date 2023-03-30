import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const component = renderer.create(
    <Calculator />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('updates screen when number buttons is clicked => 2,5,0', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('0'));
  expect(screen.getByText('250')).toBeInTheDocument();
});

it('updates screen when make a operation => 8,+,13,=', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('21')).toBeInTheDocument();
});
