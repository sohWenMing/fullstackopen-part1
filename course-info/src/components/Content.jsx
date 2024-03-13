import React from 'react'
import Part from './Part'

function Content(props) {
    const info1 = {
        part: props.content.part1,
        exercises: props.content.exercises1
    }
    const info2 = {
        part: props.content.part2,
        exercises: props.content.exercises2
    }
    const info3 = {
        part: props.content.part3,
        exercises: props.content.exercises3
    }
    return (
        <>
       <Part info={info1} />
       <Part info={info2} />
       <Part info={info3} />
      </>
    )
}

export default Content