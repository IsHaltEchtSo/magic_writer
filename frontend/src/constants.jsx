export const SPECIAL_CHARACTERS = [
  ' ', '\n', '\t',
  ',', '.', '!', '?', ';', ':', '/', '|', '\\',
  '\'', '\"',
];

export const TEXTAREA_EVENT_TYPE = {
  'INSERT_CHARACTER': 'insertText',
  'DELETE_CHARACTER': 'deleteContentBackward',
  'INSERT_LINE': 'insertLineBreak',
  'DELETE_LINE': 'deleteSoftLineBackward',
};

export const MODES = {
  'WRITE': 'write',
  'EDIT': 'edit',
};

export const MESSAGES = {
  'MAGIC_AREA_NORMAL_TEXT': 'This is where you start your journey!',
  'MAGIC_AREA_ASTERISKED_TEXT': '**** ** ***** *** ***** **** *******!',
};
