import React, {useState, useEffect} from 'react';
import Button from './components/Button'
import Header from './components/Header'

const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = {};
  function createVotes(anecdotes) {
    for (const [index, value] of anecdotes.entries()) {
      let indexToUpdate = index;
      votes[indexToUpdate] = 0;
    }
   }

  const [selected, setSelected] = useState(0)
  const [firstClick, setFirstClick] = useState(true);
  const [anecdoteVotes, setAnecdoteVotes] = useState(votes);
  const [mostVotedIndex, setMostVotedindex] = useState(null);

  console.log("most voted index:", mostVotedIndex);
  useEffect(() => {
    console.log("anecdoteVotes after render: ", anecdoteVotes);

    let index = null;
    let maxVotes = 0;

    for (const [key, value] of Object.entries(anecdoteVotes)) {
      if(value > maxVotes) {
        index = key;
        maxVotes = value;
      }
    }

    setMostVotedindex(prev => index);
  }, [anecdoteVotes])

  createVotes(anecdotes);

  
  function generateRandomNumber() {
    const number = Math.floor(Math.random() * 5) + 1;
    return(number);
    }
  
  function handleClickNewAnecdote() {
    
    const number = generateRandomNumber();
    setSelected(prevSelected => number); 
    setFirstClick(prevFirstClick => false); 
    
   
  }

  function handleClickVote() {
    console.log("Vote button was clicked")
    const newVotes = {
      ...anecdoteVotes, 
      [selected] : anecdoteVotes[selected] + 1   
    }
    setAnecdoteVotes(orev => newVotes);
    
  }
   
  

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <div>
      {anecdotes[selected]}
      </div>
      <div>
        Has {anecdoteVotes[selected]} votes.
      </div>


      <div>
      <Button buttonText={firstClick ? "Select" : "Next Anecdote"} handleClick={handleClickNewAnecdote}/>
      <Button buttonText="Vote" handleClick={handleClickVote} />
      </div>
      {mostVotedIndex !== null && (
          <>
          <Header text="Anecdote with most votes" />
          {anecdotes[mostVotedIndex]}
          </>

          
        
      )}
    
    </div>
  )
}

export default App