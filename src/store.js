import { configureStore } from "@reduxjs/toolkit";
import userReducer from "slices/userSlice";
import userManagementReducer from "slices/userManagementSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userManagement: userManagementReducer,
  },
});

export default store;
