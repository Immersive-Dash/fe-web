import { LuEdit, LuTrash, LuBookOpen, LuXCircle } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Popup from '../../components/popup/popup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import Spinner from '../../components/spinner/spinner';

interface Data {
  full_name: string;
  class: string;
  status: string;
  education_type: string;
  gender: string;
  id: number
}
interface DataClass {
  class: string
}
const MenteePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate();
  const [menteData, setmenteData] = useState<Data[]>([]);
  const [data, setData] = useState<any>(null);
  const [dataclass, setDataclass] = useState<DataClass[]>()
  const [inpclass, setInpclass] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [menteeid, setEditMenteeId] = useState(0)

  const getItem: any = Cookies.get('account');

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const getMente = async () => {
    const token = JSON.parse(getItem)
    try {
      const response = await axios.get(
        `/mentees`, {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      });
      setmenteData(response.data.data);
    } catch {
      console.log("belum ada data untuk menampilkan mentees");
    }
  };
  const handleshowClass = () => {
    const token = JSON.parse(getItem)
    axios.get(`/classes`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })
      .then((response) => {
        setDataclass(response.data)
      }).catch(() => {
        console.log("belum ada data untuk menampilkan class")
      })
  }
  const handleFilter = () => {
    const token = JSON.parse(getItem)
    axios.get(`/mentees?status=active`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })
      .then((response) => {
        setData(response.data)
      }).catch(() => {
        console.log("belum ada data untuk filter")
      })
  }
  const deleteMentee = (id: number) => {
    const token = JSON.parse(getItem)
    axios.delete(`/mentees/${id}`, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Data Mentee Berhasil di Hapus")
        }
        getMente()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/');
    }

    handleshowClass()
    getMente();
  }, []);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      class: 1,
      telegram: "",
      ephone: "",
      status: ""
    },
    onSubmit: (values) => {
      const token = JSON.parse(getItem)
      axios.put(`/mentees/${menteeid}`, {
        full_name: values.full_name,
        email: values.email,
        phone: values.phone,
        telegram: values.telegram,
        status: values.status,
        emergency_phone: values.ephone,
        class: values.class
      }, {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      }).then((response) => {
        if (response.data.code === 200) {
          toast.success(response.data.message)
        }
        setOpenEdit(false)
        getMente()
      }).catch((error) => {
        console.log(error)
        if (error.response.data.code === 500) {
          toast.error("Gagal Mengedit Data mentee")
          setOpenEdit(false)
        }
      })
    },
  });
  return (
    <div className="p-10">
      <div className="flex p-4 justify-between items-center">
        <h1 className="font-semibold text-2xl">List Mentee</h1>
      </div>
      <div className="flex justify-end px-4 gap-2">
        <div className="flex flex-col">
          <label className="font-semibold">Class</label>
          <select onChange={(e) => setInpclass(e.target.value)} className="py-3 px-2 w-44 rounded font-semibold text-sm bg-slate-200">
            <option selected disabled>
              Choose a Class
            </option>
            {
              dataclass && dataclass.map((element, index) => {
                return (
                  <option key={index} value={element.class}> {element.class}</option>
                )
              })
            }
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Status</label>
          <select onChange={(e) => setStatus(e.target.value)} className="py-3 px-2 w-44 rounded font-semibold text-sm bg-slate-200">
            <option selected disabled>
              Choose a Class
            </option>
            <option value="active">Active</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Category</label>
          <select onChange={(e) => setCategory(e.target.value)} className="py-3 px-2 w-48 rounded font-semibold text-sm bg-slate-200">
            <option selected disabled>
              Choose a Category
            </option>
            <option value="it">IT</option>
            <option value="nonit">Non - IT</option>
          </select>
        </div>
      </div>
      <div className="relative py-4 overflow-x-auto sm:rounded-lg">
        {menteData.length === 0 ? (
          <div className='flex justify-center'>
            <Spinner w={true} />
          </div>
        ) : (
          <table className="w-full text-sm text-left border-4 text-black">
            <thead className="text-[14px] text-black uppercase border-b-2 border-b-gray-400 ">
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
              {menteData && menteData.map((element, index) => {
                return (
                  <tr key={index} className="bg-white border-b text-[14px]">
                    <td scope="row" className="px-6 py-4">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{element.full_name}</td>
                    <td className="px-6 py-4">{element.class}</td>
                    <td className="px-6 py-4">{element.status}</td>
                    <td className="px-6 py-4">{element.education_type}</td>
                    <td className="px-6 py-4">{element.gender}</td>
                    <td className="px-6 py-4 flex gap-2 justify-between">
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          navigate('/feedback/12', {
                            state: {
                              id: element.id,
                            },
                          })
                        }
                      >
                        <LuBookOpen size={20} />
                      </div>

                      <div
                        onClick={() => deleteMentee(element.id)}
                        className={`${data && data.role === 'user' ? 'hidden' : 'block'
                          } cursor-pointer`}
                      >
                        <LuTrash size={20} />
                      </div>
                      <div
                        onClick={() => { setEditMenteeId(element.id); handleOpenEdit() }}
                        className="cursor-pointer"
                      >
                        <LuEdit size={20} />
                      </div>
                      {openEdit && (
                        <Popup onConfirm={handleCloseEdit}>
                          <div className="relative w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow">
                              <button
                                type="button"
                                onClick={() => handleCloseEdit()}
                                className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 rounded-full text-black w-8 h-8 inline-flex justify-center items-center"
                                data-modal-hide="authentication-modal"
                              >
                                <LuXCircle size={20} />
                              </button>
                              <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-bold text-black">
                                  Edit Mentee
                                </h3>
                                <form onSubmit={formik.handleSubmit} className="space-y-4">
                                  <div className="flex flex-col gap-2">
                                    <label className=" font-semibold">
                                      Full Name
                                    </label>
                                    <input
                                      className=" w-full bg-slate-200 px-3 py-2"
                                      type="text"
                                      name='full_name'
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      placeholder="input Full Name"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className=" font-semibold">
                                      Email
                                    </label>
                                    <input
                                      className=" w-full bg-slate-200 px-3 py-2"
                                      type="text"
                                      name='email'
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      placeholder="input Email"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className=" font-semibold">
                                      Phone
                                    </label>
                                    <input
                                      className=" w-full bg-slate-200 px-3 py-2"
                                      type="text"
                                      name='phone'
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      placeholder="input Phone Number"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className=" font-semibold">
                                      Telegram URL
                                    </label>
                                    <input
                                      className=" w-full bg-slate-200 px-3 py-2"
                                      type="text"
                                      name='telegram'
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      placeholder="input Telegram URL"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className=" font-semibold">
                                      Emergency Phone
                                    </label>
                                    <input
                                      className=" w-full bg-slate-200 px-3 py-2"
                                      type="text"
                                      name='ephone'
                                      onBlur={formik.handleBlur}
                                      onChange={formik.handleChange}
                                      placeholder="input Emergency Phone"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className="font-semibold">Status</label>
                                    <select onChange={formik.handleChange} value={formik.values.status} name='status' className="px-3 py-2  border rounded-sm">
                                      <option value='interview'>Interview</option>
                                      <option value='join class'>Join Class</option>
                                      <option value='unit1'>Unit 1</option>
                                      <option value='unit2'>Unit 2</option>
                                      <option value='unit3'>Unit 3</option>
                                      <option value='repeatunit1'>Repeat Unit 1</option>
                                      <option value='repeatunit2'>Repeat Unit 2</option>
                                      <option value='repeatunit3'>Repeat Unit 3</option>
                                      <option value='placement'>Placement</option>
                                      <option value='elimination'>Elimination</option>
                                      <option value='placement'>Placement</option>
                                      <option value='graduate'>Graduate</option>
                                    </select>
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <label className="font-semibold">Class</label>
                                    <select onChange={formik.handleChange} value={formik.values.class} name='class' className="px-3 py-2  border rounded-sm">
                                      <option value={1}>Frontend Batch 15</option>
                                      <option value={2}>Backend Batch 20</option>
                                    </select>
                                  </div>
                                  <div className="flex gap-2 py-2 justify-center">
                                    <button
                                      type="button"
                                      className="font-semibold text-white bg-red-500 hover:bg-red-700 rounded-full text-sm px-10 py-3 text-center"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </Popup>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <div className="flex justify-end gap-x-2">
          <button
            type="button"
            className="text-blak bg-blak hover:bg-[#3E31DF] hover:text-white border-2 border-[#3E31DF]  rounded-full text-sm font-semibold px-7 py-2 text-center"
          >
            Previous
          </button>
          <button
            type="button"
            className="text-black bg-blacke hover:bg-[#3E31DF] hover:text-white border-2 border-[#3E31DF] rounded-full text-sm font-semibold px-10 py-2 text-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenteePage;
