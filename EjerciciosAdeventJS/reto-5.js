// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const organizeShoes = (shoes) => {
  let pairShoes = [];
  shoes.forEach((element, index) => {
    for (let i = 0; i < shoes.length; i++) {
      if (element.type != shoes[i].type && element.size === shoes[i].size) {
        pairShoes.push(element.size);
        shoes.splice(i, 1);
        shoes.splice(index, 1);
      }
    }
  });
  return pairShoes;
};

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
//[38, 42];

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

console.log(organizeShoes(shoes2));

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []

const shoes4 = [
  { type: "I", size: 39 },
  { type: "R", size: 39 },
  { type: "R", size: 39 },
];
console.log(organizeShoes(shoes4));

// [39]

// Codigo viejo
// function organizeShoes(shoes) {
//   let newArr = []
//   let tenisR = {}
//   let tenisI = {}
//   for (let i = 0 ; i< shoes.length ; i++) {
//       tenisR = shoes[i]
//       for ( let j = 0; j<shoes.length; j++){
//           tenisI = shoes[j]
//           if (
//               tenisR.type === 'I'
//               &&
//               tenisR.type != tenisI.type
//               &&
//               tenisR.size === tenisI.size
//           ) {
//               console.log({tenisR}, {tenisI})
//               console.log(shoes)
//               newArr.push(tenisR.size)
//               shoes.splice(j, 1)
//           }

//       }
//   }
//   console.log(newArr)
//   return newArr
// }
