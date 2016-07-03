var soundBites = {
	65 : 65, //A-key - Mid
	66 : 66, //B-key - Low
	67 : 67, //C-key - Low
	68 : 68, //D-key - Mid
	69 : 69, //E-key
	70 : 70, //F-key - Mid
	71 : 71, //G-key - Mid
	72 : 72, //H-key - Mid
	73 : 73, //I-key
	74 : 74, //J-key - Mid
	75 : 75, //K-key - Mid
	76 : 76, //L-key - Mid
	77 : 77, //M-key - Low
	78 : 78, //N-key - Low
	79 : 79, //O-key
	80 : 80, //P-key
	81 : 81, //Q-key
	82 : 82, //R-key
	83 : 83, //S-key - Mid
	84 : 84, //T-key
	85 : 85, //U-key
	86 : 86, //V-key - Low
	87 : 87, //W-key
	88 : 88, //X-key - Low
	89 : 89, //Y-key
	90 : 90  //Z-key - Low
}

document.onkeydown = function(e) {

	var soundId = soundBites[e.keyCode]

	var soundKey = new Howl({
	  urls: ["../sounds/main/" + soundId + ".wav"]
	})

	if (soundId) {
		soundKey.play()
		showColor(soundId)
    } else {
    	console.log("key not mapped : code is", e.keyCode, "Here is soundId; ", soundId);
    }
}

function StartOrStop(audioFile) {
    var audie = document.getElementById("toneAudio");

   	audie.src = audioFile;

    if (audie.value === true) {
        console.log('pause');
        audie.value = false
        audie.pause();
    } else {
    	console.log('play ', audie.src)
    	audie.value = true
        audie.play();
    }
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

document.addEventListener('mousemove', function(event) {

	// Setting up gradient environment
	var x = event.clientX
	var y = event.clientY
	// Mouse posiition --> into numbers
	var w = x / 5
	var h = y / 2
	// Mouse position alters rgb colours
	var rgb = [ Math.round(w), Math.round(h), 150]


	// Checking browser compatibility
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
	var isFirefox = typeof InstallTrigger !== 'undefined'
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
	var isIE = false || !!document.documentMode
	var isChrome = !!window.chrome && !!window.chrome.webstore
	var isEdge = !isIE && !!window.StyleMedia
	// CSS styling catered to browser
	var isOperaGrad = " background: -o-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	var isFirefoxGrad = " background: -moz-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	var isSafariGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	var isIEGrad = " background: -ms-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	var isChromeGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	var isEdgeGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));"
	// Browsers put into an array
	var browserArr = [isOpera, isFirefox, isSafari, isIE, isChrome, isEdge];
	var styleArr = [isOperaGrad, isFirefoxGrad, isSafariGrad, isIEGrad, isChromeGrad, isEdgeGrad];
	// Functionality
	for (var i = 0; i <= browserArr.length; i++) {

		if (browserArr[i] === true) {
			var counter = i;
			document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed;" + styleArr[i];
		}

	}

});
