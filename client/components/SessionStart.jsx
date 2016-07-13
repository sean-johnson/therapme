import React from 'react'
import Emoticons from './Emoticons'


export default (props) => {
  return (
    <div id="gradient">
      <div className="mood-dscrpt">
        <h3>How do you feel?</h3>
      </div>
      <Emoticons />
    </div>
  )
}
