import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  name: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  name: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.token = payload.token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
