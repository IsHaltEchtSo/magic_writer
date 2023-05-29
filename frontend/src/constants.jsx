export const ALWAYS_READABLE_CHARACTERS = [
  ' ', '\n', '\t',
  ',', '.', '!', '?', ';', ':', '/', '|', '\\',
  '\'', '\"',
];

export const TextAreaEventType = {
  'INSERT_CHARACTER': 'insertText',
  'DELETE_CHARACTER': 'deleteContentBackward',
  'INSERT_LINE': 'insertLineBreak',
  'DELETE_LINE': 'deleteSoftLineBackward',
};

export const MagicAreaMode = {
  'WRITE': 'write',
  'EDIT': 'edit',
};

export const ToolbarButtonStatus = {
  'ACTIVATED': 'activated',
  'DEACTIVATED': 'deactivated',
};

export const DefaultText = {
  'MAGIC_AREA_READABLE': 'This is where you start your journey!',
  'MAGIC_AREA_UNREADABLE': '**** ** ***** *** ***** **** *******!',
  'DUMMY': 'some dummy text',
};

export const DefaultObject = {
  'TEXT_STYLES': {
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'textDecoration': 'none'},
};

export const ASTERISK = '*';
