//cadastro de eventos

let idade = 42
    
//condição da idade para cadastro

if (idade >= 18) {
    console.log("Cadastro permitido!")
}
else{
    console.log("Cadastro não permitido pela idade!!!")
}

//exibir lista de participantes

let numeroDeParticipantes = 100;
for(let contador = 1; contador <= numeroDeParticipantes; contador++)
{
    if(contador <= 100){
        console.log(`${contador}`)
    }
    else {
        console.log("Excedeu o limite de participantes!")
        break
    }
}

/*teste
let numeroDeParticipantes = 15;
for(let contador = 1; contador <= numeroDeParticipantes; contador++)
{
//    console.log(contador)
    if(contador <= 10){
        console.log(`${contador} - Cadastro permitido`)
    }
    else {
        console.log(`${contador} - Cadastro não permitido, limite excedido!`)
        break
    }
}
*/

//condição de número de participantes para o cadastro

let listaDeParticipantes = []
listaDeParticipantes.push('Carlos Junior')
listaDeParticipantes.push('Rodrigo Freitas')
listaDeParticipantes.push('Pedro Cardoso')
listaDeParticipantes.push('Samara Campos')
listaDeParticipantes.push('Michele Rodrigues')
listaDeParticipantes.push('André Souza')

if (listaDeParticipantes.length <= 100){
    console.log("Cadastro concluído!")
}
else {
    console.log ("Limite de participantes excedido!")
}