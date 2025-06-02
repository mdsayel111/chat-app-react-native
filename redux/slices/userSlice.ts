import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
type TUser = {
  name: string;
  email: string;
};

// Define the initial state using that type
const initialState: TUser = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<TUser>): TUser => action.payload,
    clearUser: (): TUser => {
      return initialState;
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
