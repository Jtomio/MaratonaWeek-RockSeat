const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar =document.querySelector("#buttonPerguntar")

const respostas = [
    "Não",
    "Provavelmente",
    "É decididamente sim",
    "Não conte com isso",
    "Sem dúvida!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é NÃO",
    "Você pode contar com isso.",
    "Melhor não te dizer agora",
    "A meu ver sim...",
    "Minhas fontes dizem que não.",
    "Provalvemente",
    "Não é possivel prever agora",
    "Faça um PIX e eu te resposto de imediato",
]

//clicar em fazer pergunta
function fazerPergunta (){
//Solicita uma pergunta se o input estiver vázio.
if (inputPergunta.value == ""){
    alert("Digite sua pergunta!")
    return
}

//desabilita o botão perguntar após uma pergunta válida.
buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
console.log(respostas[numeroAleatorio])
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

//apagar a resposta da pergunta após 3 segundos.
setTimeout(function(){
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
    inputPergunta.value = ""
},3000)

}


