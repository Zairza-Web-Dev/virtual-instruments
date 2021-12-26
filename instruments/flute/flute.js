const keyMap = {
  113: "../../assets/audio/flute/1.wav",
  119: "../../assets/audio/flute/2.wav",
  101: "../../assets/audio/flute/3.wav",
  114: "../../assets/audio/flute/4.wav",
  116: "../../assets/audio/flute/5.wav",
  121: "../../assets/audio/flute/6.wav",
  117: "../../assets/audio/flute/7.wav",
  105: "../../assets/audio/flute/8.wav",
  97: "../../assets/audio/flute/9.wav",
  115: "../../assets/audio/flute/10.wav",
  100: "../../assets/audio/flute/11.wav",
  102: "../../assets/audio/flute/12.wav",
  103: "../../assets/audio/flute/13.wav",
  104: "../../assets/audio/flute/14.wav",
  106: "../../assets/audio/flute/15.wav",
  107: "../../assets/audio/flute/16.wav",
  122: "../../assets/audio/flute/17.wav",
  120: "../../assets/audio/flute/18.wav",
  99: "../../assets/audio/flute/19.wav",
  118: "../../assets/audio/flute/20.wav",
  98: "../../assets/audio/flute/21.wav",
  110: "../../assets/audio/flute/22.wav",
  109: "../../assets/audio/flute/23.wav",
  44: "../../assets/audio/flute/24.wav",
};


document.addEventListener("keypress", (event) => {
  console.log(event.keyCode);
  audioLoc = keyMap[event.keyCode.toString()];
  var audio = new Audio(audioLoc);
  audio.play();
  document.getElementById("q"+event.keyCode.toString()).style.backgroundColor = "aqua";
  document.getElementById("q"+event.keyCode.toString()).style.borderRadius = "5px";
  setTimeout(myFunction, 500);
  function myFunction() {
  document.getElementById("q"+event.keyCode.toString()).style.backgroundColor = "rgb(255, 189, 127)";
  document.getElementById("q"+event.keyCode.toString()).style.opacity = "0.7";
  document.getElementById("q"+event.keyCode.toString()).style.borderRadius = "0px";
  }
});
