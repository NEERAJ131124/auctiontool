import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const fetchUserData = createAsyncThunk("user/fetchUserData", async () => {
  const token = cookies.get("token");
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const updateUserInterests = createAsyncThunk(
  "user/updateUserInterests",
  async (interests) => {
    const token = cookies.get("token");
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/users/interests`,
      { interests },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUserInterests.fulfilled, (state, action) => {
        state.user.interests = action.payload.interests;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
