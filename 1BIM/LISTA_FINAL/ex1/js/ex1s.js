function clique(){
    var botaoNext = document.getElementById("next1");
    var nome = prompt('Qual é seu nome: ')
    console.log(typeof(nome))
    alert('Bem vindo, '+ nome + '! Divirta-se.') 
    botaoNext.classList.remove("hidden");
}