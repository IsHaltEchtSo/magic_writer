import MagicArea from '../src/components/magicarea'
import { messages } from '../src/constants'

import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'



function setupUser(jsx) {
  return {
    user: userEvent.setup(),
    screen: render(jsx)
  }
}

test('The Magicarea accepts text input', async () => {
  const { user, screen: {getByTestId} } = setupUser(<MagicArea />)

  expect(getByTestId('text-area')).toHaveValue(messages.magicArea)

  await user.tripleClick(getByTestId('text-area'))
    .then(async () => {await user.keyboard('Hello!')})
  
  expect(getByTestId('text-area')).toHaveValue('Hello!')
})

test('state persistence of text', () => {
  localStorage.setItem('text', 'some dummy text')
  const { screen: {getByTestId} } = setupUser(<MagicArea />)

  expect(getByTestId('text-area')).toHaveValue('some dummy text')

  localStorage.removeItem('text')
})

test('toggle between write and edit', async () => {
  const { user, screen: {getByTestId} } = setupUser(<MagicArea />)
  const toggleButton = getByTestId('toggleButton')

  expect(getByTestId('text-area')).toHaveValue(messages.magicAreaNormalCharacters)
  
  await user.click(toggleButton)
  
  expect(getByTestId('text-area')).toHaveValue(messages.magicAreaAsteriskedCharacters)
})



