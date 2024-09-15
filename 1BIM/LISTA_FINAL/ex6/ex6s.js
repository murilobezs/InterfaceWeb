function prod(){
    var prod = prompt('Informe o nome do produto: ');
    var preco = parseFloat(prompt('Informe o valor do produto: '));
    var dinh = parseFloat(prompt('Informe o valor que irá pagar: '));
    var troco = dinh - preco;

    var produtoElement = document.getElementById("produto");
    var valorElement = document.getElementById("valor");
    var deuElement = document.getElementById("deu");
    var trocoElement = document.getElementById("troco");
    var mensagemElement = document.getElementById("mensagem");
    var mensagem2Element = document.getElementById("mensagem2");
    var mensagem3Element = document.getElementById("mensagem3");
    var insuElement = document.getElementById("insu");
    var botaoNext = document.getElementById("botaoNext");

    produtoElement.innerHTML = prod;
    valorElement.innerHTML = preco;
    deuElement.innerHTML = dinh;

    mensagemElement.innerHTML = "Você irá comprar um(a) " + prod + " por " + preco + " reais.";
    mensagem2Element.innerHTML = "Você pagou com " + dinh + " reais.";

    if (dinh < preco){
        insuElement.innerHTML = "Compra cancelada. Dinheiro insuficiente!";
    } else {
        trocoElement.innerHTML = troco.toFixed(2);
        mensagem3Element.innerHTML = "Você receberá troco de " + troco.toFixed(2) + " reais.";
    }

    botaoNext.classList.remove("hidden");
}