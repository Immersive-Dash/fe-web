import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-screen h-screen">
      <div className="flex md:flex-row flex-col  p-14">
        <div className=" flex-1">
          <img
            className=""
            src="https://academy.alterra.id/wp-content/uploads/2022/02/Foto-LP-e1645506199392-1024x836.png"
            alt=""
          />
        </div>

        <div className="justify-center items-center flex flex-col flex-1">
          <h1 className="mb-7  text-center text-4xl font-bold">
            "Welcome to&nbsp;
            <span className="text-[#3E31DF]">
              Immersive <br />
              Landing"
            </span>
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="rounded-full bg-[#3E31DF] text-white py-3 px-16 font-semibold hover:bg-[#03034F]"
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
