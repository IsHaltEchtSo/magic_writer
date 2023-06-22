import {ToggleButton} from './components';

import {TextAreaMode} from '../constants';

import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

/**
 * Render the ToggleButton component and setup a User to interact with it
 *
 * @param {JSX} jsx The JSX to be rendered and then tested
 * @return {object} User and Screen objects
 */
function renderToggleButtonWithUser() {
  const stateMock = jest.fn();
  return {
    user: userEvent.setup(),
    screen: render(
        <ToggleButton textAreaMode={TextAreaMode.EDIT} setTextAreaMode={XXXXX}/>),
  };
}

test('The ToggleButton toggles the mode', async () => {

});


test('The ToggleButton updates the localStorage', async () => {

});


localStorage.setItem('textAreaText', DefaultText.READABLE_DUMMY);
const {user, screen: {getByTestId}} = renderTextAreaWithUser();

expect(getByTestId('text-area'))
    .toHaveTextContent(DefaultText.READABLE_DUMMY);

await user.tripleClick(getByTestId('text-area'));
await user.keyboard(DefaultText.READABLE_DUMMY);

expect(getByTestId('text-area'))
    .toHaveTextContent(DefaultText.READABLE_DUMMY);
