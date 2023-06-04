import {NavigationBar} from './components.jsx';
import {renderWithRouterContext} from './helpers.jsx';

import {screen} from '@testing-library/react';
import React from 'react';


test('Navigation Bar has all links', () => {
  renderWithRouterContext(<NavigationBar />);

  expect('/')
      .toBe(screen.getByTestId('home-link').pathname);
  expect('/writer')
      .toBe(screen.getByTestId('writer-link').pathname);
});
