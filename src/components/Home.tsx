import { Link, Outlet } from "react-router-dom"


const Home = () => {
    return (
        <>
            <div><Link to="/">Home</Link></div>
            <ul>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/todos">TodoS</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Home