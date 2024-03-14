import React from 'react';

function Total(props) {
    let total = 0;
    props.parts.forEach((item) => {
        total = total + item.exercises
    })

    return (
        <>
        <p>Number of exercises: {total}</p>
        </>
    )

}

export default Total