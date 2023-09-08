import Popup from '../../components/popup/popup';
import { LuXCircle } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

interface DataMentee {
  full_name: string,
  class: string,
  education_type: string,
  phone: string,
  telegram: string,
  email: string
}
interface Datafeedback {
  notes: string,
  status: string
}
interface Datauser {
  id_mentee: number,
  name: string
}
const DetailFeedPage = () => {
  const [open, setOpen] = useState(false);
  const [datamentee, setDataMentee] = useState<DataMentee>();
  const [feedback, setFeedback] = useState<Datafeedback[]>([]);
  const [datauser, setDatauser] = useState<Datauser[]>([]);
  const getItem: any = Cookies.get('account');
  const location = useLocation();
  const id = location?.state?.id;

  const getuser = async () => {
    const token = JSON.parse(getItem);
    await axios
      .get(`/mentees/${id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setDataMentee(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getFeedback = () => {
    const token = JSON.parse(getItem)
    axios.get(`/mentees/${id}/feedback`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })
      .then((response) => {
        setFeedback(response.data.data[0].feedbacks)
        setDatauser(response.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }

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
    getuser();
    getFeedback();
  }, [navigate]);
  return (
    <div className="px-8 py-10 container mx-auto">
      <div className="grid grid-cols-12 items-center px-4">
        <div className="col-span-12 py-2 mb-5 ">
          <h1 className="font-semibold text-2xl">Feedback</h1>
        </div>
        <div className="col-span-6">
          {
            datamentee ? (
              <div className="flex flex-col">
                <div>
                  <h1 className="text-3xl font-bold"> Nama : {datamentee.full_name}</h1>
                </div>
                <div>
                  <p className="text-md"> <span className='font-semibold'>Class :</span>  {datamentee.class ? datamentee.class : "belum ada class"}</p>
                </div>
                <div>
                  <h1 className="text-md"> <span className='font-semibold'>Education :</span>{datamentee.education_type ? datamentee.education_type : "belum ada riwayat edukasi"}</h1>
                </div>
              </div>
            ) : null
          }

        </div>
        <div className="col-span-6 flex justify-end">
          {
            datamentee ? (
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-xl font-semibold">
                    phone : <span className="font-normal"> {datamentee.phone} </span>
                  </h1>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    telegram : <span className="font-normal"> {datamentee.telegram}</span>
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    email : <span className="font-normal"> {datamentee.email}</span>
                  </p>
                </div>
              </div>
            ) : null
          }
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
      {
        feedback ? (feedback.map((element, index) => {
          return (
            <div className="space-y-3" key={index}>
              <div className="border-2 flex gap-2 rounded-md border-black p-2">
                {
                  datauser.map((element, index) => {
                    return (
                      <div key={index} className="text-lg w-1/4 font-semibold">
                        <h1> ID {element.id_mentee}</h1>
                        <h1>{element.name}</h1>
                      </div>
                    )
                  })
                }
                <div className="gap-y-4 flex flex-col">
                  <p className="text-lg">
                    {element.notes}
                  </p>
                  <div className="font-semibold text-lg">
                    <p>Status {element.status}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })) : (
          <>
          Tidak Ada Data Feedback
          </>
        )
      }
    </div>
  );
};

export default DetailFeedPage;
