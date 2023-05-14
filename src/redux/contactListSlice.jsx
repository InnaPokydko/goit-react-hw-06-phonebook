import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactsArr: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        const { name, number } = action.payload;
        const isContactExist = state.contactsArr.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (isContactExist) {
          alert(`${name} is already in contacts`);
        } else {
          state.contactsArr.push({
            name,
            number,
            id: nanoid(),
          });
        }
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsArr.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contactsArr.splice(index, 1);
      }
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contactsArr'],
};

export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact } = contactSlice.actions;
