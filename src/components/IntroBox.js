import React from 'react'

export default function IntroBox(props) {
  console.log({props});

  return (
    <div className={props.containerClass}>
        <img src={props.img1}/>
        <img src={props.img2}/>
    </div>
  )
}
