const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5 mx-5 py-5 items-center">
        <div className="col-span-12 md:col-span-4">
          <div className="h-44 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-lg">
                Mentee Active
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-3xl font-semibold">
                80
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-44 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-lg">
                Mentee Placement
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-3xl font-semibold">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-44 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-lg">
                Mentee Feedback
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-3xl font-semibold">
                100
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-5">
        <div className="bg-slate-200 h-72">Chart</div>
      </div>
    </div>
  );
};

export default Dashboard;
