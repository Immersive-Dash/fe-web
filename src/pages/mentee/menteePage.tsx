import { LuEdit, LuTrash, LuBookOpen } from 'react-icons/lu';

const MenteePage = () => {
  return (
    <div className="p-10">
      <div className="flex p-4 justify-between items-center">
        <h1 className="font-bold text-2xl">List Mentee</h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-slate-200 py-2 px-2 rounded"
            placeholder="Search"
          />
          <button
            type="button"
            className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
          >
            Search
          </button>
          <button
            type="button"
            className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
          >
            Add New
          </button>
        </div>
      </div>
      <div className="flex justify-end px-4 gap-2">
        <div className="flex flex-col">
          <label className="">Class</label>
          <select className="py-2 px-2 w-44 rounded bg-slate-200">
            <option>BE 18</option>
            <option>FE 15</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="">Status</label>
          <select className="py-2 px-2 w-44 rounded bg-slate-200">
            <option>Active</option>
            <option>Graduate</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="">Category</label>
          <select className="py-2 px-2 w-44 rounded bg-slate-200">
            <option>IT</option>
            <option>Non - IT</option>
          </select>
        </div>
        <div className="flex flex-col justify-end">
          <button
            type="button"
            className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="relative py-4 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left border-4 text-black">
          <thead className="text-xs text-black uppercase border-b-2 border-b-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-center">
              <th scope="row" className="px-6 py-4">
                1
              </th>
              <td className="px-6 py-4">Asep</td>
              <td className="px-6 py-4">FE 15</td>
              <td className="px-6 py-4">Actiove</td>
              <td className="px-6 py-4">IT</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4 flex gap-2 justify-between">
                <div className="cursor-pointer">
                  <LuBookOpen size={20} />
                </div>
                <div className="cursor-pointer">
                  <LuTrash size={20} />
                </div>
                <div className="cursor-pointer">
                  <LuEdit size={20} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-end gap-x-2">
          <button
            type="button"
            className="font-medium text-blak bg-blak hover:bg-[#3E31DF] hover:text-white border-2  rounded-full text-[12px] px-7 py-2 text-center"
          >
            Previous
          </button>
          <button
            type="button"
            className="font-medium text-black bg-blacke hover:bg-[#3E31DF] hover:text-white border-2 rounded-full text-[12px] px-10 py-2 text-center"
          >
            Next{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenteePage;
