import {MagicWriterPage} from './view.jsx';
import {MagicArea} from './components.jsx';

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
    screen: render(<MagicArea />),
  };
}

describe('Testing the MagicWriterPage component', () => {
  test('MagicWriter Page renders with Navigation Bar', () => {
    renderWithRouterContext(<MagicWriterPage />);

    expect(screen.getByTestId('navigation-bar_container')).toBeInTheDocument();
  });
});

describe('Testing the MagicArea component', () => {
  test('state persistence of text', () => {
    localStorage.setItem('textAreaText', DefaultText.DUMMY);

    const {screen: {getByTestId}} = renderMagicAreaWithUser();

    expect(getByTestId('text-area')).toHaveTextContent(DefaultText.DUMMY);

    localStorage.removeItem('textAreaText');
  });

  test('toggle between write and edit', async () => {
    const {user, screen: {getByTestId}} = renderMagicAreaWithUser();

    const toggleReadabilityButton = getByTestId('toggleButton');

    expect(getByTestId('text-area'))
        .toHaveTextContent(DefaultText.MAGIC_AREA_READABLE);

    await user.click(toggleReadabilityButton);

    expect(getByTestId('text-area'))
        .toHaveValue(DefaultText.MAGIC_AREA_UNREADABLE);
  });
});

