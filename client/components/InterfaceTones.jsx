import React, { Component } from 'react'
import { Link } from 'react-router'

class InterfaceTones extends Component {

  constructor(props){
    super(props)
    this.state = {
                    toneTrack: '',
                    play: false
                  }
    }

    changeTone(soundPath) {
      if (this.state.play == false) {
        this.setState({toneTrack: soundPath, play: true})
        console.log(this.state)
      } else {
        this.setState({toneTrack: soundPath, play: false})
      }
    }

  render() {

    return (
      <div className="tone-container">
        <audio id="toneAudio" src={this.state.toneTrack} autoPlay loop></audio>
        <div className="row music-pad-row">
          <div className="twelve columns">
            <a id="tone1" onClick={() => this.changeTone('../main/tones/1.wav')} className="tone-pad-btn">Tone 1</a>
            <a id="tone2" onClick={() => this.changeTone('../main/tones/2.wav')} className="tone-pad-btn">Tone 2</a>
            <a id="tone3" onClick={() => this.changeTone('../main/tones/3.wav')} className="tone-pad-btn">Tone 3</a>
          </div>
        </div>
        <div className="row music-pad-row">
          <div className="twelve columns">
            <Link to="/end" className="end-session-btn">I'm finished playing</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default InterfaceTones
