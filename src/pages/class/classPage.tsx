import { useState } from 'react'
import { LuTrash, LuEdit, LuXCircle } from 'react-icons/lu'
import Popup from '../../components/popup/popup'
const ClassPage = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <div>
            <div className="p-10" >
                <div className="flex p-4 justify-between items-center">
                    <h1 className="font-bold text-2xl">List Class</h1>
                    <button type="button" onClick={() => handleOpen()} className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center">Add Class</button>
                </div>
                {
                    open && (
                        <Popup onConfirm={handleClose}>
                            <div className="relative w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow">
                                    <button type="button" onClick={() => handleClose()} className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 rounded-full text-black w-8 h-8 inline-flex justify-center items-center" data-modal-hide="authentication-modal"><LuXCircle size={20} />
                                    </button>
                                    <div className="px-6 py-6 lg:px-8">
                                        <h3 className="mb-4 text-xl font-bold text-black">Add Class</h3>
                                        <form className="space-y-4" action="#">
                                            <div>
                                                <label className="block text-sm font-medium text-black">Name Class</label>
                                                <input type="text" name="email" className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5" />
                                            </div>
                                            <div className="flex gap-2 py-2 justify-end">
                                                <button type="submit" onClick={() => handleClose()} className=" text-white bg-[#E05252] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                                                <button type="submit" className=" text-white bg-[#03034F] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center">Add</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    )
                }
                <div className="relative py-4 overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left border-4 text-black">
                        <thead className="text-xs text-black uppercase border-b-2 border-b-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name Class
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    Frontend Batch 15
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <div className="cursor-pointer"><LuTrash size={20} /></div>
                                    <div className="cursor-pointer"><LuEdit size={20} /></div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Backend Golang Batch 18
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <div className="cursor-pointer"><LuTrash size={20} /></div>
                                    <div className="cursor-pointer"><LuEdit size={20} /></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="flex justify-end gap-x-2">
                        <button type="button" className="font-medium text-blak bg-blak hover:bg-[#3E31DF] hover:text-white border-2  rounded-full text-[12px] px-7 py-2 text-center">Previous</button>
                        <button type="button" className="font-medium text-black bg-blacke hover:bg-[#3E31DF] hover:text-white border-2 rounded-full text-[12px] px-10 py-2 text-center">Next </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassPage