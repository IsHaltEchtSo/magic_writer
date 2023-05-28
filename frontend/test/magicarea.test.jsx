import {MagicArea} from '../src/components/magicarea';
import {MESSAGES} from '../src/constants';

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

test('The Magicarea accepts text input', async () => {
  const {user, screen: {getByTestId}} = setupUser(<MagicArea />);

  expect(getByTestId('text-area')).toHaveValue(MESSAGES.magicArea);

  await user.tripleClick(getByTestId('text-area'));
  await user.keyboard('Hello!');

  expect(getByTestId('text-area')).toHaveValue('Hello!');
});

test('state persistence of text', () => {
  localStorage.setItem('text', 'some dummy text');
  const {screen: {getByTestId}} = setupUser(<MagicArea />);

  expect(getByTestId('text-area')).toHaveValue('some dummy text');

  localStorage.removeItem('text');
});

test('toggle between write and edit', async () => {
  const {user, screen: {getByTestId}} = setupUser(<MagicArea />);
  const toggleButton = getByTestId('toggleButton');

  expect(getByTestId('text-area'))
      .toHaveValue(MESSAGES.MAGIC_AREA_NORMAL_TEXT);

  await user.click(toggleButton);

  expect(getByTestId('text-area'))
      .toHaveValue(MESSAGES.MAGIC_AREA_ASTERISKED_TEXT);
});


