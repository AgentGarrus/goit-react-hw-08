import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const signupUser = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    const { token } = response.data;
    setAuthHeader(token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('No token available');
  }

  setAuthHeader(persistedToken);
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});