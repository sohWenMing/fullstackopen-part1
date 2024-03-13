import Header from './components/Header'
import Content from './components/Content'

function App() {
  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of react',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 13

  }
  

  return (
   <div>
    <Header course={course}/>
    <Content content={content} />
    
    {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
   </div>
  )
}

export default App
