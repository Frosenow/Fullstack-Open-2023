import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterPersons, setFilterPersons] = useState([...persons]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((personsReturned) => {
      setPersons(personsReturned);
      setFilterPersons(personsReturned);
    });
  }, []);

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
      };
      personService.create(names).then((personReturned) => {
        setPersons(persons.concat(personReturned));
        setFilterPersons(persons.concat(personReturned));
      });
    } else {
      if (
        window.confirm(
          `${newName} is already in the phonebook, do you want to add it anyway?`
        )
      ) {
        const personUpdate = persons.filter((person) => person.name == newName);
        const updated = { ...personUpdate[0], number: newNumber };
        personService.replace(personUpdate[0].id, updated).then(() => {
          const updatedPersons = personService.getAll().then((persons) => {
            setPersons(persons);
            setFilterPersons(persons);
          });
        });
      }
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
      <h1>Phonebook</h1>
      <Filter onChange={filterData} value={filter} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={(e) => handleForm(e)}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filterPersons={filterPersons}
        updatePersons={setPersons}
        updateFilterPersons={setFilterPersons}
      />
    </div>
  );
};

export default App;
