// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

const inBox = (box) => {
  let valuer = false;
  box.forEach((element, index) => {
    if (
      element.indexOf("*") != -1 &&
      element.endsWith("#", 1) &&
      element.endsWith("#") &&
      index != 0 &&
      index != box.length - 1
    ) {
      valuer ||= true;
    }
  });
  return valuer;
};

console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
