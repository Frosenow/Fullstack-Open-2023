function Header({course}){
  return (
    <h1>{course.name}</h1>
  )
}

function Content({course}){
  return (
  <div>
    <Part 
      part={course.parts[0].name}
      exercise={course.parts[0].exercises}
    />
    <Part 
      part={course.parts[1].name}
      exercise={course.parts[1].exercises}
    />
    <Part 
      part={course.parts[2].name}
      exercise={course.parts[2].exercises}
    />
  </div>
  )
}

function Part(props){
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

function Total({course}){
  const numberOfExercises = course.parts.reduce((a, c) => a + c.exercises, 0)
  return (
    <p>Number of exercises: {numberOfExercises}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development', 
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }] 
  } 
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
}

export default App;
