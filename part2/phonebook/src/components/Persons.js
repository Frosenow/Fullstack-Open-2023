import Person from "./Person";

export default function Persons({ filterPersons }) {
  return (
    <>
      {filterPersons.map((filterPersons) => {
        return <Person key={filterPersons.id} person={filterPersons} />;
      })}
    </>
  );
}
