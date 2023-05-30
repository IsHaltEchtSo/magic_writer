import {TextArea} from './components';
import {DefaultText} from './constants';

import {MagicAreaMode} from '../constants';

import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

/**
 *
 * @param {JSX} jsx The JSX to be rendered and then tested
 * @return {object} User and Screen objects
 */
function setupTextareaAndUser(jsx) {
  const stateMock = jest.fn();
  return {
    user: userEvent.setup(),
    screen: render(
        <TextArea textStyles={stateMock} magicAreaMode={MagicAreaMode.EDIT}/>),
  };
}

test('The Magicarea accepts text input', async () => {
  const {user, screen: {getByTestId}} = setupTextareaAndUser();

  expect(getByTestId('text-area'))
      .toHaveTextContent(DefaultText.MAGIC_AREA_READABLE);

  await user.tripleClick(getByTestId('text-area'));
  await user.keyboard(DefaultText.DUMMY);

  expect(getByTestId('text-area')).toHaveTextContent(DefaultText.DUMMY);
});