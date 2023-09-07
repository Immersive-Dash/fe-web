import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/')
    } else {
      const getData: any = Cookies.get('account')
      const token = JSON.parse(getData)
    }
  }, [navigate]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5 mx-5 py-5 items-center">
        <div className="col-span-12 md:col-span-4">
          <div className="h-30 md:h-40 lg:h-40 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-sm md:text-lg lg:text-lg">
                Mentee Active
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-sm md:text-3xl lg:text-3xl font-semibold">
                80
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-30 md:h-40 lg:h-40 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-sm md:text-lg lg:text-lg">
                Mentee Placement
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-sm md:text-3xl lg:text-3xl font-semibold">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-30 md:h-40 lg:h-40 shadow-lg rounded-lg">
            <div className="bg-[#17345F] flex rounded-tr-lg rounded-tl-lg py-2 justify-center">
              <h1 className="text-white font-semibold text-sm md:text-lg lg:text-lg">
                Mentee Feedback
              </h1>
            </div>
            <div className="h-full flex justify-center py-4">
              <p className="text-sm md:text-3xl lg:text-3xl font-semibold">
                100
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 mx-5">
        <div className="bg-slate-200 h-72">Chart</div>
      </div>
    </div>
  );
};

export default Dashboard;
