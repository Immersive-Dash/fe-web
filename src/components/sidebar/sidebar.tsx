import { Link, useLocation, useNavigate } from "react-router-dom"
import { LuHome, LuUsers, LuUser, LuBookMarked, LuLogOut } from 'react-icons/lu'
import Cookies from "js-cookie"
const Sidebar = () => {
    const location = useLocation();
    const sideLink = [{
        id: 1,
        to: "/dashboard",
        url: <LuHome />,
        name: "Dashboard"
    }, {
        id: 2,
        to: "/mentee",
        url: <LuUsers />,
        name: "Mentee"
    }, {
        id: 3,
        to: "/user",
        url: <LuUser />,
        name: "User"
    }, {
        id: 4,
        to: "/class",
        url: <LuBookMarked />,
        name: "Class"
    }]
    const navigate = useNavigate()
    const handleLogout = () => {
        Cookies.remove('account')
        navigate('/login')
    }
    return (
        <div>
            <div className="space-y-4 bg-white">
                <div className="px-4 py-5">
                    <img src="../../../public/logo.png" className="w-3/5" alt="" />
                </div>
                {
                    sideLink.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="space-y-2 font-medium">
                                    <Link to={element.to}>
                                        <div
                                            className={`cursor-pointer flex items-center py-2 px-4 text-black hover:bg-[#03034F] hover:text-white ${location.pathname === element.to ? "bg-[#03034F] text-white" : ""
                                                }`}
                                        >
                                            <span>{element.url}</span>
                                            <h1 className="px-4 hidden md:block lg:block font-semibold text-sm">{element.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="absolute bottom-0 px-1 md:px-2 lg:px-2 py-10">
                    <div onClick={() => handleLogout()} className="font-semibold md:block lg:block text-black border-4 border-[#03034F] bg-white hover:bg-[#03034F] hover:text-white rounded-full text-sm px-2 lg:px-10 md:px-10 py-3 text-center">
                        <div className="flex items-center gap-2">
                        <LuLogOut />
                        <span className="hidden md:block lg:block">logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar