const keyMap = {
  113: "../../assets/audio/basic-drums/1.wav",
  119: "../../assets/audio/basic-drums/2.wav",
  101: "../../assets/audio/basic-drums/3.wav",
  114: "../../assets/audio/basic-drums/4.wav",
  116: "../../assets/audio/basic-drums/5.wav",
  121: "../../assets/audio/basic-drums/6.wav",
  117: "../../assets/audio/basic-drums/7.wav",
  105: "../../assets/audio/basic-drums/8.wav",
  97: "../../assets/audio/basic-drums/9.wav",
  115: "../../assets/audio/basic-drums/10.wav",
  100: "../../assets/audio/basic-drums/11.wav",
  102: "../../assets/audio/basic-drums/12.wav",
  103: "../../assets/audio/basic-drums/13.wav",
  104: "../../assets/audio/basic-drums/14.wav",
  106: "../../assets/audio/basic-drums/15.wav",
  107: "../../assets/audio/basic-drums/16.wav",
  122: "../../assets/audio/basic-drums/17.wav",
  120: "../../assets/audio/basic-drums/18.wav",
  99: "../../assets/audio/basic-drums/19.wav",
  118: "../../assets/audio/basic-drums/20.wav",
  98: "../../assets/audio/basic-drums/21.wav",
  110: "../../assets/audio/basic-drums/22.wav",
  109: "../../assets/audio/basic-drums/23.wav",
  44: "../../assets/audio/basic-drums/24.wav",
};


document.addEventListener("keypress", (event) => {
  console.log(event.keyCode);
  audioLoc = keyMap[event.keyCode.toString()];
  var audio = new Audio(audioLoc);
  audio.play();
  var myobj = document.getElementById("q"+event.keyCode.toString()).style.backgroundColor = "aqua";
  document.getElementById("q"+event.keyCode.toString()).style.borderRadius = "5px";
});
