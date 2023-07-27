import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(fiveContacts);
  const remainingContacts = contacts.slice(5)
  const addRandom = () => {
    if(remainingContacts.length === 0) {
      return
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContactList([...contactList, randomContact]);
    remainingContacts.splice(randomIndex, 1);
   
  }

  const sortByPopularity = () => {
    const sortContacts = [...contactList].sort((a,b) => b.popularity - a.popularity);
    setContactList(sortContacts);
    console.log(sortByPopularity)
  }

  const sortbyName = () => {
    const sortContacts = [...contactList].sort((a, b) => a.name - b.name);
    setContactList(sortContacts);
    console.log(sortbyName)
  }

  const deleteContact = (contactId) => {
    const newContacts = contactList.filter( (contact)=> contact.id !== contactId
    )
    setContactList(newContacts);
  }

  return <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={addRandom}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <button onClick={sortbyName}>Sort by name</button>
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.name}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: "40px", height: "50px" }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>⭐</p>}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
  </div>;
}
export default App;