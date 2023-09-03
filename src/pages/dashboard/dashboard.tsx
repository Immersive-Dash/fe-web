const Dashboard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-5 mx-5 py-5">
        <div className="h-44 flex justify-end px-3 py-3 bg-slate-200">
          Mentee Actiove
        </div>
        <div className="h-44 flex justify-end px-3 py-3 bg-slate-200">
          Mentee Placement
        </div>
        <div className="h-44 flex justify-end px-3 py-3 bg-slate-200">
          Mentee Feedback
        </div>
      </div>
      <div className="grid grid-cols-1 mx-5">
        <div className="bg-slate-200 h-72">Chart</div>
      </div>
    </div>
  );
};

export default Dashboard;
