const notes = [

"C4",
"D4",
"E4",
"F4",
"G4",
"A4",
"B4",
"C5"

];

async function generateMusic(){

await Tone.start();

const synth =
new Tone.Synth().toDestination();

let melody = [];

for(let i = 0; i < 8; i++){

const randomNote =

notes[Math.floor(Math.random() * notes.length)];

melody.push(randomNote);

}

document.getElementById("notesBox").innerText =
melody.join(" - ");

let now = Tone.now();

melody.forEach((note, index) => {

synth.triggerAttackRelease(

note,

"8n",

now + index * 0.5

);

});

}