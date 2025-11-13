/*
const = constante, não se alteram na execução do programa 
let = pode: ou não ser alterado durante a execução do programa
var = desuso, variavel global

Tipo de dados:
String = textos
Numbers = numeros, inteiro ou real 
*/
const nome = "Octavio"
let idade = 23 
let salario = 1.500
let casado = false 
let conjuge = null

const usuario = {
    nome: "Enzo",
    idade: 17,
    casado: false,
    conjuge: null
}

console.log(usuario.nome)


let frutas = ["Maça", "Banana", "Laranja" ]

console.log(frutas[1])

let meuArray = [{ 
    nome: "Lucas",
    idade: 18
},
{
    nome: "Bruno",
    idade:18
}
]
console.log(meuArray[1])

let nome1 = prompt("Digite o seu nome:")
document.getElementById('variavel').    innerHTML = `Seja bem-vindo ${nome1}`

/*
Operadores: +, -, *, /, %

Operadores de comparação: 
> MAIOR QUE 
< MENOR QUE 
>= MAIOR OU IGUAL QUE 
<= MENO  OU IGUAL QUE
== IGUAL A (SO COMPARA VALOR) 
=== IGUAL A (VALOR E TIPO)
*/

let soma = 1+1
console.log(soma)

let sub = 1-1
console.log (sub)

let resto = 5 % 2 
console.log(resto)

console.log (22>18)
console.log (2<=0)

let a ="22"
let b = 22
console.log (a != b)
console.log(a===b)
console.log(a==b)

/*
Condicionais 
IF - Se
ELSE IF - Senao se
ELSE - Senao 
*/

let idade3 = 59 

if (idade3 >=60){
    console.log("Idoso")
} else{
    console.log ("Criança")
}