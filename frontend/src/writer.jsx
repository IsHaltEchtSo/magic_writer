import  {Link } from 'react-router-dom'

import NavigationBar from "./components/navbar";

export default function WriterPage() {
    return (
        <>
            <NavigationBar />
            <h1>Magic Writer/Editor</h1>
            <textarea></textarea>
            <br />
            <Link to='/writer'>Toggle</Link>
        </>
    )
}