/*
Atividade do Card 9 - Atividade 5 - Encontro Remoto 2
Situação Problema: Codificação de um sistema de contagem e classificação
A empresa  Savinis,  focada  no  desenvolvimento  de  software  de  alta  performance, contratou  você  para  realizar  a programação de um sistema de controle de alunos de uma escola. O sistema deverá funcionar da seguinte forma:
Considere a quantidade de alunos presentes na sala, percorra do zero até o número total e retornar os seguintes resultados:

- Se o número for par, escreva ‘par’ e o número correspondente
- Se o número for ímpar, escreva ‘impar’ e o número correspondente 
- Se o número for zero, escreva ‘zero’ 

Para criação desse sistema de cadastro, você, enquanto programador(a) responsável, deverá solucionar os seguintes desafios:
- Aplicar técnicas de programação e ferramentas para desenvolvimento do código
- Aplicar linguagem de programação Javascript para implementação do sistema.

let numeroDeAlunos = 10;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
/*
let numeroDeAlunos = 10;

for(let contador = 0; contador <= numeroDeAlunos; contador++)
{
//    console.log(contador)

    if(contador == 0){
        //console.log("O número atual é zero")
        console.log(`${contador} - zero`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - Impar`)
    }
}
*/

//Segunda forma de resolver o exercício
/*
let numeroDeAlunos = 10;
let contador = 0
while(contador <= numeroDeAlunos)
{
    if(contador == 0){
        console.log(`${contador} - zero`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - Impar`)
    }
    contador++
}
*/

//Terceira forma de resolver o exercício

let numeroDeAlunos = 10;
let contador = 0
do
{
    if(contador == 0){
        console.log(`${contador} - zero`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - Impar`)
    }
    contador++
}while(contador <= numeroDeAlunos)