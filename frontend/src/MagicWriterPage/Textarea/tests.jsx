import {TextArea} from './components';
import {DefaultText} from './constants';

import {TextAreaMode} from '../constants';

import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

/**
 * Render the TextArea component and setup a User to interact with it
 *
 * @param {JSX} jsx The JSX to be rendered and then tested
 * @return {object} User and Screen objects
 */
function renderTextAreaWithUser() {
  const stateMock = jest.fn();
  return {
    user: userEvent.setup(),
    screen: render(
        <TextArea textStyles={stateMock} textAreaMode={TextAreaMode.EDIT}/>),
  };
}

test('The Magicarea accepts text input', async () => {
  localStorage.setItem('textAreaText', DefaultText.READABLE_DUMMY);
  const {user, screen: {getByTestId}} = renderTextAreaWithUser();

  expect(getByTestId('text-area'))
      .toHaveTextContent(DefaultText.READABLE_DUMMY);

  await user.tripleClick(getByTestId('text-area'));
  await user.keyboard(DefaultText.READABLE_DUMMY);

  expect(getByTestId('text-area'))
      .toHaveTextContent(DefaultText.READABLE_DUMMY);
});
