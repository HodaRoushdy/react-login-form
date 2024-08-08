const AdminContent = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex ps-[2vw] border-b-2 border-black">
        <div className="w-[30vw] md:w-[20vw] ps-[1vw] sm:text-sm md:text-2xl text-start border-r-2 py-[0.7vh] border-black">
          <span>Blue202labs</span>
        </div>
        <div className="w-[50vw] md:w-[60vw] sm:text-sm md:text-xl  ps-4 py-[0.7vh] text-start">
          <span>Technical test</span>
        </div>
        <div className="w-[20vw] bg-blue-500 py-[0.7vh] sm:text-sm md:text-xl  text-center text-slate-50 border-black border-s-2 cursor-pointer">
          <span>Sign Out</span>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:flex px-3 md:px-0 space-y-6 md:space-y-0 h-[90vh] md:justify-around items-center ">
        <div className="sm:w-full md:w-[50vw] text-4xl md:text-5xl h-[50vh] px-3 md:px-0 flex border border-blue-900 bg-blue-500 justify-center items-center text-5xl text-slate-50 rounded-lg shadow-2xl ">
          <h3>Client User and Admin Content</h3>
        </div>
        <div className=" sm:w-full md:w-[40vw] text-4xl md:text-5xl h-[50vh] px-3 md:px-0 flex border border-blue-900 bg-blue-500 justify-center items-center text-5xl text-slate-50 rounded-lg shadow-2xl ">
          <h3>Only Admin Content</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
