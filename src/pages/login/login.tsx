import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/spinner/spinner"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('account')) {
            navigate('/dashboard')
        }
    }, [])


    const handleSubmit = () => {
        setTimeout(() => {
            axios.post('https://62c3aad4876c4700f540123e.mockapi.io/login', {
                email: email,
                password: password
            })
                .then((response) => {
                    if (response.status === 201) {
                        navigate('/dashboard')
                        setStatus(false)
                        localStorage.setItem('account', response.data)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setStatus(false)
                })
        }, 500);
        setStatus(true)
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="space-y-3">
                            <h1 className="text-xl flex justify-center text-black font-bold leading-tight tracking-tightmd:text-2xl">
                                Login
                            </h1>
                            <p className="text-[12px] text-[#423E3E] text-center">enter your credentials to acess your account</p>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label className=" mb-2 text-sm font-semibold text-[#5d5c5c]">Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@email.com" required />
                            </div>
                            <div>
                                <label className=" mb-2 text-sm font-semibold text-[#5d5c5c]">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••" required />
                            </div>
                            <div className="flex justify-center">
                                <button type="button" onClick={() => handleSubmit()} className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-16 py-3 text-center">{status ? <Spinner /> : "Login"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login