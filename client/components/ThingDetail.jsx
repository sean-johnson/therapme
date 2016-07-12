import React from 'react'

export default (props) => {
  if (props.thing) {
    return (
      <div>
        <h2>Detail</h2>
        <p>{props.thing.id}: {props.thing.name}</p>
        <a href="#" onClick={props.hideDetails}>hide details</a>
      </div>
    )
  }
  return null
}
