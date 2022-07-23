import MyButton from "components/UI/button/MyButton";
import MyInput from "components/UI/input/MyInput";
import React, { useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/slice";
import s from "./PhoneForm.module.css";
import toast from "react-hot-toast";
import { getContacts } from "redux/contacts/selectors";

const PhoneForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const toAddContact = (e) => {
    e.preventDefault();
    const newContact = {
      ...contact,
      id: Date.now(),
    };
    contacts.some(contact => contact.name === newContact.name) ? (toast.error(`your phonebook has contact ${newContact.name}`)) :
    dispatch(addContacts(newContact))
    setContact({ name: "", number: "" })
  };

  return (
    <form className={s.myForm} onSubmit={toAddContact}>
      <MyInput
        required
        type="text"
        placeholder="name"
        name="name"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <MyInput
        required
        type="text"
        placeholder="number"
        name="number"
        value={contact.number}
        onChange={(e) => setContact({ ...contact, number: e.target.value })}
      />
      <MyButton type="submit">Add contact</MyButton>
    </form>
  );
};

export default PhoneForm;
