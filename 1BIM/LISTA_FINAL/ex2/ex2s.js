function clique(){
    var botaoNext = document.getElementById("next1");
    var nome = prompt('Qual é seu nome: ')
    console.log(typeof(nome))
    mensagem.innerHTML = "Oi, " +nome+ "! Seja feliz."
    botaoNext.classList.remove("hidden");
}