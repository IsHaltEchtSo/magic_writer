import {LandingPage} from './view.jsx';
import {LandingPageContent} from './components.jsx';

import {renderWithRouterContext} from '../NavigationBar/index.jsx';

import React from 'react';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Testing the LandingPage component', () => {
  test('Landing Page renders with Navigation Bar', () => {
    renderWithRouterContext(<LandingPage />);

    expect(screen.getByTestId('navigation-bar_container')).toBeInTheDocument();
  });
});

describe('Testing the LandingPageContent component', () => {
  test('Landing Page has content', () => {
    renderWithRouterContext(<LandingPageContent />);
    const header = screen.getByText(/Magic/);
    const paragraphOne = screen.getByText(/essays/);
    const paragraphTwo = screen.getByText(/distraction/);

    expect(header.innerHTML)
        .toBe('MagicWriter');
    expect(paragraphOne.innerHTML)
        .toBe('helps you write comments, essays and all kinds of text');
    expect(paragraphTwo.innerHTML)
        .toBe('- without distraction from your own thoughts');
  });
});

