import {DownloadPage} from './view.jsx';
import {DownloadPageContent} from './components.jsx';

import {renderWithRouterContext} from '../NavigationBar/index.jsx';

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Testing the DownloadPage component', () => {
  test('Download Page renders with Navigation Bar', () => {
    renderWithRouterContext(<DownloadPage />);

    expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
  });
});

describe('Testing the DownloadPageContent component', () => {
  test('Download Page has content', () => {
    render(<DownloadPageContent />);
    const header = screen.getByText(/download/);
    expect(header.innerHTML).toBe('Your download is starting...');
  });
});
