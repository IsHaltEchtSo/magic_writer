import {Toolbar} from './components';

import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Sets up the Toolbar with Mock functions for this test suit
 * @return {object}
 */
function setupToolbar() {
  const stateMock = jest.fn();
  const setStateMock = jest.fn();
  return (
    render(<Toolbar textStyles={stateMock} setTextStyles={setStateMock}/>)
  );
}

test('The Toolbar contains 3 Toolbar Buttons', () => {
  const {getByTestId} = setupToolbar();
  const italicButton = getByTestId('italic-button');
  const boldButton = getByTestId('bold-button');
  const underlineButton = getByTestId('underline-button');

  expect(italicButton).toBeInTheDocument();
  expect(boldButton).toBeInTheDocument();
  expect(underlineButton).toBeInTheDocument();
});

test.todo('Test that toggling a button de-/activates it');
