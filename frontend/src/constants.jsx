export const specialCharacters = [
    ' ', '\n', '\t',
    ',', '.', '!', '?', ';', ':',
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