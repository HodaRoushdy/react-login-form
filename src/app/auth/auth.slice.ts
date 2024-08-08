import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { decodeToken, isExpired } from "react-jwt";

const baseUrl = "http://localhost:10023/auth";

export interface authState {
  userInfo: { username: string; role: string };
  isTokenValid: boolean;
}
type userLoginData = { username: string; password: string };

interface IDecodedToken {
  username: string;
  role: string;
}
interface IError {
  response: {
    data: string;
  };
}
const initialState: authState = {
  userInfo: { username: "", role: "" },
  isTokenValid: false,
};
axios.defaults.withCredentials = true;
export const signIn = createAsyncThunk(
  "signIn",
  async ({ username, password }: userLoginData, { rejectWithValue }) => {
    //const { apiClient } = extra;
    return axios
      .create({
        baseURL: baseUrl,
      })
      .post("/", {
        username: username,
        password: password,
      })
      .then(({ data }) => {
        console.log("data");
        return data;
      })
      .catch((error: IError) => {
        return rejectWithValue(error);
      });
  }
);
export const logout = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue }) => {
    return axios
      .create({
        baseURL: baseUrl,
      })
      .get("/logout")
      .then(({ data }) => {
        console.log("data");
        return data;
      })
      .catch((error: IError) => {
        return rejectWithValue(error);
      });
  }
);
export const refresh = createAsyncThunk(
  "refresh",
  async (_, { rejectWithValue }) => {
    return axios
      .create({
        baseURL: baseUrl,
      })
      .get("/refresh")
      .then(({ data }) => {
        console.log("data");
        return data;
      })
      .catch((error: IError) => {
        return rejectWithValue(error);
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDataFromToken: (state, action: PayloadAction<string>) => {
      const decodedToken: IDecodedToken | null = decodeToken(action.payload);
      if (decodedToken === null) {
        alert("invalid token");
        return;
      }
      state.isTokenValid = !isExpired(action.payload);
      state.userInfo = {
        username: decodedToken.username,
        role: decodedToken.role,
      };
    },
    clearUserData: (state) => {
      state.isTokenValid = false;
      state.userInfo = {
        username: "",
        role: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        signIn.fulfilled.type,
        (state: authState, action: PayloadAction<string>) => {
          console.log("action", action);
          const decodedToken: IDecodedToken | null = decodeToken(
            action.payload
          );
          if (decodedToken === null) {
            alert("invalid token");
            return;
          }
          state.isTokenValid = !isExpired(action.payload);
          state.userInfo = {
            username: decodedToken.username,
            role: decodedToken.role,
          };
        }
      )
      .addCase(signIn.rejected.type, (_, action: PayloadAction<IError>) => {
        console.log(action);
        alert(action.payload.response.data);
      })
      .addCase(logout.fulfilled.type, (state: authState) => {
        state.isTokenValid = false;
        state.userInfo = { username: "", role: "" };
      })
      .addCase(logout.rejected.type, (_, action: PayloadAction<IError>) => {
        alert(action.payload.response.data);
        return;
      })
      .addCase(
        refresh.fulfilled.type,
        (state: authState, action: PayloadAction<string>) => {
          state.isTokenValid = true;
          const decodedToken: IDecodedToken | null = decodeToken(
            action.payload
          );
          if (decodedToken === null) {
            alert("invalid token");
            return;
          }
          state.isTokenValid = !isExpired(action.payload);
          state.userInfo = {
            username: decodedToken.username,
            role: decodedToken.role,
          };
        }
      )
      .addCase(refresh.rejected.type, (_, action: PayloadAction<IError>) => {
        alert(action.payload.response.data);
        return;
      });
  },
});
export const { setUserDataFromToken, clearUserData } = authSlice.actions;

export default authSlice.reducer;
