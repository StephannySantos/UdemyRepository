/*
jason e um formato textual (texto)
objeto e uma coleçao de chaves que tem valor , categorias 
e quando se da o nome as coisas 
no abejto so se poder um unico identificador 
obj e uma forma literal de escrever (objeto)

*/
const prod1 ={}//o par de chaves representa objeto
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal']= 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome:'camisa polo',
    preco:79.90
}

'{"nome": "camisa polo", "preco": 79.90}'//simulando um json
console.log(prod2)
