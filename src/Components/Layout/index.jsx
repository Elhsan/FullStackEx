import layout from './style.css'
import { Link, Outlet } from 'react-router-dom'

function Layout(props) {
    return (
        <>
            <nav style={layout}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='login'>
                        <Link to="/About">login</Link>
                    </li>
                    <li className='register'>
                        <Link to="/404">register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout