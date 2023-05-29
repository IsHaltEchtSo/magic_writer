import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {LandingPageContent} from '../src/components/landingPageContent';


describe('Testing Landing Page', () => {
  beforeEach(() => {
    render(<LandingPageContent />);
  });

  test('the header', () => {
    const header = screen.getByText(/Landing/);

    expect(header.innerHTML).toBe('Landing Page');
  });

  test('the body', () => {
    const paragraphOne = screen.getByText(/This is/);
    const paragraphTwo = screen.getByText(/be pictures/);

    expect(paragraphOne.innerHTML)
        .toBe('This is where stuff about the Magic Writer would be written.');
    expect(paragraphTwo.innerHTML)
        .toBe('And there would be pictures. Ohhh, beautiful pictures! ');
  });
});
