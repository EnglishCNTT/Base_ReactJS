import { routes } from "../../router";
import { createSlice } from "../toolkit";

const initialState = {
  messageText: "",
  severity: "error",
  loadingStatus: false,
  isErrorAlert: false,
  statusPublic: [
    {
      value: 0,
      name: "not_public",
    },
    {
      value: 1,
      name: "public",
    },
  ],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleLoadingStatus: (state) => {
      state.loadingStatus = !state.loadingStatus;
    },
    setMessageText: (state, action) => {
      state.messageText = action.payload;
    },
    setseverity: (state, action) => {
      state.severity = action.payload;
    },
    setIsErrorAlert: (state, action) => {
      state.isErrorAlert = action.payload;
    },
    resetLoginState: (state) => {
      localStorage.removeItem("token");
    },
    toggleLogout: (state) => {
      localStorage.removeItem("token");
      window.location.href = routes.login.path;
    },
  },
});

export const {
  toggleLoadingStatus,
  setMessageText,
  setIsErrorAlert,
  resetLoginState,
  setseverity,
  toggleLogout,
} = globalSlice.actions;

export default globalSlice.reducer;
