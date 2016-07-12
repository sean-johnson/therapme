import React from 'react'

export default (props) => {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {props.things.map((thing) => {
          return (
            <li key={thing.id}>
              {thing.name} {' '}
              <a href="#" onClick={() => props.showDetails(thing.id)}>(show details)</a>
            </li>
          )
        })}
      </ul>
      <a href="#" onClick={props.addThing}>Add random thing</a>
    </div>
  )
}
