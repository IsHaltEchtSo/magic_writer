import { modes } from '../constants'
import Toolbar from './toolbar'
import TextArea from './textarea'

import React, { useState, useEffect } from 'react'



export default function MagicArea() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || modes.write)
  
  const [textStyles, setTextStyles] = useState({'fontStyle': 'normal', 
                                                'fontWeight': 'normal', 
                                                'textDecoration': 'none'})

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  const handleToggleClick = () => {
    if (mode === modes.edit) {
      setMode(modes.write)
    } else {
      setMode(modes.edit)
    }
  }

  return (
    <>
      <Toolbar textStyles={textStyles} setStyles={setTextStyles} />
      <TextArea textStyles={textStyles} mode={mode}/>
      <button onClick={handleToggleClick}>Toggle</button>
    </>
  )
}