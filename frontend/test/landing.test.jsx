import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {IndexPageContent} from '../src/components/indexpagecontent';


describe('Testing Landing Page', () => {
  beforeEach(() => {
    render(<IndexPageContent />);
  });

  test('the header', () => {
    const header = screen.getByText(/Landing/);
    expect(header.innerHTML).toBe('Landing Page');
  });

  test('the body', () => {
    const paragraph = screen.getByText(/This is/);
    const paragraphTwo = screen.getByText(/be pictures/);

    expect(paragraph.innerHTML)
        .toBe('This is where stuff about the Magic Writer would be written.');
    expect(paragraphTwo.innerHTML)
        .toBe('And there would be pictures. Ohhh, beautiful pictures! ');
  });
});
