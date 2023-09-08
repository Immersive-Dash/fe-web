import Cookies from 'js-cookie';

const Navbar = () => {
  const getItem: any = Cookies.get('account');
  const getEmail = JSON.parse(getItem);

  return (
    <div className="shadow-lg w-full">
      <div className="flex justify-end mx-6 my-4 items-center">
        <h1 className="text-[#17345F] text-xl font-semibold">
          Halo, {getEmail.email}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
