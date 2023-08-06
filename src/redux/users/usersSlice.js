import { getUsers, getUserId } from './userOperation';
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null, currentUser: null },
  extraReducers: builder =>
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(getUserId.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const usersReducer = usersSlice.reducer;
