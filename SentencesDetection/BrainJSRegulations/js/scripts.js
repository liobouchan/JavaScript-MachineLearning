let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 256));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
};

function execute(input) {
    let results = trainedNet(encode(input));
    console.log(results)
    let output;
    let certainty;
    if (results.obligacion > results.mandato) {
        output = 'Obligacion'
        certainty = Math.floor(results.obligacion * 100)
    } else { 
        output = 'Mandato'
        certainty = Math.floor(results.mandato * 100)
    }

    return "I'm " + certainty + "% sure that the sentence is a  " + output;
}

train(trainingData);
console.log(execute("Tratándose de una Metodología Interna con enfoque Básico, obteniendo la Probabilidad de Incumplimiento de sus posiciones sujetas a riesgo de crédito. Para el resto de los componentes del riesgo, las Instituciones deberán ajustarse a lo establecido en el referido Apartado C de esta sección. "));
console.log(execute("Las instituciones estan obligadas a presentar los hechos al jurado"));
console.log(execute("Se Obliga a cumplir con lo estipulado"));
console.log(execute("Las partes se obligarán a cumplir con sus contratos"));
console.log(execute("Están obligados por la ley a intervenir"));

