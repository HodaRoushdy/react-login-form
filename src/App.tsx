import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { InputData } from "./data/InputData";
// import ClientUserContent from "./components/clientUser";
// import AdminContent from "./components/admin";


function App() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  // const [token,setToken] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    console.log(userData.username);
    console.log(userData.password);
    e.preventDefault();
    try {
      const { data } = await axios
        .create({
          baseURL: "http://localhost:10023/auth",
        })
        .post("/", {
          data: {
            username: userData.username,
            password: userData.password,
          },
        });
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController()
  //   const getUserData = async () => {
  //     try {
  //               const { data } = await axios.get(
  //                 "/auth",
  //                 {
  //                   signal : controller.signal
  //                 });
  //               console.log(data);
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }
  //   getUserData();
  //   return () => {
  //     isMounted = false;
  //     controller.abort()
  //   }
  // },[])

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex px-7 border-b-2 border-black">
        <div className="w-1/5 ps-4 text-start border-r-2 py-2 border-black">
          <span className="text-xl">Blue202labs</span>
        </div>
        <div className="w-2/5 ps-4 py-2 text-start">
          <span>Technical test</span>
        </div>
      </div>

      <div className="flex h-[90vh] justify-center ">
        <form
          className="flex flex-col space-y-7 w-4/5 justify-center"
          onSubmit={onSubmitHandler}>
          {InputData.map((input) => (
            <input
              onChange={onChangeHandler}
              placeholder={input.placeHolder}
              key={input.id}
              type={input.type}
              name={input.name}
              className="border border-gray-200 focus:border-blue-500 focus:outline-none rounded-md w-2/5 px-1 py-2 text-lg"
            />
          ))}
          <button className="bg-blue-300 px-8 py-2 rounded-md w-fit hover:bg-blue-400">
            Sign in
          </button>
        </form>
      </div>
    </div>
    // <ClientUserContent/>
  );
}

export default App;
