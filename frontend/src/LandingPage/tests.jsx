import {LandingPage} from './view.jsx';
import {LandingPageContent} from './components.jsx';

import {renderWithRouterContext} from '../NavigationBar/index.jsx';

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Testing the LandingPage component', () => {
  test('Landing Page renders with Navigation Bar', () => {
    renderWithRouterContext(<LandingPage />);

    expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
  });
});

describe('Testing the LandingPageContent component', () => {
  test('Landing Page has content', () => {
    render(<LandingPageContent />);
    const header = screen.getByText(/Landing/);
    const paragraphOne = screen.getByText(/This is/);
    const paragraphTwo = screen.getByText(/be pictures/);

    expect(header.innerHTML)
        .toBe('Landing Page');
    expect(paragraphOne.innerHTML)
        .toBe('This is where stuff about the Magic Writer would be written.');
    expect(paragraphTwo.innerHTML)
        .toBe('And there would be pictures. Ohhh, beautiful pictures! ');
  });
});

