import React from 'react'
import { Link } from 'react-router'


export default (props) => {
  return (
    <div id="gradient">
      <div className="mood-dscrpt">
        <h3>Now, how do you feel?</h3>
      </div>
      <div className="emoticon-container">
        <div className="interface row">
            <div className="twelve columns">
              <Link to="/summary"><img className="emoticon" src={"./happy-emoticon.svg"} alt="" /></Link>
              <Link to="/summary"><img className="emoticon" src={"./sad-emoticon.svg"} alt="" /></Link>
              <Link to="/summary"><img className="emoticon" src={"./bored-emoticon.svg"} alt="" /></Link>
              <Link to="/summary"><img className="emoticon" src={"./angry-emoticon.svg"} alt="" /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
