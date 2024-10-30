const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

console.table(myInstruments);

myInstruments.push("tuba");

function getFirstInstrument(instruments) {
    return instruments[0];
}
console.log("First instrument:", getFirstInstrument(myInstruments));

function getLastInstrument(instruments) {
    return instruments[instruments.length - 1];
}
console.log("Last instrument:", getLastInstrument(myInstruments));

function getFirstAndLastInstruments(instruments) {
    return [getFirstInstrument(instruments), getLastInstrument(instruments)];
}
console.log(getFirstAndLastInstruments(myInstruments));

function getFirstThreeInstruments(instruments) {
    return instruments.slice(0, 3)

}
console.log(getFirstThreeInstruments(myInstruments));

function getTInstruments(myInstruments) {
    const tInstruments = [];
    for (let index = 0; index < myInstruments.length; index++) {
        let currentInstrument = myInstruments[index];

        if (currentInstrument.charAt(0) == "t") {
            tInstruments.push(currentInstrument);
        }
    }
    return tInstruments;
}
console.log(getTInstruments(myInstruments));
