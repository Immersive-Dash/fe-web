const Landing = () => {
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
          <h2 className="mb-7 w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, veniam
            dolore omnis consectetur exercitationem soluta in quisquam ex quas
            id debitis excepturi dolorum,
          </h2>
          <button className="rounded-full bg-[#3E31DF] text-white py-3 px-16 font-semibold hover:bg-[#03034F]">
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
