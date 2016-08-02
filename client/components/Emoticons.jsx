import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="emoticon-container">
      <div className="interface row">
          <div className="twelve columns">
            <Link to="/play"><img className="emoticon" src={"./happy-emoticon.svg"} alt="" /></Link>
            <Link to="/play"><img className="emoticon" src={"./sad-emoticon.svg"} alt="" /></Link>
            <Link to="/play"><img className="emoticon" src={"./bored-emoticon.svg"} alt="" /></Link>
            <Link to="/play"><img className="emoticon" src={"./angry-emoticon.svg"} alt="" /></Link>
          </div>
      </div>
    </div>
  )
}
