var sexo = parseFloat(prompt("informe seu sexo (Masculino/Feminino) : "));
var peso = parseFloat(prompt("informe seu peso : "));
var altura = parseFloat(prompt("informe sua altura : "));

var Masculino = peso/(altura*altura)/peso;
var Feminino = (altura*altura)/peso;

if(Masculino) {
    console.log("Seu peso é de: ", Masculino )
} alert("Seu peso é de: "+ Masculino)
if(Feminino) {
    console.log("Seu peso é de: ",Feminino)
} alert("Seu peso é de: "+Feminino)

