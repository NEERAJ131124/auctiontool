import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const fetchUsers = createAsyncThunk("userManagement/fetchUsers", async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });
  return response.data;
});

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userManagementSlice.reducer;
