import React from 'react'

import './Square.css'

export default function Square(props) {
  return (
    <div>
        <button className="square" onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
