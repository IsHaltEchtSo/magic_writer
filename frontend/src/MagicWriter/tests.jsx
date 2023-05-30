import {MagicArea} from './components.jsx';

import {DefaultText} from './Textarea/constants.jsx';

import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

/**
 *
 * @param {JSX} jsx The JSX to be rendered and then tested
 * @return {object} The User and Screen
 */
function setupUser(jsx) {
  return {
    user: userEvent.setup(),
    screen: render(jsx),
  };
}

test('state persistence of text', () => {
  localStorage.setItem('textAreaText', DefaultText.DUMMY);

  const {screen: {getByTestId}} = setupUser(<MagicArea />);

  expect(getByTestId('text-area')).toHaveTextContent(DefaultText.DUMMY);

  localStorage.removeItem('textAreaText');
});

test('toggle between write and edit', async () => {
  const {user, screen: {getByTestId}} = setupUser(<MagicArea />);

  const toggleReadabilityButton = getByTestId('toggleButton');

  expect(getByTestId('text-area'))
      .toHaveTextContent(DefaultText.MAGIC_AREA_READABLE);

  await user.click(toggleReadabilityButton);

  expect(getByTestId('text-area'))
      .toHaveValue(DefaultText.MAGIC_AREA_UNREADABLE);
});


