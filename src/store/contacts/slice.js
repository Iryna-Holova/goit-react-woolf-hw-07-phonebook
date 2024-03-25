import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';
import {
  handleAddContact,
  handleDeleteContact,
  handleGetContactsFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleGetContactsFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact);
  },
});

export const contactsReducer = contactsSlice.reducer;
