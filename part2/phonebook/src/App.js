import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  function handleInputChange(e) {
    setNewName(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();

    // Prevent adding empty values
    if (newName === "" || newNumber === "") {
      alert("Fields can not be empty");
      return;
    }

    // Check for duplicates
    if (
      persons.every(
        (person) => person.name.toLowerCase() !== newName.toLowerCase()
      )
    ) {
      const names = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(names));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        <div>
          name:
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number:
          <input
            onChange={(e) => setNewNumber(e.target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        );
      })}
    </div>
  );
};

export default App;
