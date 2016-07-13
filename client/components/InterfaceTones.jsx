import React, { Component } from 'react'

class InterfaceTones extends Component {

  constructor(props){
    super(props)
    this.state = {
                    toneTrack: '',
                    play: false
                  }
    }

    changeTone(soundPath) {
      this.setState({toneTrack: soundPath, play: true})

      const audio = document.getElementById("toneAudio");
      audio.src = soundPath;

      audio.play();
    }

  render() {

    return (
      <div className="tone-container">
        <audio id="toneAudio" src={this.state.toneTrack}  loop></audio>
        <div className="row music-pad-row">
          <div className="twelve columns tone-pad-container" id="tone-selection">
            <a id="tone1" onClick={() => this.changeTone('../sounds/main/tones/1.wav')} className="tone-pad-btn">Tone 1</a>
            <a id="tone2" onClick={() => this.changeTone('../sounds/main/tones/2.wav')} className="tone-pad-btn">Tone 2</a>
            <a id="tone3" onClick={() => this.changeTone('../sounds/main/tones/3.wav')} className="tone-pad-btn">Tone 3</a>
          </div>
        </div>
      </div>
    )
  }
}

//StartOrStop('../sounds/main/tones/1.wav')


export default InterfaceTones





// var audie = document.getElementById("toneAudio")

// audie.src = '"' + soundPath + '"'
//
//
//
// if (audie.value === true) {
//     console.log('pause')
//     audie.value = false
//     audie.pause()
// } else {
//   console.log('play ', audie.src)
//   audie.value = true
//     audie.play()
// }
