import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

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
    <Total content={content}/>
   </div>
  )
}

export default App
