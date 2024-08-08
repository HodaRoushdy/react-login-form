import { logout } from "../app/auth/auth.slice";
import { useAppDispatch } from "../app/hooks";

const ClientUserContent = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex ps-[2vw] border-b-2 border-black">
        <div className="w-[30vw] md:w-[20vw] ps-[1vw] text-start border-r-2 py-[0.7vh] border-black">
          <h5>Blue202labs</h5>
        </div>
        <div className="w-[50vw] md:w-[60vw] ps-4 py-[0.7vh] text-start">
          <span>Technical test</span>
        </div>
        <div
          className="w-[20vw] bg-blue-500 py-[0.7vh] text-center text-slate-50 border-black border-s-2 cursor-pointer"
          onClick={() => {
            handleLogout();
          }}>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="flex h-[90vh] justify-center items-center ">
        <div className="px-3 lg:px-0 w-[80vw] md:w-[50vw] h-[40vh] md:h-[50vh] flex border border-blue-900 bg-blue-500 justify-center items-center text-slate-50 rounded-lg shadow-2xl shadow-sky-300">
          <h3>Client User and Admin Content</h3>
        </div>
      </div>
    </div>
  );
};

export default ClientUserContent;
