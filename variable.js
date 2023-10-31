// Declarar una variable llamada challenge y asignarle un valor inicial
var challenge = '30DaysOfJavaScript';

// Imprimir la cadena en la consola
console.log(challenge);

// Imprimir la longitud de la cadena en la consola
console.log(challenge.length);

// Cambiar todos los caracteres de la cadena a letras mayúsculas
console.log(challenge.toUpperCase());

// Cambiar todos los caracteres de la cadena a letras minúsculas
console.log(challenge.toLowerCase());

// Cortar la primera palabra de la cadena usando substring
console.log(challenge.substring(0, 2)); // Esto cortará '30'

// Cortar la palabra 'DaysOfJavaScript' de '30DaysOfJavaScript'
console.log(challenge.substring(2)); // Esto cortará 'DaysOfJavaScript'

// Comprobar si la cadena contiene la palabra 'Script' usando includes
console.log(challenge.includes('Script'));

// Dividir la cadena en un arreglo usando split
console.log(challenge.split(''));

// Dividir la cadena '30 días de JavaScript' en espacios usando split
console.log(challenge.split(' '));

// Dividir la cadena 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' por la coma y convertirla en un arreglo
var companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(companies.split(','));

// Cambiar '30 días de JavaScript' a '30 días de Node' usando replace
console.log(challenge.replace('JavaScript', 'Node'));
