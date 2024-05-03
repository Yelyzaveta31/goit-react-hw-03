import { useState } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";

const contactData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("saved-contacts")) || contactData
  );
  const handleDelete = (id) => {
    setContacts((prev) => {
      const updatedContacts = prev.filter((contact) => contact.id !== id);
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(updatedContacts)
      );
      return updatedContacts;
    });
  };

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filteredContacts = searchContacts;
  return (
    <div>
      <h style={{ marginLeft: "40px", fontSize: "40px", fontWeight: "bold" }}>
        Phonebook
      </h>
      <ContactForm />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
