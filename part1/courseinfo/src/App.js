const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Headers = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    );
  };

  const Content = (props) => {
    return(<>
      <p>{props.part}{props.exercise}</p>
    </>
    );
  };

  const Total  = (props) => {
    return(<>
      <p>Number of exercises {props.totalExercise}</p>
    </>
    );
  };

  return (
    <>
      <h1>{course}</h1>
      <Headers></Headers>
      <Content part = {part1} exercise = {exercises1}></Content>
      <Content part = {part2} exercise = {exercises2}></Content>
      <Content part = {part3} exercise = {exercises3}></Content>
      <Total totalExercise = {exercises1 + exercises2 + exercises3}></Total>
    </>
  )
}

export default App