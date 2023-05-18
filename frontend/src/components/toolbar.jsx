import '../assets/css/toolbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';



export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <button 
        className={`toolbar_button ${props.textStyles.fontStyle === 'italic' ? 'active' : ''}`}
        onClick={() => {
          let stylesCopy = { ... props.textStyles}
          if (props.textStyles.fontStyle === 'normal') {
            stylesCopy.fontStyle = 'italic'
            props.setStyles(stylesCopy)
          } else if (props.textStyles.fontStyle === 'italic') {
            stylesCopy.fontStyle = 'normal'
            props.setStyles(stylesCopy)
          }
        }}
      >
        <FontAwesomeIcon className='toolbar_button-icon' icon={faItalic} />
      </button>

      <button 
        className={`toolbar_button ${props.textStyles.fontWeight === 'bold' ? 'active' : ''}`}
        onClick={() => {
          let stylesCopy = { ... props.textStyles}
          if (props.textStyles.fontWeight === 'normal') {
            stylesCopy.fontWeight = 'bold'
            props.setStyles(stylesCopy)
          } else if (props.textStyles.fontWeight === 'bold') {
            stylesCopy.fontWeight = 'normal'
            props.setStyles(stylesCopy)
          }
        }}
      >
        <FontAwesomeIcon className='toolbar_button-icon' icon={faBold} />
      </button>

      <button 
        className={`toolbar_button ${props.textStyles.textDecoration === 'underline' ? 'active' : ''}`}
        onClick={() => {
          let stylesCopy = { ... props.textStyles}
          if (props.textStyles.textDecoration === 'none') {
            stylesCopy.textDecoration = 'underline'
            props.setStyles(stylesCopy)
          } else if (props.textStyles.textDecoration === 'underline') {
            stylesCopy.textDecoration = 'none'
            props.setStyles(stylesCopy)
          }
        }}
      >
        <FontAwesomeIcon className='toolbar_button-icon' icon={faUnderline} />
      </button>
    </div>
  )
}