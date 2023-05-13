import  {Link } from 'react-router-dom'

import NavigationBar from "./components/navbar";
import MagicArea from './components/magicarea';

export default function WriterPage() {
    return (
        <>
            <NavigationBar />
            <h1>Magic Writer/Editor</h1>
            <MagicArea className='writerArea' />
            <Link to='/writer'>Toggle</Link>
            <Link to='/download'>Download</Link>
        </>
    )
}