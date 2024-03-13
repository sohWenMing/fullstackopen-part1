import React from 'react'

function Content(props) {
    console.log("props :", props);
    return (
        <>
        <p>
            {props.content.part1} {props.content.exercises1}
        </p>
      
        <p>
            {props.content.part2} {props.content.exercises2}
        </p>
        <p>
            {props.content.part3} {props.content.exercises3}
        </p>
      </>
    )
}

export default Content