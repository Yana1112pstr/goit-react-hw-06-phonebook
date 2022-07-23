import MyButton from "components/UI/button/MyButton";
import MyInput from "components/UI/input/MyInput";
import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/slice";
import s from "./PhoneForm.module.css";
import toast from "react-hot-toast";

const PhoneForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const dispatch = useDispatch();

  const toAddContact = (e) => {
    e.preventDefault();
    const newContact = {
      ...contact,
      id: Date.now(),
    };
    dispatch(addContacts(newContact))
    // console.log(newContact)
    setContact({ name: "", number: "" });
    toast.success("Created new contact!");
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
