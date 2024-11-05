var ganhoPorHora = parseFloat(prompt("Quanto você ganha por hora?: "))
var horasTrabalhadas = parseInt(prompt("Quantas horas você trabalha por mês?: "))
var salarioTotal = horasTrabalhadas*ganhoPorHora
var impostoR = 11/100 * salarioTotal
var INSS = 8/100 * salarioTotal
var sindicato = 5/100 * salarioTotal
var salarioLiq = salarioTotal - impostoR - INSS - sindicato 

console.log("Seu salario bruto é de: ", salarioTotal);
alert("Seu salario bruto é de: "+ salarioTotal);

console.log("Voce pagou ",impostoR, " de imposto de renda");
alert("Voce pagou "+impostoR+ " de imposto de renda");

console.log("Voce pagou ",INSS, " de imposto de renda");
alert("Voce pagou "+INSS+ " de imposto de renda");

console.log("Voce pagou ",sindicato, " de imposto de renda");
alert("Voce pagou "+sindicato+ " de imposto de renda");

console.log("Seu salario liquido é de: ", salarioLiq);
alert("Seu salario liquido é de: "+ salarioLiq);