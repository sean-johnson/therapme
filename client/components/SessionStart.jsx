import React from 'react'


export default (props) => {
  return (
    <div id="gradient">
      <div className="mood-dscrpt">
        <h3>How do you feel?</h3>
      </div>
      <div className="mood-btn-container">
        <div className="interface">
        	<div className="row">
        		<div className="twelve columns hi-keys">
              <a id="bored" href="#happy" className="mood-btn"><img src={"./happy-emoticon.svg"} alt="" /></a>
              <a id="bored" href="#Bored" className="mood-btn">Bored</a>
              <a id="sad" href="#Sad" className="mood-btn">Sad</a>
              <a id="angry" href="#Angry" className="mood-btn">Angry</a>
        		</div>
        	</div>
        </div>
      </div>
      <div className="submit-btn-container">
        <a href="/interface"><button className="submit-btn" type="button" name="start">I'm ready</button></a>
      </div>
    </div>
  )
}
