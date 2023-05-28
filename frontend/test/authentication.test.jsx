import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  AuthenticationPageContent,
} from '../src/components/authenticationpagecontent';


describe('Testing Landing Page Content', () => {
  beforeEach(() => {
    render(<AuthenticationPageContent />);
  });

  test('the header', () => {
    const header = screen.getByText(/Auth/);
    expect(header.innerHTML).toBe('Authentication');
  });

  test('the body', () => {
    const paragraph = screen.getByText(/login or register/);

    expect(paragraph.innerHTML).toBe(
        'This shows either a login or register link or logouts immediately.');
  });
});
