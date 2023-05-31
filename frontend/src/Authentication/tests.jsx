import {AuthenticationPage} from './index.jsx';
import {AuthenticationPageContent} from './components.jsx';

import {renderWithRouterContext} from '../NavigationBar/index.jsx';

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Testing the AuthenticationPage component', () => {
  test('Authentication Page renders with Navigation Bar', () => {
    renderWithRouterContext(<AuthenticationPage />);

    expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
  });
});

describe('Testing the AuthenticationPageContent component', () => {
  test('Authentication Page has content', () => {
    render(<AuthenticationPageContent />);
    const header = screen.getByText(/Auth/);
    const paragraph = screen.getByText(/login or register/);

    expect(header.innerHTML).toBe('Authentication');
    expect(paragraph.innerHTML).toBe(
        'This shows either a login or register link or logouts immediately.');
  });
});
