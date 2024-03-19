import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts-slice';
import { filterReducer } from './filter-slice';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);
