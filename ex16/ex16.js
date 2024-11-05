var MetrosPintados = parseInt(prompt("Quantos metros quadrados serão pintados? "));
var lataqntd = MetrosPintados/54 ;
var latapreco = lataqntd * 80 ;


if (MetrosPintados=>54){
    console.log ("A quantidade de latas que voce usara é ",lataqntd,",o preco a ser pago é ",latapreco);
    alert ("o preco a ser pago é "+latapreco)
    alert ("A quantidade de latas que voce usara é "+lataqntd)
}