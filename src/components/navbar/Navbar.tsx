import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [fullname, setFullname] = useState<string>('');

  const getName = () => {
    axios
      .get('https://64f40da6932537f4051a17d5.mockapi.io/nav-name')
      .then((response) => {
        const data = response.data;

        const { fullName } = data[0];

        setFullname(fullName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getName();
  });

  return (
    <div className="shadow-lg w-full">
      <div className="flex justify-between mx-6 my-4 items-center">
        <h1 className="text-[#17345F] text-2xl font-semibold">
          Immersive Dashboard
        </h1>
        <h1 className="text-[#17345F] text-xl font-semibold">
          Halo, {fullname}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
