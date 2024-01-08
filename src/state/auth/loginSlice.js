
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { publicPost } from "../apiCaller";



// export const createUserLogin = createAsyncThunk(
//   "user/login",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await publicPost("/user/login", data);
//       console.log("response",response.data);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response);
//     }
//   }
// );

// const loginSlice = createSlice({
//   name: "login",
//   initialState: {
//     isLoading: false,
//     user: {},
//     error: false,
//     success: false,
//     errorMessage: ""
//   },
 
//   extraReducers: (builder) => {
//     builder.addCase(createUserLogin.pending, (state) => {
//       state.isLoading = true;
//       state.error = false;
//     });
//     builder.addCase(createUserLogin.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.user = action.payload;
//       console.log("user",action.payload);
//       state.errorMessage = "";
//       state.success = true;
//     });
//     builder.addCase(createUserLogin.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = true;
//       state.errorMessage = action.payload.data.message;
//     });
//   }
// });
// export default loginSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../apiCaller";


export const createUserLogin = createAsyncThunk(
  "/student/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/auth/student/login", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    user: {},
    error: false,
    errorMessage: "",
    success:false
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = {};
      state.error = false;
      state.errorMessage = "";
    },
    errorClean: (state) => {
      state.error = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUserLogin.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(createUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
      state.errorMessage = "";
      state.success=true
    });
    builder.addCase(createUserLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export const { login, logout, errorClean } = authSlice.actions;
export default authSlice.reducer;