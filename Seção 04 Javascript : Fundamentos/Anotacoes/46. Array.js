/*Array e um vetor para agrupar diversas var
[] usado para adicionar o indice a ser apresentandado 
do array 
o array sempre inicia o indice em zero 
array junta diversas variaveis em um unico local 
*/

const valores =[7.7, 8.9, 6.3, 9.2] //a , e usada para separar os array
console.log(valores[0],valores[3])
console.log(valores[4])//undefined pois não existe o 4 array

valores[4]=10 // aqui ele add o indice 4 
console.log(valores)
console.log(valores.length)//length quantos elementos tem no array

valores.push({id: 3}, false,null,"teste")//push add elementos no array 
console.log(valores)

console.log (valores.pop()) //pop tira o ultimo elemento
delete valores [0]
console.log(valores)

console.log(typeof valores)//array e um objeto