var text = '30díasdeJavaScript';

// ¿Cuál es el carácter en el índice 15 en la cadena '30díasdeJavaScript'?
var charAtIndex15 = text.charAt(15);
console.log(charAtIndex15); // Imprimirá 'r'

// ¿Cuál es el código de carácter de 'J' en la cadena '30díasdeJavaScript' usando charCodeAt?
var charCodeOfJ = text.charCodeAt(6);
console.log(charCodeOfJ); // Imprimirá 74 (el valor ASCII de 'J')

// Usar indexOf para encontrar la posición de la primera aparición de 'a' en '30díasdeJavaScript'
var firstIndexOfA = text.indexOf('a');
console.log(firstIndexOfA); // Imprimirá 1 (la 'a' aparece en la posición 1)

// Usar lastIndexOf para encontrar la posición de la última aparición de 'a' en '30díasdeJavaScript'
var lastIndexOfA = text.lastIndexOf('a');
console.log(lastIndexOfA); // Imprimirá 8 (la última 'a' aparece en la posición 8)

// Usar indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en una oración
var sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
var firstIndexOfPorque = sentence.indexOf('porque');
console.log(firstIndexOfPorque); // Imprimirá 29 (la primera aparición de 'porque' comienza en la posición 29)

// Usar lastIndexOf para encontrar la posición de la última aparición de la palabra 'porque' en la misma oración
var lastIndexOfPorque = sentence.lastIndexOf('porque');
console.log(lastIndexOfPorque); // Imprimirá 46 (la última aparición de 'porque' comienza en la posición 46)

// Usar búsqueda para encontrar la posición de la primera aparición de la palabra 'porque' en la oración
var indexOfPorqueUsingSearch = sentence.search('porque');
console.log(indexOfPorqueUsingSearch); // Imprimirá 29 (la primera aparición de 'porque' comienza en la posición 29)

// Eliminar espacios en blanco al principio y al final de una cadena
var str = ' 30 días de JavaScript ';
console.log(str.trim()); // Esto eliminará los espacios en blanco y dará '30 días de JavaScript'

// Verificar si la cadena comienza con '30'
console.log(challenge.startsWith('30')); // Debe devolver true

// Verificar si la cadena termina con 'JavaScript'
console.log(challenge.endsWith('JavaScript')); // Debe devolver true

// Encontrar todas las letras 'a' en '30 días de JavaScript' usando match
var str2 = '30 días de JavaScript';
console.log(str2.match(/a/g)); // Debe devolver un arreglo ['a', 'a', 'a']

// Concatenar '30 días de ' y 'JavaScript' en una sola cadena
var part1 = '30 días de ';
var part2 = 'JavaScript';
var combined = part1.concat(part2);
console.log(combined); // Debe dar '30 días de JavaScript'

// Imprimir '30 días de JavaScript' dos veces
console.log(challenge.repeat(2)); // Debe imprimir la cadena dos veces
