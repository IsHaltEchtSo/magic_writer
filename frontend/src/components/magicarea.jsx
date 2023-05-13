import { useState } from 'react'

export default function MagicArea() {
    const replacementCharacters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '@'   
    ]
    const [text, setText] = useState('This is where you start your journey!')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    function magicallyDisplay(text) {
        let magicText = ""
        for (let i = 0; i < text.length; i++) {
            if (replacementCharacters.includes(text[i])) {
                magicText += "*"
            } else {
                magicText += text[i]
            }
        }
        return magicText
    }

    return (
        <>
            <textarea 
                className="magicArea"
                onChange={handleChange}
                value={magicallyDisplay(text)} 
            />
        </>
    )
}