const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const total = parts.reduce((acc, cv) => acc + cv.exercises, 0);
  return (
    <p>
      total of {total} {total > 1 ? "exercises" : "exercise"}
    </p>
  );
};

const Part = ({ part }) => (
  <li>
    {part.name}: {part.exercises}
  </li>
);

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const courseName = "Half Stack application development";
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
