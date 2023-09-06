import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/spinner/spinner"
import { toast } from "react-hot-toast"
import Cookies from "js-cookie"
import { LuEye, LuEyeOff } from "react-icons/lu"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (Cookies.get('account')) {
            navigate('/dashboard')
        }
    }, [navigate])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setStatus(true);

        axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
            email: email,
            password: password
        }, {
            timeout: 5000
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/dashboard');
                    toast.success("Login Berhasil");
                    setStatus(false);
                    Cookies.set('account', JSON.stringify(response.data.data), { expires: 1 / 24 });
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 500) {
                    toast.error('Email atau password salah');
                } else {
                    toast.error('Server tidak merespons. Mohon coba lagi nanti.');
                }
                setStatus(false);
            });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="space-y-3">
                            <h1 className="text-xl flex justify-center text-black font-bold leading-tight tracking-tightmd:text-2xl">
                                Login
                            </h1>
                            <p className="text-sm text-[#423E3E] text-center">enter your credentials to acess your account</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label className=" mb-2 text-sm font-semibold text-[#5d5c5c]">Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@email.com" required />
                            </div>
                            <div>
                                <label className="mb-2 text-sm font-semibold text-[#5d5c5c]">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        name="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 top-2/4 transform -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <LuEye /> : <LuEyeOff />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-16 py-3 text-center">{status ? <Spinner /> : "Login"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login