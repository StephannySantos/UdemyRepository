//$ interpreta a string e retorno a tag demntro da
//funcao

const nome= 'Rebeca'
const concatenacao = 'ola' + nome +  '!'
const template = `
    olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() // up e pra transformar em maiusculo
console.log(`Ei... ${up('cuidado')}`)
