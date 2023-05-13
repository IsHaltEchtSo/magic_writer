// import { useState } from 'react'

export default function MagicArea() {
    // const specialChars = [
    //     '\n', '\t', ' '
    // ]
    // const [text, setText] = useState('This is where you start your journey!')

    // const handleChange = (event) => {
    //     setText(event.target.value)
    // }

    // function magicallyDisplay(text) {
    //     let magicText = ""
    //     for (let i = 0; i < text.length; i++) {
    //         if (text) {
    //             console.log("new line detected")
    //         } else {
    //             magicText += "*"
    //         }
    //     }
    //     return magicText
    // }

    return (
        <>
            <textarea 
                className="magicArea"
                // onChange={handleChange}
                value='This is where you start your journey!'>
                
            </textarea>
        </>
    )
}