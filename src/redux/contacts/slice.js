import { createSlice } from "@reduxjs/toolkit";

export const myPhonebookSlice = createSlice({
    name: "phonebook",
    initialState: {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
          ],
        filter: ""
    },
    reducers: {
        addContacts(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContacts(state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
        addFilter(state, action) {
            state.filter = action.payload;
        },
    }
});

export const { addContacts, deleteContacts, addFilter } = myPhonebookSlice.actions;