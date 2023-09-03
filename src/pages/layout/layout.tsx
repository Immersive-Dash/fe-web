import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex border-r-1 border shadow-lg bottom-0 h-screen flex-col w-1/5">
                    <Sidebar />
                </div>
                <div className="w-full flex flex-col">
                    <Navbar />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout