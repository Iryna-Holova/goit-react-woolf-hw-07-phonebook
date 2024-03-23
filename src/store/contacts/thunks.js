import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'api/contacts';

export const getContactsThunk = createAsyncThunk('contacts/getAll', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk('contacts/add', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
