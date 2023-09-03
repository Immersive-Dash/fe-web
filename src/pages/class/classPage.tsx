import { LuTrash, LuEdit } from 'react-icons/lu'
const ClassPage = () => {
    return (
        <div>
            <div className="p-10" >
                <div className="flex p-4 justify-between items-center">
                    <h1 className="font-bold text-2xl">List Class</h1>
                    <button type="button" className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center">Add Class</button>
                </div>
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