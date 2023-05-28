import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Download} from '../src/components/downloadcontent';


describe('Testing Landing Page', () => {
  beforeEach(() => {
    render(<Download />);
  });

  test('the header', () => {
    const header = screen.getByText(/download/);
    expect(header.innerHTML).toBe('Your download is starting...');
  });
});
