import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filterPersons, setFilterPersons] = useState([...persons]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      setFilterPersons(persons.concat(names));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  }

  function filterData(e) {
    setFilter(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const personsFilter = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setFilterPersons(personsFilter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterData} value={filter} />
      </div>
      <h2>add a new</h2>
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
      {filterPersons.map((filterPersons) => {
        return (
          <li key={filterPersons.id}>
            {filterPersons.name} {filterPersons.number}
          </li>
        );
      })}
    </div>
  );
};

export default App;
