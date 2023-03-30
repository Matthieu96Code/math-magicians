import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
