import NavigationBar from "./components/navbar";
import MagicArea from './components/magicarea';

import { Link } from 'react-router-dom'



export default function MagicWriterPage() {
    return (
        <>
            <NavigationBar />
            <h1>Magic Writer/Editor</h1>
            <MagicArea className='writer-area' />
            <Link to='/download'>Download</Link>
        </>
    )
}