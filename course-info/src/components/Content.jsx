import React from 'react'
import Part from './Part'

function Content(props) {
    const info1 = props.parts[0]
    const info2 = props.parts[1]
    const info3 = props.parts[2]

    return (
        <>
       <Part info={info1} />
       <Part info={info2} />
       <Part info={info3} />
      </>
    )
}

export default Content