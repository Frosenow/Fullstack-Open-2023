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

export default Course;
