import Cookies from 'js-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Data {
  id: number;
  full_name: string;
  team: string;
  email: string;
  role: string;
}

const DetailUserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location?.state?.id;
  const [detailUser, setDetailUser] = useState<Data[]>([]);
  const getItem: any = Cookies.get('account');

  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/');
    }
    if (id) {
      getDetailUser(id);
    }
  }, [navigate]);

  const getDetailUser = async (id: number) => {
    const token = JSON.parse(getItem);
    await axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDetailUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-8 py-10 container mx-auto">
      <h1 className="font-semibold text-2xl mb-6">Detail User</h1>
      <div>
        <label className="font-semibold">Full Name</label>
        <p className=" border w-1/2 rounded-sm px-3 py-2">
          {detailUser.full_name}
        </p>
        <label className="font-semibold">Email</label>
        <p className=" border w-1/2 rounded-sm px-3 py-2">{detailUser.email}</p>
        <label className="font-semibold">Role</label>
        <p className=" border w-1/2 rounded-sm px-3 py-2">{detailUser.role}</p>
      </div>
    </div>
  );
};

export default DetailUserPage;
