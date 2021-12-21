const meteors = new mojs.Burst({
  left: 0,
  top: 0,
  count: 3,
  radius: { 0: 250 },

  children: {
    shape: "line",
    stroke: ["#F9DD5E", "#FC2D79", "#11CDC5"],
    duration: 400,
    radius: 60,
    strokeWidth: 8,
    isForce3d: true,
  },
});

const keyMap = {
  113: "../../assets/audio/bagpipe/1.wav",
  119: "../../assets/audio/bagpipe/2.wav",
  101: "../../assets/audio/bagpipe/3.wav",
  114: "../../assets/audio/bagpipe/4.wav",
  116: "../../assets/audio/bagpipe/5.wav",
  121: "../../assets/audio/bagpipe/6.wav",
  117: "../../assets/audio/bagpipe/7.wav",
  105: "../../assets/audio/bagpipe/8.wav",
  97: "../../assets/audio/bagpipe/9.wav",
  115: "../../assets/audio/bagpipe/10.wav",
  100: "../../assets/audio/bagpipe/11.wav",
  102: "../../assets/audio/bagpipe/12.wav",
  103: "../../assets/audio/bagpipe/13.wav",
  104: "../../assets/audio/bagpipe/14.wav",
  106: "../../assets/audio/bagpipe/15.wav",
  107: "../../assets/audio/bagpipe/16.wav",
  122: "../../assets/audio/bagpipe/17.wav",
  120: "../../assets/audio/bagpipe/18.wav",
  99: "../../assets/audio/bagpipe/19.wav",
  118: "../../assets/audio/bagpipe/20.wav",
  98: "../../assets/audio/bagpipe/21.wav",
  110: "../../assets/audio/bagpipe/22.wav",
  109: "../../assets/audio/bagpipe/23.wav",
  44: "../../assets/audio/bagpipe/24.wav",
};

document.addEventListener("keypress", (event) => {
  const coords = {
    x: Math.floor(Math.random() * 1200),
    y: Math.floor(Math.random() * 800),
  };
  meteors.tune(coords).replay();
  audioLoc = keyMap[event.keyCode.toString()];

  var audio = new Audio(audioLoc);

  audio.play();
});
