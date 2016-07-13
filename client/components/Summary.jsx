import React from 'react'
import { Link } from 'react-router'


export default (props) => {
  return (
    <div id="gradient">
      <div className="mood-dscrpt">
        <h3>Summary of your session</h3>
      </div>
      <div className="emoticon-container">
        <div className="interface row">
            <div className="twelve columns">
              <img className="emoticon" src={"./bored-emoticon.svg"} alt="" />
              <img className="emoticon" src={"./happy-emoticon.svg"} alt="" />
            </div>
        </div>
      </div>
      <div className="new-session-btn-container">
        <div className="row music-pad-row">
          <div className="twelve columns">
            <Link to="/" className="tone-pad-btn">Try a new session.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
