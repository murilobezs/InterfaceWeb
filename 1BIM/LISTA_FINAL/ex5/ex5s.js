function product(){
    var product = prompt('Qual o nome do produto que deseja? ')
    var price = prompt('Digite o valor do produto: ')
    produto.innerHTML = product
    valor.innerHTML = price 

    msg.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}