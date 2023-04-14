import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleInputChange(e) {
    setNewName(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    const names = {
      name: newName,
    };
    setPersons(persons.concat(names));
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input onChange={handleInputChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <li>{person.name}</li>;
      })}
    </div>
  );
};

export default App;
