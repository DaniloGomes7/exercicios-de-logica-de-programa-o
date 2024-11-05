var MetrosPintados = parseInt(prompt("Quantos metros quadrados serão pintados"))
var CoberturaTinta = MetrosPintados/54
var LataTinta = CoberturaTinta*80

if (MetrosPintados =>54) {
    console.log("A quantidade de latas de tinta a ser comprada é de ",MetrosPintados,", Custando ",LataTinta)
    alert("A quantidade de latas de tinta a ser comprada é de "+MetrosPintados+", Custando "+LataTinta)
} 