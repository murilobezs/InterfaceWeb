function reaj(){
    var NOMEFUNC = prompt('Insira o nome do funcionário: ');
    var SALARIO = parseFloat(prompt('Insira o valor do salário atual de ' + NOMEFUNC + ': '));
    var PORC = parseFloat(prompt('Qual a porcentagem que o salário de ' + NOMEFUNC + ' será ajustado? '));

    var nomeElement = document.getElementById("nome");
    var funcionarioElement = document.getElementById("funcionario");
    var salarioElement = document.getElementById("salario");
    var porcElement = document.getElementById("porc");
    var aumentoElement = document.getElementById("aumento");
    var finalElement = document.getElementById("final");
    var mensagemElement = document.getElementById("mensagem");
    var mensagem2Element = document.getElementById("mensagem2");
    var mensagem3Element = document.getElementById("mensagem3");
    var mensagem4Element = document.getElementById("mensagem4");
    var botaoNext = document.getElementById("botaoNext");

    nomeElement.innerHTML = NOMEFUNC;
    funcionarioElement.innerHTML = NOMEFUNC;
    salarioElement.innerHTML = SALARIO;
    porcElement.innerHTML = PORC.toFixed(2); // Formatando para 2 casas decimais

    var soma = (PORC * SALARIO) / 100;
    aumentoElement.innerHTML = soma.toFixed(2); // Formatando para 2 casas decimais
    finalElement.innerHTML = (SALARIO + soma).toFixed(2); // Formatando para 2 casas decimais

    mensagemElement.innerHTML = "O(a) " + NOMEFUNC + " recebeu um aumento salarial!";
    mensagem2Element.innerHTML = "O salário atual era de " + SALARIO.toFixed(2) + " reais.";
    mensagem3Element.innerHTML = "Com aumento de " + PORC.toFixed(2) + "%, o salário vai aumentar " + soma.toFixed(2) + " reais.";
    mensagem4Element.innerHTML = "Agora, " + NOMEFUNC + " vai passar a receber um salário de " + (SALARIO + soma).toFixed(2) + " reais.";


    
    botaoNext.classList.remove("hidden");
}