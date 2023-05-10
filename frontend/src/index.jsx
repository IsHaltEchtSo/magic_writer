import { Link } from 'react-router-dom'

export default function IndexPage() {
    return (
        <>
            <h1>Index Page</h1>
            <Link to='/writer'>Writer Link</Link>
        </>
    )
}