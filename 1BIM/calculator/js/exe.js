//var resultado = document.getElementById('resultado')

//function pegaNome(){
 //   var nome = document.getElementById('nome').value 
  //  //console.log('Nome:', nome)
  //  resultado.innerHTML = nome
//}

function soma(){
  var n1 = parseFloat(document.getElementById('num1'). value)
  var n2 = parseFloat(document.getElementById('num2'). value)
  var soma = n1 + n2
  resultado.innerHTML = soma
}

function sub(){
  var n1 = parseFloat(document.getElementById('num1'). value)
  var n2 = parseFloat(document.getElementById('num2'). value)
  var subtracao = n1 - n2
  resultado.innerHTML = subtracao
}

function mult(){
  var n1 = parseFloat(document.getElementById('num1'). value)
  var n2 = parseFloat(document.getElementById('num2'). value)
  var multiplicacao = n1 * n2
  resultado.innerHTML = multiplicacao
}

function div(){
  var n1 = parseFloat(document.getElementById('num1'). value)
  var n2 = parseFloat(document.getElementById('num2'). value)
  var divisao = n1 / n2
  resultado.innerHTML = divisao
}

function limpar(){
  var n1 = document.getElementById('num1')
  var n2 = document.getElementById('num2')
  n1.value = ""
  n2.value = ""
  resultado.innerHTML = "0"
}

