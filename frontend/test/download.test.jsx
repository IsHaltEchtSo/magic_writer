import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {DownloadPageContent} from '../src/components/downloadContent';


describe('Testing Landing Page', () => {
  beforeEach(() => {
    render(<DownloadPageContent />);
  });

  test('the header', () => {
    const header = screen.getByText(/download/);
    expect(header.innerHTML).toBe('Your download is starting...');
  });
});
