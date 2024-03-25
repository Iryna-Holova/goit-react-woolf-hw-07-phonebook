export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleGetContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.items.unshift(payload);
};

export const handleDeleteContact = (state, { payload }) => {
  const index = state.items.findIndex(({ id }) => id === payload.id);
  state.items.splice(index, 1);
};
