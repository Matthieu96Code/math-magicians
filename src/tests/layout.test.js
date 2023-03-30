import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';

test('Layout renders correctly', () => {
  const { container } = render(
    <Router>
      <Layout />
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
