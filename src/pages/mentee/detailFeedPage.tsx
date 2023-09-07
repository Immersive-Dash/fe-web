import Popup from '../../components/popup/popup';
import { LuXCircle } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
const DetailFeedPage = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<[]>([]);
  const getItem: any = Cookies.get('account');
  const location = useLocation();
  const id = location?.state?.id;

  const getFeedback = async (id: number) => {
    const token = JSON.parse(getItem);
    await axios
      .get(`/mentee/${id}/feedback`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setFeedback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/');
    }
    if (id) {
      getFeedback(id);
    }
  }, [navigate]);

  return (
    <div className="px-8 py-10 container mx-auto">
      <div className="grid grid-cols-12 items-center px-4">
        <div className="col-span-12 py-2 mb-5 ">
          <h1 className="font-semibold text-2xl">Feedback</h1>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-bold">Asep Udin</h1>
            </div>
            <div>
              <p className="text-xl">Frontend Batch 15</p>
            </div>
            <div>
              <h1 className="text-xl  ">TI</h1>
            </div>
            <div>
              <h1 className="text-xl">Universitas Brawijaya</h1>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex justify-end">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-xl font-semibold">
                phone : <span className="font-normal"> 085729830543</span>{' '}
              </h1>
            </div>
            <div>
              <p className="text-xl font-semibold">
                telegram : <span className="font-normal"> @udinasep</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                discord : <span className="font-normal"> @udinasep#123</span>{' '}
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                email : <span className="font-normal"> udinasep@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end py-5  items-center px-4">
        <button
          onClick={() => handleOpen()}
          type="button"
          className=" font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-5 py-3 text-center"
        >
          Add New Log
        </button>
      </div>
      {open && (
        <Popup onConfirm={handleClose}>
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                onClick={() => handleClose()}
                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 rounded-full text-black w-8 h-8 inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
              >
                <LuXCircle size={20} />
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Add New Feedback
                </h3>
                <form className="space-y-4" action="#">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-black">
                      Feedback
                    </label>
                    <textarea
                      name="email"
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-black">
                      Status
                    </label>
                    <select className="py-2 px-2 w-full rounded bg-slate-200">
                      <option>Interviw</option>
                      <option>Join Class</option>
                      <option>Unit 1</option>
                      <option>Unit 2</option>
                      <option>Unit 3</option>
                      <option>Placement</option>
                      <option>Graduate</option>
                    </select>
                  </div>
                  <div className="flex gap-2 py-2 justify-end">
                    <button
                      type="submit"
                      onClick={() => handleClose()}
                      className=" text-white bg-[#E05252] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" text-white bg-[#3E31DF] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Popup>
      )}
      <div className="space-y-3">
        <div className="border-2 flex gap-2 rounded-md border-black p-2">
          <div className="text-lg w-1/4 font-semibold">
            <h1>End of Section</h1>
            <h1>Bagas</h1>
            <p>Sep 01, 2023</p>
          </div>
          <div className="gap-y-4 flex flex-col">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="font-semibold text-lg">
              <p>Change Status: Continue Section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFeedPage;
