import React from 'react'

export default (props) => {
  return (
    <div className="emoticon-container">
      <div className="interface row">
          <div className="twelve columns">
            <a id="bored" href="#happy"><img className="emoticon" src={"./happy-emoticon.svg"} alt="" /></a>
            <a id="bored" href="#Bored"><img className="emoticon" src={"./sad-emoticon.svg"} alt="" /></a>
            <a id="sad" href="#Sad"><img className="emoticon" src={"./bored-emoticon.svg"} alt="" /></a>
            <a id="angry" href="#Angry"><img className="emoticon" src={"./angry-emoticon.svg"} alt="" /></a>
          </div>
      </div>
    </div>
  )
}
