//Ejercicio a)
// Generar un número aleatorio entre 0 y 1
var numeroAleatorio = Math.random();

// Mostrar una alerta dependiendo del valor
if (numeroAleatorio >= 0.5) {
    alert("Mayor que 0,5");
} else {
    alert("Menor que 0,5");
}

//Ejercicio b)
// Declarar una variable "Age" con un número entero entre 0 y 100
var Age = Math.floor(Math.random() * 101); // Para generar una edad aleatoria entre 0 y 100

// Mostrar mensajes de alerta según el valor de "Age"
if (Age < 2) {
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
