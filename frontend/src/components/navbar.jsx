import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <div class='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/writer'>Magic Writer</Link>
            <Link to='/authentication'>Authentication</Link>
        </div>
    )
}