import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "../app/auth/auth.slice";
import { useAppDispatch } from "../app/hooks";
import { InputData } from "../data/InputData";

const LoginContent = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(userData));
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex border-b-2 border-black">
        <div className="w-[20vw] ps-0 md:ps-[3vw] text-start border-r-2 py-[0.5vw] border-black">
          <h5>Blue202labs</h5>
        </div>
        <div className="w-[40vw] ps-[2vw] py-[0.5vw] text-start">
          <span>Technical test</span>
        </div>
      </div>

      <div className="flex h-[90vh] justify-center ">
        <form
          className="flex flex-col space-y-[2vw] w-[80vw] justify-center"
          onSubmit={onSubmitHandler}>
          {InputData.map((input) => (
            <input
              onChange={onChangeHandler}
              placeholder={input.placeHolder}
              key={input.id}
              type={input.type}
              name={input.name}
              className="border border-gray-200 focus:border-blue-500 focus:outline-none rounded-md w-[40vw] px-[0.5vw] py-[1vh] text-lg"
            />
          ))}
          <button className="bg-blue-400 px-[2.5vw] py-[0.7vw] rounded-md w-fit hover:bg-blue-500">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginContent;
