import {MagicWriterPage} from './view.jsx';
import {MagicWriter} from './components.jsx';

import {DefaultText} from './Textarea/constants.jsx';
import {renderWithRouterContext} from '../NavigationBar/index.jsx';

import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

/**
 * Renders the MagicArea component and sets up a User to interact with it
 *
 * @param {JSX} jsx The JSX to be rendered and then tested
 * @return {object} The User and Screen
 */
function renderMagicAreaWithUser() {
  return {
    user: userEvent.setup(),
    screen: render(<MagicWriter />),
  };
}

describe('Testing the MagicWriterPage component', () => {
  test('MagicWriter Page renders with Navigation Bar', () => {
    renderWithRouterContext(<MagicWriterPage />);

    expect(screen.getByTestId('navigation-bar_container')).toBeInTheDocument();
  });
});

describe('Testing the TextArea component', () => {
  test('state persistence of text', () => {
    localStorage.setItem('textAreaText', DefaultText.DUMMY);

    const {screen: {getByTestId}} = renderMagicAreaWithUser();

    expect(getByTestId('text-area')).toHaveTextContent(DefaultText.DUMMY);

    localStorage.removeItem('textAreaText');
  });

  test('toggle between write and edit', async () => {
    localStorage.setItem('textAreaText', DefaultText.READABLE_DUMMY);

    const {user, screen: {getByTestId}} = renderMagicAreaWithUser();

    const toggleReadabilityButton = getByTestId('magic-writer_button');

    expect(getByTestId('text-area'))
        .toHaveTextContent(DefaultText.READABLE_DUMMY);

    await user.click(toggleReadabilityButton);

    expect(getByTestId('text-area'))
        .toHaveTextContent(DefaultText.UNREADABLE_DUMMY);
  });
});

