import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout