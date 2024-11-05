var ganhoPorHora = parseFloat(prompt("Quanto você ganha por hora?: "))
var horasTrabalhadas = parseInt(prompt("Quantas horas você trabalha por mês?: "))
var salarioTotal = horasTrabalhadas*ganhoPorHora

console.log("Seu salario é de: ")
alert("Seu salario é de: "+ salarioTotal)
