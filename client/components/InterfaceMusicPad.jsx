import React, { Component } from 'react'
import keydown from 'react-keydown'


class InterfaceMusicPad extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      key: '1'
    };
  }

  componentWillReceiveProps( nextProps ) {

    const { keydown: { event } } = nextProps;
    if ( event ) {
      this.setState( { key: event.which } )
      var soundId = this.state.key
      new Howl({
        urls: ["../main/" + soundId + ".wav"]
      }).play()

        showColor(soundId)

    }

    function showColor(keyId) {

        var idPressed = document.getElementById( keyId + "-animation")
    		var max = 255
    		var min = 1
    		var x = Math.random() * (max - min) + min
    		var y = Math.random() * (max - min) + min
    		var z = Math.random() * (max - min) + min
    		var colorGenerator = 'rgba(' + x + ',' + y + ',' + z + ',0.5)'

    		var tl = new TimelineMax({paused:true})
        tl.to(idPressed, .5, {
    				backgroundColor: colorGenerator,
    				width: "+=125px",
    				height: "+=125px",
    				borderRadius: "50%",
    				ease:Elastic.easeOut,
    			})
    			.to(idPressed, .5, {
    				width:10,
    				height:10,
    				backgroundColor: colorGenerator,
    				ease:Strong.easeInOut})
    			.restart()
    }

  }


  render () {

    return (
      <div className="music-pad-container">

        <div className="interface">
        	<div className="row music-pad-row">
        		<div className="twelve columns hi-keys">
        			<div className="music-pad-key" name="q"><div className="animation" id="81-animation"></div></div>
        			<div className="music-pad-key" name="w"><div className="animation" id="87-animation"></div></div>
        			<div className="music-pad-key" name="e"><div className="animation" id="69-animation"></div></div>
        			<div className="music-pad-key" name="r"><div className="animation" id="82-animation"></div></div>
        			<div className="music-pad-key" name="t"><div className="animation" id="84-animation"></div></div>
        			<div className="music-pad-key" name="y"><div className="animation" id="89-animation"></div></div>
        			<div className="music-pad-key" name="u"><div className="animation" id="85-animation"></div></div>
        			<div className="music-pad-key" name="i"><div className="animation" id="73-animation"></div></div>
        			<div className="music-pad-key" name="o"><div className="animation" id="79-animation"></div></div>
        			<div className="music-pad-key" name="p"><div className="animation" id="80-animation"></div></div>
        		</div>
        	</div>

        	<div className="row music-pad-row">
        		<div className="twelve columns mid-keys">
        			<div className="music-pad-key" name="a"><div className="animation" id="65-animation"></div></div>
        			<div className="music-pad-key" name="s"><div className="animation" id="83-animation"></div></div>
        			<div className="music-pad-key" name="d"><div className="animation" id="68-animation"></div></div>
        			<div className="music-pad-key" name="f"><div className="animation" id="70-animation"></div></div>
        			<div className="music-pad-key" name="g"><div className="animation" id="71-animation"></div></div>
        			<div className="music-pad-key" name="h"><div className="animation" id="72-animation"></div></div>
        			<div className="music-pad-key" name="j"><div className="animation" id="74-animation"></div></div>
        			<div className="music-pad-key" name="k"><div className="animation" id="75-animation"></div></div>
        			<div className="music-pad-key" name="l"><div className="animation" id="76-animation"></div></div>
        		</div>
        	</div>

        	<div className="row music-pad-row">
        		<div className="twelve columns low-keys">
        			<div className="music-pad-key" name="z"><div className="animation" id="90-animation"></div></div>
        			<div className="music-pad-key" name="x"><div className="animation" id="88-animation"></div></div>
        			<div className="music-pad-key" name="c"><div className="animation" id="67-animation"></div></div>
        			<div className="music-pad-key" name="v"><div className="animation" id="86-animation"></div></div>
        			<div className="music-pad-key" name="b"><div className="animation" id="66-animation"></div></div>
        			<div className="music-pad-key" name="n"><div className="animation" id="78-animation"></div></div>
        			<div className="music-pad-key" name="m"><div className="animation" id="77-animation"></div></div>
        		</div>
        	</div>
        </div>
      </div>
    )
  }
}

export default keydown(InterfaceMusicPad)
