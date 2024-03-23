import axios from 'axios';

axios.defaults.baseURL = 'https://65fa1dac3909a9a65b19e337.mockapi.io/api';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data.reverse();
};

export const addContact = async data => {
  const response = await axios.post('/contacts', data);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
