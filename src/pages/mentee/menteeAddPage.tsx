import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const MenteeAddPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/')
    }
  }, [navigate]);
  const getItem: any = Cookies.get('account')
  return (
    <div className="w-full">
      <div className="mx-6 ">
        <h1 className="text-2xl font-semibold py-5">Add Mentee</h1>
        <form action="">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name Mentee</label>
                <input
                  className=" border  rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Name Mentee"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Email"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Address</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Home Address</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Home Address"
                />
              </div>
            </div>

            <label className="font-semibold">Gender</label>
            <div className="flex justify-between w-60">
              <div className="m-2">
                <input className="mr-2" type="radio"></input>
                <label>Male</label>
              </div>

              <div className="m-2">
                <input className="mr-2" type="radio"></input>
                <label>Female</label>
              </div>
            </div>
            <h3 className="font-bold text-lg">Emergency Contact</h3>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Telegram URL</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Telegram URL"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Phone Number</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Phone Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Status</label>
                <select className="px-3 py-2  border rounded-sm">
                  <option>Anak Pertama</option>
                  <option>Anak Kedua</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Status Mentee</label>
                <select className="px-3 py-2  border rounded-sm">
                  <option>Active</option>
                  <option>Graduate</option>
                </select>
              </div>
            </div>

            <h3 className="font-bold text-lg">Education Data</h3>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Major</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Major"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Graduatet</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  placeholder="input Graduatet"
                />
              </div>
            </div>

            <label className="font-semibold">Type</label>
            <div className="flex justify-between w-80">
              <div className="m-2">
                <input className="mr-2" type="radio"></input>
                <label>Informatic</label>
              </div>

              <div className="m-2">
                <input className="mr-2" type="radio"></input>
                <label>Non Informatic</label>
              </div>
            </div>

            <div className="flex justify-center my-3 gap-3">
              <button
                type="button"
                className="font-semibold text-white bg-red-500 hover:bg-red-700 rounded-full text-sm px-10 py-3 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenteeAddPage;
