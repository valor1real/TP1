const notes = [12, 8, 15, 10, 7];

let sum = 0;
for (let i = 0; i < notes.length; i++) {
  sum += notes[i];
}

let moyenne = sum / notes.length;

let meilleureNote = Math.max(...notes);

let admisCount = 0;
for (let i = 0; i < notes.length; i++) {
  if (notes[i] >= 10) {
    admisCount++;
  }
}

console.log("Notes: " + notes.join(", "));
console.log("Moyenne: " + moyenne);
console.log("Meilleure note: " + meilleureNote);
console.log("Nombre d'étudiants admis: " + admisCount);
