import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}/contacts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}/contacts`, contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`${baseURL}/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateContact = createAsyncThunk('contacts/update', async ({ contactId, contact }, thunkAPI) => {
  try {
    const response = await axios.patch(`${baseURL}/contacts/${contactId}`, contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});