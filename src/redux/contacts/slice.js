import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logoutUser } from '../auth/operations';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch (error) {
    // Ignore write errors
  }
};

const initialState = {
  items: loadState() || [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        saveState(state.items);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        saveState(state.items);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
        saveState(state.items);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
          saveState(state.items);
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.items = [];
        localStorage.removeItem('contacts');
      });
  },
});

export default contactsSlice.reducer;