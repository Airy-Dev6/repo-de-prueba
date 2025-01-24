// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

let listGoodKids = ["midu", "madeval", "educalvolpz"];

const createFrame = (names) => {
  let frame = "";

  let lengthFrame = "".padEnd(
    names.reduce((a, b) => (a.length > b.length ? a : b)).length + 4,
    "*"
  );
  names.forEach((element) => {
    frame += `* ${element}`.padEnd(lengthFrame.length - 1, " ") + "*\n";
  });

  return lengthFrame + "\n" + frame + lengthFrame;
};

console.log(createFrame(listGoodKids));
