/* eslint-disable no-multi-str */
export const DefaultText = {
  'READABLE_DUMMY': 'some dummy text',
  'UNREADABLE_DUMMY': '**** ***** ****',
  'WELCOME_INSTRUCTIONS': "\
Hey there and welcome! This application allows you to \
toggle your text between a readable and non-readable version; \
all you need to do is to click the icon above (the asterisk). \n\n\
As you start using this application you might notice that it's very convenient \
to write text in a non-readable format because you're not losing \
any creative flow - even when you're looking at your screen. \n\n\
Once your done with outputting all your crazy ideas \
you can toggle back to see and edit your text. You can also close this \
site and come back to it at any time - your text is stored locally on your \
browser and won't disappear unless you clear its local storage. \n\n\
So... go ahead, delete all this stuff and start writing. \n\nHave a blast!",
};

export const ASTERISK = '*';

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
