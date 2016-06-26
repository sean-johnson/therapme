var sounds = {
	65 : 65, //A-key',
	66 : 66, //B-key', 
	67 : '', //C-key',
	68 : '', //D-key',
	69 : '', //E-key',
	70 : '', //F-key',
	71 : '', //G-key',
	72 : '', //H-key',
	73 : '', //I-key',
	74 : '', //J-key',
	75 : '', //K-key',
	76 : '', //L-key',
	77 : '', //M-key',
	78 : '', //N-key',
	79 : '', //O-key',
	80 : '', //P-key',
	81 : '', //Q-key',
	82 : '', //R-key',
	83 : '', //S-key',
	84 : '', //T-key',
	85 : '', //U-key',
	86 : '', //V-key',
	87 : '', //W-key',
	88 : '', //X-key',
	89 : '', //Y-key',
	90 : '' //Z-key'
}


document.onkeydown = function(e) {

	var soundId = sounds[e.keyCode]

	if (soundId) {
		document.getElementById(soundId).innerHTML="<embed src='../sounds/main/" + soundId + ".wav' autostart=true loop=false volume=100 hidden=true>"
    	return true
    } else {
    	console.log("HERE is soundId; ", soundId)
    	console.log("key not mapped : code is", e.keyCode);
    }	
}


