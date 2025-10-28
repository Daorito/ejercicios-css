// Tipos de Datos
const numero = 12 
typeof 12 // number

const edad = 16

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 16) {
    console.log("Casi eres mayor de edad");
} 
else {
    console.log("Eres menor de edad");
}

// while 

let cuentaAtras = 10 
while (cuentaAtras >0) {
    cuentaAtras = cuentaAtras -1
    console.log(cuentaAtras + ' segundos')
}

// for 
for (let i = 0; i < 5; i = i + 1) {
    console.log("Iteración número " + i)
}

// do while 
let resultado 
do {
    resultado =confirm("¿Deseas continuar?")
} while (resultado)


// variables y declaraciones

let name = "Daoritox" //decalración de variable

// expresiones
2, true, false

// for 
for (let i = 1; i<=100; i = i + 1) {
    console.log(i)
}

// que cuente del 1 al 10 
for (let number= 1; number <=10; number++) {
    console.log(number)
}

//switch 

const dia  = 'lunes'
switch (dia) {
    case 'lunes': 
        console.log("Hoy es lunes");
        break;

    default: 
    console.log("No es lunes");
        break;
}

const dia2 = new Date().getDay()

//segun el dia de lasemana mostraremos un mensaje diferente

switch (dia2) {
    case 0: 
    console.log("Hoy es domingo");
    break;

    case 1:
    console.log("Hoy es lunes");
    break;

    case 2:
    console.log("Hoy es martes");
    break;

    case 3:
    console.log("Hoy es miércoles");
    break;

    case 4:
    console.log("Hoy es jueves, se acerca el fin de semana");

    case 5:
    case 6: 
    console.log("Es fin de semana");
    break;
}

// Creando mi primera función
function saludar() {
    console.log("Hola, soy daoritox")
}

// para ejecutar la funcion -> saludar()

function suma() {
    return 2 + 2
}

let resultadoo = suma()
console.log(resultado)

// otra funcion porque si 

function getRandomNumber() {
    const random = Math.random() // genera un numero aleatorio entre 0 y 1

    const multiplied = random * 10 // multiplica el numero aleatorio por 10

    const rounded = Math.floor(multiplied)

    const result = rounded + 1

    return result
}

//funciones con parametros

function saludarPersona(nombre) {
    return console.log ("Hola, " + nombre)
}

function sumarDosNumeros (numb1, numb2) {
    return numb1 + numb2
}

// comentar lgo random por ahora 
const numeroAleatorio = getRandomNumber()
console.log("Número aleatorio generado: " + numeroAleatorio)

saludarPersona("Daoritox")

// fuction expression 

const sum = function (a, b) {
    return a +b
}

sum(3, 5) //8

// arrow function / function flecha

const restaa = (a, b) => {
    return a - b
}

restaa(10, 4) //6  

const resta = (a, b) => a - b

resta(10, 4) //6


// recursividad 

function cuentaAtrasRecursiva(numero) {
    if (numero <= 0) { return }
    console.log(numero)
    cuentaAtrasRecursiva(numero - 1)
}


function factorial(n) {
    if (n === 0 || n === 1 ) {
        return 1
    } else {
        return n * factorial(n -1)
    }
}

//  CLOUSURES 

const a = "Hey!";
function global() {
    const b = "¿Qué"; 
    function local() {
        const c = "tal?";
    }
    return a + b + c; 
}