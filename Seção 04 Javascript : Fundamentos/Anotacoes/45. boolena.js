// false = falso
//true = verdadeiro
//! = negação  e se tiver dois !! vira nao duas vezes
// e torna verdadeiro

let IsAtivo = false
console.log (IsAtivo)


IsAtivo = true
console.log(IsAtivo)

IsAtivo = 1
console.log(!! IsAtivo)

console.log('os verdadeiros...')
console.log (!!3) // todo n° interiro sera verdadeiro
console.log (!!-1)
console.log (!!'texto')
console.log(!!Infinity)
console.log(!!(IsAtivo= true))

console.log('osfalsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!(IsAtivo= false))//se o dado do lado 
//direito dor falso o resultado será falso se for
// verdadeiro o resultado será verdadeiro 

console.log ('pra finalizar...')
console.log (!!(''|| null || 0 || ''))

let nome = ''
console.log(nome || 'desconhecido')