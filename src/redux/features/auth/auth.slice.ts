import { createSlice } from "@reduxjs/toolkit";
import { verifyToken } from "../../../utils/verifyToken";
interface IInitialState {
  user: null | object;
  token: null | string;
}
const initialState: IInitialState = {
  user: localStorage.getItem("token")
    ? verifyToken(localStorage.getItem("token") as string)
    : null,
  token: localStorage.getItem("token") as string | null,
};
const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logoutUser } = authslice.actions;

export default authslice.reducer;
