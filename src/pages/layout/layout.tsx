import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/sidebar"
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div className="flex">
            <div className="flex border-r-1 border shadow-lg flex-col w-1/5">
                <Sidebar />
            </div>
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Layout