import { useState, useEffect } from 'react'

import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics';

 

function App() {
  
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
const [neutral, setNeutral] = useState(0);
const [all, setAll] = useState(0);
const [average, setAverage] = useState(0);
const [positive, setPositive] = useState(0);

const statistics = {
  good: good, 
  bad: bad, 
  neutral: neutral,
  all: all,
  average: average, 
  positive: positive
}


function incrementAll() {
  setAll(prevAll => all + 1);
}

function calcAverage() {
  const totalValue = good + bad + neutral
  if(all === 0) {
    setAverage(prevAverage => 0);
  }
  else {
    const effectiveScore = good - bad;
    setAverage(prevAverage => (effectiveScore / all).toFixed(2));
  }
}

function calcPositive() {
  if(all === 0) {
    setPositive(prevPositive => 0)
  }
  else {
    setPositive(prevPositive => (good/all*100).toFixed(2));
  }
}

useEffect(() => {
  calcAverage();
  calcPositive();
}, [good, bad, neutral, all]);

function handleClickFunction(buttonType) {
  switch(buttonType) {
    case "good":
      setGood(prevGood => good + 1);
      incrementAll();
      break;
    case "bad":
      setBad(prevBad => bad + 1);
      incrementAll();
      break;
    case "neutral":
      setNeutral(prevNeutral => neutral + 1);
      incrementAll();
      break;
    default: 
      console.log("no match");
  }
}

  return (
    <>
      <Header headerText="give feedback" />
     <Button buttonText="good" handleClick={() => handleClickFunction("good")}/>
     <Button buttonText="bad" handleClick={() => handleClickFunction("bad")}/>
     <Button buttonText="neutral" handleClick={() => handleClickFunction("neutral")} />
     <Header headerText="statistics" />
     <Statistics statistics={statistics}/>

    </>
  )
}

export default App
