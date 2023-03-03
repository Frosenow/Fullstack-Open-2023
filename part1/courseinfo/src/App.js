function Header(props){
  return (
    <h1>{props.course}</h1>
  )
}

function Content({courseParts}){

  return (
  <div>
    <Part 
      part={courseParts.part[0]}
      exercise={courseParts.exercise[0]}
    />
    <Part 
      part={courseParts.part[1]}
      exercise={courseParts.exercise[1]}
    />
    <Part 
      part={courseParts.part[2]}
      exercise={courseParts.exercise[2]}
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

function Total(props){
  let numberOfExercises = props.exercises.reduce((a, c) => a + c, 0)
  return (
    <p>Number of exercises: {numberOfExercises}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const courseParts = {
    part: ['Fundamentals of React', 'Using props to pass data', 'State of a component'],
    exercise: [10, 7, 14]
  }
  return (
    <div>
      <Header course={course}/>
      <Content courseParts={courseParts}/>
      <Total 
        exercises={courseParts.exercise}
      />
    </div>
  );
}

export default App;
