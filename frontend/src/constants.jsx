export const specialCharacters = [
  ' ', '\n', '\t',
  ',', '.', '!', '?', ';', ':', '/', '|', '\\',
  '\'', '\"'
]

export const eventTypes = {
  'insertChar': 'insertText',
  'deleteChar': 'deleteContentBackward',
  'insertLine': 'insertLineBreak',
  'deleteLine': 'deleteSoftLineBackward',
}

export const modes = {
  'write': 'write',
  'edit': 'edit'
}

export const messages = {
  'magicAreaNormalCharacters': 'This is where you start your journey!',
  'magicAreaAsteriskedCharacters': '**** ** ***** *** ***** **** *******!'
}