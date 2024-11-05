var ppeixe = parseFloat(prompt("Informe quantos kilos de peixe: "));
var multa = 4.0
var excesso

if (ppeixe =>50) {
    excesso=ppeixe-50
    multa=excesso*4
    alert("Voce deverá pagar uma multa de R$"+multa)
}