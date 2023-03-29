import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/displayQuote';

it('renders correctly', () => {
  const component = renderer.create(
    <Quotes />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
