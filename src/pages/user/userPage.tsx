import { useState, useEffect } from 'react';
import { LuEdit, LuTrash, LuXCircle, LuBookOpen } from 'react-icons/lu';
import Popup from '../../components/popup/popup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';

interface Data {
  id: number;
  full_name: string;
  team: string;
  email: string;
  role: string;
}
const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [userData, setUserData] = useState<Data[]>([]);
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [team, setTeam] = useState(1);
  const [role, setRole] = useState('');
  const [fullNameEdit, setFullnameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');
  const [teamEdit, setTeamEdit] = useState(1);
  const [roleEdit, setRoleEdit] = useState('');
  const [isRole, setIsRole] = useState('');
  const [userId, setUserId] = useState(0);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/');
    }
    getData();

    const myRole = JSON.parse(getItem);
    setIsRole(myRole.role);
  }, []);
  const getItem: any = Cookies.get('account');

  const getData = async () => {
    const token = JSON.parse(getItem);
    await axios
      .get(`/users`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id: number) => {
    const token = JSON.parse(getItem);
    axios
      .delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success('Data User Berhasil di Hapus');
        }
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = () => {
    const token = JSON.parse(getItem);
    axios
      .put(
        `/users/${userId}`,
        {
          full_name: fullNameEdit,
          email: emailEdit,
          password: passwordEdit,
          id_team: teamEdit,
          role: roleEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.message === 200) {
          toast('Success Mengedit Data User');
          setOpenEdit(false);
        }
        getData();
      })
      .catch((error) => {
        if (error.response.data.code === 500) {
          toast.error('Gagal Mengedit Data User');
          setOpenEdit(false);
        }
      });
  };

  const handleAdd = () => {
    console.log(fullName, email, password, team, role);
    const token = JSON.parse(getItem);
    axios
      .post(
        `/users`,
        {
          full_name: fullName,
          email: email,
          password: password,
          id_team: team,
          role: role,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setOpen(false);
        toast.success('Data Akun User Berhasil Ditambahkan');
        getData();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div className="p-10">
      <div className="flex p-4 justify-between items-center">
        <h1 className="font-semibold text-2xl">List User</h1>
        {isRole === 'admin' && (
          <button
            onClick={() => handleOpen()}
            type="button"
            className="font-semibold text-white bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
          >
            Add User
          </button>
        )}
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
                <h3 className="mb-4 text-2xl font-semibold text-black">
                  Add User
                </h3>
                <form className="space-y-4" action="#">
                  <div className="flex gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-black">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullName}
                        className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-black">
                      Team
                    </label>
                    <select
                      onChange={(e) => setTeam(e.target.value)}
                      className="py-2 px-2 w-full rounded bg-slate-200"
                    >
                      <option value={1}>Academic</option>
                      <option value={2}>People Skills</option>
                      <option value={3}>Placement</option>
                      <option value={4}>Admission</option>
                    </select>
                    <label className="block text-sm font-semibold text-black">
                      Role
                    </label>
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      className="py-2 px-2 w-full rounded bg-slate-200"
                    >
                      <option value="Admin">admin</option>
                      <option value="User">user</option>
                    </select>
                  </div>
                  <div className="flex gap-2 py-2 justify-end">
                    <button
                      type="submit"
                      onClick={() => handleClose()}
                      className=" text-white bg-[#E05252] focus:ring-4 focus:outline-none font-semibold rounded-full text-sm px-10 py-2 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAdd()}
                      className=" text-white bg-[#3E31DF] focus:ring-4 focus:outline-none font-semibold rounded-full text-sm px-10 py-2 text-center"
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
      <div className="relative py-4 overflow-x-auto sm:rounded-lg">
        {userData.length === 0 ? (
          <div className="flex justify-center">
            <Spinner w={true} />
          </div>
        ) : (
          <table className="w-full text-sm text-left border-4 text-black">
            <thead className=" text-black uppercase border-b-2 border-b-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Team
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>

                {isRole === 'admin' && (
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.full_name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.team}</td>
                    <td className="px-6 py-4">{item.role}</td>
                    {isRole === 'admin' && (
                      <td className="px-6 py-4 flex gap-2">
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            navigate(`/detail-user/${item.id}`, {
                              state: {
                                id: item.id,
                              },
                            })
                          }
                        >
                          <LuBookOpen size={20} />
                        </div>
                        <div
                          onClick={() => deleteUser(item.id)}
                          className="cursor-pointer"
                        >
                          <LuTrash size={20} />
                        </div>
                        <div
                          onClick={() => {
                            setUserId(item.id);
                            handleOpenEdit();
                          }}
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
                                  <h3 className="mb-4 text-2xl font-semibold text-black">
                                    Edit User
                                  </h3>
                                  <form className="space-y-4" action="#">
                                    <div className="flex gap-3">
                                      <div>
                                        <label className="block text-sm font-semibold text-black">
                                          Full Name
                                        </label>
                                        <input
                                          type="text"
                                          name="full_name"
                                          onChange={(e) =>
                                            setFullnameEdit(e.target.value)
                                          }
                                          value={fullNameEdit}
                                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-semibold text-black">
                                          Email
                                        </label>
                                        <input
                                          type="text"
                                          name="email"
                                          onChange={(e) =>
                                            setEmailEdit(e.target.value)
                                          }
                                          value={emailEdit}
                                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <label className="block text-sm font-semibold text-black">
                                          Password
                                        </label>
                                        <input
                                          type="text"
                                          name="password"
                                          onChange={(e) =>
                                            setPasswordEdit(e.target.value)
                                          }
                                          value={passwordEdit}
                                          className=" border border-gray-300 text-black text-sm rounded-sm  block w-full p-2.5"
                                        />
                                      </div>
                                      <label className="block text-sm font-semibold text-black">
                                        Team
                                      </label>
                                      <select
                                        onChange={(e) =>
                                          setTeamEdit(e.target.value)
                                        }
                                        className="py-2 px-2 w-full rounded bg-slate-200"
                                      >
                                        <option value="Academic">
                                          Academic
                                        </option>
                                        <option value="People Skills">
                                          People Skills
                                        </option>
                                        <option value="Placement">
                                          Placement
                                        </option>
                                        <option value="Admission">
                                          Admission
                                        </option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block text-sm font-semibold text-black">
                                        Role
                                      </label>
                                      <select
                                        onChange={(e) =>
                                          setRoleEdit(e.target.value)
                                        }
                                        className="py-2 px-2 w-full rounded bg-slate-200"
                                      >
                                        <option value="Admin">admin</option>
                                        <option value="User">user</option>
                                      </select>
                                    </div>

                                    <div className="flex gap-2 py-2 justify-end">
                                      <button
                                        type="submit"
                                        onClick={() => handleCloseEdit()}
                                        className=" text-white bg-[#E05252] focus:ring-4 focus:outline-none font-semibold rounded-full text-sm px-10 py-2 text-center"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="submit"
                                        onClick={() => handleEdit()}
                                        className=" text-white bg-[#3E31DF] focus:ring-4 focus:outline-none font-semibold rounded-full text-sm px-10 py-2 text-center"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Popup>
                        )}
                      </td>
                    )}
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

export default UserPage;
