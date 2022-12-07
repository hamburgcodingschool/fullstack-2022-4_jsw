const context = new AudioContext();
const amp = new GainNode(context, { gain: 0.2 });
amp.connect(context.destination);

// Numbers taken from
// https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling
const FREQUENCIES = [
  [1336, 941], // 0
  [1209, 697], // 1
  [1336, 697], // 2
  [1477, 697], // 3
  [1209, 770], // 4
  [1336, 770], // 5
  [1477, 770], // 6
  [1209, 852], // 7
  [1336, 852], // 8
  [1477, 852], // 9
  [1209, 941], // *
  [1477, 941], // #
];

function dialtone(num) {
  context.resume().then(() => {
    let frequencies = FREQUENCIES[num];
    if (isNaN(Number(num))) {
      if (num === "*") {
        frequencies = FREQUENCIES[10];
      } else if (num === "#") {
        frequencies = FREQUENCIES[11];
      }
    }
    if (frequencies == null) {
      return;
    }
    const osc1 = new OscillatorNode(context, {
      type: "sine",
      frequency: frequencies[0],
    });
    const osc2 = new OscillatorNode(context, {
      type: "sine",
      frequency: frequencies[1],
    });
    osc1.connect(amp);
    osc2.connect(amp);
    osc1.start(context.currentTime);
    osc1.stop(context.currentTime + 0.2);
    osc2.start(context.currentTime);
    osc2.stop(context.currentTime + 0.2);
  });
}
