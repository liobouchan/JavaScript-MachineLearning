console.log("Entrando");
var net = new brain.recurrent.LSTM();

net.train([
  { input: 'I feel great about the world!', output: 'happy' },
  { input: 'The world is a terrible place!', output: 'sad' },
]);

const json = net.toJSON();
console.log(json);
var output = net.run('I feel great about the world!');  // 'happy'
console.log(output);