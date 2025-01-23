// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

const gifts1 = [3, 1, 2, 3, 4, 2, 5];

function preparedGifts1(gifts) {
  gifts = gifts.sort((a, b) => a - b);

  gifts = gifts.filter((value, index, arr) => arr.indexOf(value) === index);

  return gifts;
}

console.log(preparedGifts1(gifts1));
