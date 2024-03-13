import React from 'react';

function Total(props) {
   const {part1, exercises1, part2, exercises2, part3, exercises3} = props.content;
   console.log("props: ", props)
    return (
        <>
        <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
        </>
    )

}

export default Total