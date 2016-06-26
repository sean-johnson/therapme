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

	function animateSound(key) {
		console.log("Here is key press: ", key)
		document.getElementById(soundId)
	}

	if (soundId) {
		animateSound(soundId)
		document.getElementById(soundId).innerHTML="<embed src='../sounds/main/" + soundId + ".wav' autostart=true loop=false volume=100 hidden=true>"
    	return true
    } else {
    	console.log("HERE is soundId; ", soundId)
    	console.log("key not mapped : code is", e.keyCode);
    }	
}


