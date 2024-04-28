/*
string- cadeia de caracteres , texto
*/

const escola = 'Cod3r'

console.log(escola.charAt(4)) // abreviaçao de caracter - at na posicao
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola'.concat(escola).concat('!')) //concat =juntar 
console.log(escola.replace(3, 'e')) //replace=substituir

console.log('Ana,Maria,PEdro')