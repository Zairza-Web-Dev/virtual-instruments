const RADIUS = 28;
const circle = new mojs.Shape({
  left: 0,
  top: 0,
  stroke: "crimson",
  strokeWidth: { [2 * RADIUS]: 0 },
  fill: "none",
  scale: { 2: 1, easing: "quad.out" },
  radius: RADIUS,
  duration: 450,
});

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 6: RADIUS - 7 },
  angle: 45,
  children: {
    shape: "line",
    radius: RADIUS / 7.3,
    scale: 2,
    stroke: "crimson",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    degreeShift: "stagger(0,-5)",
    duration: 700,
    delay: 200,
    easing: "quad.out",
  },
});

class Star extends mojs.CustomShape {
  getShape() {
    return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
  }
}
mojs.addShape("star", Star);

const star = new mojs.Shape({
  left: 0,
  top: 0,
  shape: "star",
  fill: "crimson",
  scale: { 2: 1 },
  easing: "elastic.out",
  duration: 1600,
  delay: 300,
  radius: RADIUS / 2.25,
});

const timeline = new mojs.Timeline({ speed: 1.5 });

timeline.add(burst, circle, star);

const keyMap = {
  113: "../../assets/audio/banjo/1.wav",
  119: "../../assets/audio/banjo/2.wav",
  101: "../../assets/audio/banjo/3.wav",
  114: "../../assets/audio/banjo/4.wav",
  116: "../../assets/audio/banjo/5.wav",
  121: "../../assets/audio/banjo/6.wav",
  117: "../../assets/audio/banjo/7.wav",
  105: "../../assets/audio/banjo/8.wav",
  97: "../../assets/audio/banjo/9.wav",
  115: "../../assets/audio/banjo/10.wav",
  100: "../../assets/audio/banjo/11.wav",
  102: "../../assets/audio/banjo/12.wav",
  103: "../../assets/audio/banjo/13.wav",
  104: "../../assets/audio/banjo/14.wav",
  106: "../../assets/audio/banjo/15.wav",
  107: "../../assets/audio/banjo/16.wav",
  122: "../../assets/audio/banjo/17.wav",
  120: "../../assets/audio/banjo/18.wav",
  99: "../../assets/audio/banjo/19.wav",
  118: "../../assets/audio/banjo/20.wav",
  98: "../../assets/audio/banjo/21.wav",
  110: "../../assets/audio/banjo/22.wav",
  109: "../../assets/audio/banjo/23.wav",
  44: "../../assets/audio/banjo/24.wav",
};

document.addEventListener("keypress", (event) => {
  const coords = {
    x: Math.floor(Math.random() * 1200),
    y: Math.floor(Math.random() * 800),
  };
  burst.tune(coords);
  circle.tune(coords);
  star.tune(coords);
  timeline.replay();

  console.log(event.keyCode);
  audioLoc = keyMap[event.keyCode.toString()];

  var audio = new Audio(audioLoc);

  audio.play();
});
