import React, { Component } from 'react'
import InterfaceHeader from './InterfaceHeader'
import InterfaceMusicPad from './InterfaceMusicPad'
import InterfaceTones from './InterfaceTones'
import EventListener from 'react-event-listener';

class Interface extends Component {

  handleMouseMove() {
      // Setting up gradient environment
  	var x = event.clientX
  	var y = event.clientY
  	// Mouse posiition --> into numbers
  	var w = x / 5
  	var h = y / 2
  	// Mouse position alters rgb colours
  	var rgb = [ Math.round(w), Math.round(h), 150]

  	// Checking browser compatibility
  	var isFirefox = typeof InstallTrigger !== 'undefined'
  	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
  	var isChrome = !!window.chrome && !!window.chrome.webstore
  	// CSS styling catered to browser
  	var isFirefoxGrad = " background: -moz-linear-gradient(to right bottom, rgba(255, 226, 209, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
  	var isSafariGrad = " background: linear-gradient(to right bottom, rgba(255, 226, 209, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
  	var isChromeGrad = " background: linear-gradient(to right bottom, rgba(255, 226, 209, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"

  	var browserArr = [isFirefox, isSafari, isChrome];
  	var styleArr = [isFirefoxGrad, isSafariGrad, isChromeGrad];
  	// Functionality
  	for (var i = 0; i <= browserArr.length; i++) {

  		if (browserArr[i] === true) {
  			var counter = i;
  			document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed;" + styleArr[i];
  		}

  	}

  };


  render() {
      return (
        <div id="gradient">
            <InterfaceHeader />
            <InterfaceMusicPad />
            <InterfaceTones />
            <EventListener target={document} onMouseMove={this.handleMouseMove} capture={true} />
        </div>
    )
  }
}

export default Interface
