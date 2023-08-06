import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64b677fddf0839c97e159e99.mockapi.io';

export const getUsers = createAsyncThunk(
  `users/getUsers`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserId = createAsyncThunk(
  `users/getUserId`,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
