import { Link, useLocation, useNavigate } from "react-router-dom"
import { LuHome, LuUsers, LuUser, LuBookMarked } from 'react-icons/lu'
import { useEffect } from "react";
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
        localStorage.removeItem('account')
        navigate('/login')

    }
    useEffect(() => {
        if (!localStorage.getItem('account')) {
            navigate('/login')
        }
    },[])
    return (
        <div>
            <div className="space-y-4 bg-white">
                <div className="px-4 py-5">
                    Alterra Immersive Dashboard
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
                <div className="absolute bottom-0 px-4 py-10">
                    <button type="button" onClick={() => handleLogout()} className="font-semibold text-black border-4 border-[#03034F] bg-white hover:bg-[#03034F] hover:text-white rounded-full text-sm px-10 py-3 text-center">logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar