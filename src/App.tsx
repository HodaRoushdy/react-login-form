import Cookies from "js-cookie";
import { useEffect } from "react";
import ClientUserContent from "./components/clientUser";
import { isExpired } from "react-jwt";
import { useSelector } from "react-redux";
import {
  clearUserData,
  refresh,
  setUserDataFromToken,
} from "./app/auth/auth.slice";
import { useAppDispatch } from "./app/hooks";
import { RootState } from "./app/store";
import AdminContent from "./components/admin";
import LoginContent from "./components/login";
import "./App.css";

function App() {
  const isTokenValid = useSelector(
    (state: RootState) => state.auth.isTokenValid
  );
  const dispatch = useAppDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  useEffect(() => {
    const accessToken = Cookies.get("Authorization");
    if (accessToken) {
      const isTokenExpired = isExpired(accessToken);
      if (isTokenExpired) {
        dispatch(refresh());
      } else {
        console.log("not expired");
        dispatch(setUserDataFromToken(accessToken));
      }
    } else {
      dispatch(clearUserData());
    }
  }, [dispatch]);

  if (isTokenValid) {
    if (userInfo.role === "client") {
      return <ClientUserContent />;
    } else if (userInfo.role === "admin") {
      return <AdminContent />;
    }
  } else {
    return (
      <LoginContent/>
    );
  }
}

export default App;
