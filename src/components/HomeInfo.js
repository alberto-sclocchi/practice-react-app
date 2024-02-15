import React from 'react'

export default function HomeInfo(props) {
    console.log({props});

    return (
    <div className={props.containerClass}>
        <div className= "div-home">
            <h1>{props.name}</h1>
            <p>{props.introParagraph}</p>
        </div>
        <button className="button-home">{props.button}</button>
    </div>
  )
}
