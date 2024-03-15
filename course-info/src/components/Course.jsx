import React from 'react';
import Header from './Header'
import Part from './Part'
import Total from './Total'

function Course({course}) {
    const sum = course.parts.reduce((acc, currentValue) => {
        return(acc + currentValue.exercises);
    },0)

    console.log("sum: ", sum);
    return(
        <>
        <Header text={course.name}/>
        {course.parts.map((part) => {
            return (
                <Part key={part.id} part={part} />
            )
        })}
        <Total total={sum}/>
        </>
    )
}

export default Course;