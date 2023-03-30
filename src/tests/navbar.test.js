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

  it('contains three navigation links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const links = getAllByRole('link');
    expect(links.length).toBe(3);
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('Calculator');
    expect(links[2]).toHaveTextContent('Quote');
  });
});
