// définir des arrays
const a1 = [1, 10, -32.8, 21];
const a2 = ["hi", "hello", "hallo", "bonjour"];
const a3 = [true, 1231.23, "hi", [1, false, "encore"]];

const a4 = [document.body, document.getElementById("container")];

// connaître le nombre d'éléments dans un array
console.log( a1.length );       // 4
console.log( a2.length );       // 4
console.log( a3.length );       // 4
console.log( a4.length );       // 2

// accéder un l'élément
console.log( a1[0] );       // 1
console.log( a1[1] );       // 10
console.log( a1[2] );       // -32.8
console.log( a1[3] );       // 21
console.log( a1[4] );       // undefined

console.log( a2[0] );       // hi
console.log( a2[1] );       // hello
console.log( a2[2] );       // hallo
console.log( a2[3] );       // bonjour
console.log( a2[4] );       // undefined

console.log( a3[0] );       // true
console.log( a3[1] );       // 1231.23
console.log( a3[2] );       // hi
console.log( a3[3] );       // [1, false, "encore"]
console.log( a3[4] );       // undefined

// remplacer un élément
a1[0] = "ceci est l'élément à l'indice 0";
a1[1] = false;
a1[2] = "nouvel élément";
a1[3] = "----";
a1[4] = document.body;