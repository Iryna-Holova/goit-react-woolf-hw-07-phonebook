import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const handleGetContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const handleAddContact = (state, { payload }) => {
  state.items.unshift(payload);
};

const handleDeleteContact = (state, { payload }) => {
  const index = state.items.findIndex(({ id }) => id === payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
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
