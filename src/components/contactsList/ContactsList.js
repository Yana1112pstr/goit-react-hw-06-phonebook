import MyButton from "components/UI/button/MyButton";
import React from "react";
import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors";
import { deleteContacts } from "redux/contacts/slice";

const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));

    return (
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <th>n</th>
              <th>Contact</th>
              <th>Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact, index) => (
              <tr key={contact.id}>
                <td style={{textAlign:"center"}}>{index+1}</td>
                <td style={{textAlign:"center"}}>{contact.name}</td>
                <td style={{textAlign:"center"}}>{contact.number}</td>
                <td style={{textAlign:"center"}}><MyButton onClick={() => dispatch(deleteContacts(contact.id))}>Delete contact</MyButton></td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  };

export default ContactsList;
