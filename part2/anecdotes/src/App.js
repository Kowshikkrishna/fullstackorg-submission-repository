import { useState } from 'react'

const HighVotes = (props) => {
  if(Math.max(...props.points)<1){
    return (<p>plese vote atleast one anecdotes</p>);
  }
  else{
    let maxIndex = props.points.indexOf(Math.max(...props.points));
    return(
      <>
        <h2>anecdotes with most votes</h2>
        <p>{props.anecdotes[maxIndex]}</p>
      </>
    );
  }
};




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
   const arr = Array(7).fill(0)
  const [points,setPoints] = useState(arr);

  const [selected, setSelected] = useState(getRandomInt(7));
  
  const voteHandler = () =>{
    const copy = [...points];
    copy[selected]+=1;
    setPoints(copy)
  }
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={voteHandler} >votes</button>
      <button onClick={() => {setSelected(getRandomInt(7))}} >next</button>
      <p>has {points[selected]} vote</p>
      <HighVotes points = {points} anecdotes = {anecdotes} ></HighVotes>
    </div>
  )
}

export default App