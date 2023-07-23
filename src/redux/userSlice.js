import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [] },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(({ id }) => {
        return id !== action.payload;
      });
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
