import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: {username:string,password:string};
}

const initialState: CounterState = {
  value: {username:"",password:""},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
   
  },
});

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions;

export default counterSlice.reducer;
