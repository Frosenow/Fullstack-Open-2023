import Person from "./Person";
import personService from "../services/persons";

export default function Persons({
  filterPersons,
  updatePersons,
  updateFilterPersons,
}) {
  const deletePersonOf = (id) => {
    const person = filterPersons.filter((person) => person.id == id);
    console.log(person);
    if (
      window.confirm(
        `Do you really want to delete ${person.name} from database?`
      )
    ) {
      personService.remove(id).then((removed) => {
        const persons = filterPersons.filter((person) => person.id !== id);
        console.log(persons);
        updatePersons(persons);
        updateFilterPersons(persons);
      });
    }
  };

  return (
    <>
      {filterPersons.map((filterPersons) => {
        return (
          <Person
            key={filterPersons.id}
            person={filterPersons}
            deletePerson={() => deletePersonOf(filterPersons.id)}
          />
        );
      })}
    </>
  );
}
