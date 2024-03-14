import React from 'react';

function Button(props) {
    return (
        <>
        <button onClick={props.handleClick}>{props.buttonText}</button>
        </>
    )
}

export default Button;