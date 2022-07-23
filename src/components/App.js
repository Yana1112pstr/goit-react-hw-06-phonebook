import React from "react";
import Header from "./header/Header";
import PhoneForm from "./phoneForm/PhoneForm";
import { Toaster } from "react-hot-toast";
import ContactsList from "./contactsList/ContactsList";
import PhoneFilter from "./phoneFilter/PhoneFilter";

export const App = () => {

  // useEffect(() => {
  //   const currentContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (currentContacts) {
  //     setContacts(currentContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);


  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <Toaster position="top-center" reverseOrder={false} />
      <Header props="Phone book" />
      <PhoneForm />
      <PhoneFilter/>
      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <ContactsList/>
    </div>
  );
};
