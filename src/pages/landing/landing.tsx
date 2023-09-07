import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-gradient-to-r from-slate-100 to-slate-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-6 hidden md:block lg:block px-4">
            <div className="flex justify-center items-center h-full">
              <img
                src="../../../public/landing.png"
                className="w-full"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 flex items-center  px-4">
            <div className="py-2">
              <div className="bg-[#3E31DF] text-white text-sm font-semibold w-48 flex justify-center rounded-full py-2">
                Digital Management
              </div>
              <div className="font-semibold text-5xl py-2 md:text-[60px] lg:text-[60px]">
                Digital Products For Business
              </div>
              <p className="text-md md:text-lg lg:text-lg py-4">
                Kelola dan perbarui data Mentee dengan mudah, termasuk informasi
                pribadi, riwayat akademik, dan detail kontak.
              </p>
              <div>
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-full transition hover:scale-105 bg-[#3E31DF] hover:bg-[#03034F] w-52 h-14 text-white font-semibold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
