/* Importing the key mapping data */

// This json contains the mapping of various keycode to the corresponding audio files
const keyMap = {
    "113": "../../assets/audio/celeste/1.wav",
    "119": "../../assets/audio/celeste/2.wav",
    "101": "../../assets/audio/celeste/3.wav",
    "114": "../../assets/audio/celeste/4.wav",
    "116": "../../assets/audio/celeste/5.wav",
    "121": "../../assets/audio/celeste/6.wav",
    "117": "../../assets/audio/celeste/7.wav",
    "105": "../../assets/audio/celeste/8.wav",
    "97": "../../assets/audio/celeste/9.wav",
    "115": "../../assets/audio/celeste/10.wav",
    "100": "../../assets/audio/celeste/11.wav",
    "102": "../../assets/audio/celeste/12.wav",
    "103": "../../assets/audio/celeste/13.wav",
    "104": "../../assets/audio/celeste/14.wav",
    "106": "../../assets/audio/celeste/15.wav",
    "107": "../../assets/audio/celeste/16.wav",
    "122": "../../assets/audio/celeste/17.wav",
    "120": "../../assets/audio/celeste/18.wav",
    "99": "../../assets/audio/celeste/19.wav",
    "118": "../../assets/audio/celeste/20.wav",
    "98": "../../assets/audio/celeste/21.wav",
    "110": "../../assets/audio/celeste/22.wav",
    "109": "../../assets/audio/celeste/23.wav",
    "44": "../../assets/audio/celeste/24.wav"
}

// Detecting keypress
document.onkeypress = function(event) {
    console.log(event.keyCode);
    // Fetching audio file location
    audioLoc = keyMap[event.keyCode.toString()];

    // Opening the audio file
    var audio = new Audio(audioLoc);

    // Playing audio
    audio.play();
}