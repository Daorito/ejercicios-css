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

//arrays 

const numeritos = [1, 2, 3, 4, 5]
numeritos[1] = 12 //cambia el valor en la posicion 1

const frutas = ["manzana", "banana", "cereza"]
frutas.length 

frutas.length = 2 //corta el array a solo 2 elementos
frutas.push("naranja") //agrega un elemento al final del array
console.log(frutas) // ["manzana", "banana", "naranja"]

frutas.pop() // saca el ultimo elemento del array y lo devuelve
frutas.shift() // saca el primer elemento del array y lo devuelve
console.log(frutas) 


frutas.unshift("fresa", "aguacate") // agrega un elemento al inicio del array

// concadenar arrays 

const numerazos = [6, 7, 8] // me estoy quedando sin nombres creativos para las variables JAJA
const numerazos2 = [9, 10, 11]

const todosLosNumerazosJuntos = numerazos.concat(numerazos2) // une 
const todosLosNumerazosJuntos2 = [...numerazos, ...numerazos2] // otra forma de unir arrays con spread operator


//  Interaccion de arrays 

const frutas2 = ["🍎", "🍌", "🍒", "🍇", "🍉"]

let i = 0; 
while (i < frutas2.length) {
    console.log(frutas2[i])
    i++
}

// lo mismo con for pero me da pereza crear otra variable llevo 16872516257 variables ya 

for (let i = 0; i < frutas2.length; i++) {
    console.log(frutas2[i])
}

for (const fruta of frutas2) {
    console.log(fruta)
}


// con for each

frutas2.forEach(function (el, index) {
  console.log("index: " + index);
  console.log("elemento: " + el);
});


// con arrow fuction

frutas2.forEach(el => {
    console.log(el)
})

const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍') // 
const tieneCorazon = emojis.includes('😍') // true
const tieneCorazonDeOtraForma = emojis.some(el => el === '😍') // true


const nombres = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = nombre.some(el => el.length > 3) // false


const emojis2 = ['✨', '🥑', '😍', '🥑']
const sonTodosAguacates = emojis2.every(el => el === '🥑') // false


const numeros = [1, 2, 3, 4, 5, 6]
const sonPares = numeros.filter(numero => numero % 2 === 0) // false 

// find - encuentra el primer elemento que cumple la condicion

const misNumerazos = [13, 27, 44, -10, 81]
const primerNumeroNegativo = misNumerazos.find(numero => numero < 0) // -10

// si no lo encuentra 

const misNumerosV1 = [13, 27, 44, 10, 81]
const primerNumeroNegativoV1 = misNumerosV1.find(numero => numero < 0) // undefined

// vamos a ordenar numeros porque si

const numerosDesordenaos = [4, 2, 5, 1, 3]
numerosDesordenaos.sort((a, b) => a - b) // [1, 2, 3, 4, 5]

// al reve 
numerosDesordenaos.sort((a, b) => b - a) // [5, 4, 3, 2, 1]

// Crear arrays a partir de los que ya tenemos 

// ------- FILTER -------

const otraVezNumeros = [10, 15, 20, 25, 30, 35]

const evenNumbers = otraVezNumeros.filter(function (number) {
    return number % 2 === 0
}) // [10, 20, 30]

console.log(evenNumbers)

// para todos los que tenga la letra "a"

const palabras = ["manzana", "banana", "cereza", "kiwi", "mango"]
const palabrasConA = palabras.filter(string => string.includes("a"))

console.log(palabrasConA) // ["manzana", "banana", "cereza", "mango"]

/// ---------------------------------------------------------------------------------
// --------------------------------- MAP ---------------------------------
// ---------------------------------------------------------------------------------


const numerosParaMapear = [1, 2, 3, 4, 5]

const dobleNumeros = numerosParaMapear.map((number) => {
    return number * 2
})

console.log(dobleNumeros) // [2, 4, 6, 8, 10]

// para saber la longitud de cada palabra 

const palabrasParaMapear = ["sol", "luna", "estrella"]

const longitudes = palabrasParaMapear.map(palabra => palabra.length)
console.log(longitudes) // [3, 4, 8]


// ---------------------------------------------------------------------------------
// --------------------------------- MAP + FILTER    -------------------------------
// ---------------------------------------------------------------------------------


const numerosCombinados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosMasGrandesQueCinco = numbers 
    .map(number => number * 2) // [2 , 4, 6, 8, 10, 12, 14, 16, 18, 20]
    .filter(number => number > 5 ) // [6, 8, 10, 12, 14, 16, 18, 20]


console.log(numerosMasGrandesQueCinco) // [6, 8, 10, 12, 14, 16, 18, 20]

// ---------------------------------------------------------------------------------
// --------------------------------- REDUCE ---------------------------------
// ---------------------------------------------------------------------------------

const numerosParaReducir = [1, 2, 3, 4, 5]

const sumita =  numerosParaReducir.reduce((acumulador, currentNumber) => {
    return acumulador + numeroActual
}, 0) // valor inicial del acumulador

console.log(sumita) // 15



// usar reduce para tener que evitar crear un array intermedio.

const numerosParaReducirYMapear = [1, 2, 3, 4, 5]

const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
    const isEven = currentNumber % 2 === 0
    const doubled = currentNumber * 2
    const EsMayorQueCinco = doubled > 5


    // si es mayor que cinco lo agregamos al array 
    if (isEven && EsMayorQueCinco) {
        // para ello devolvemos un nuevo array con el valor actual 
        return [acumulator.concat(doubled)]
    } else {
        // si no, devolviamos lo que ya teniamos
        return accumulator
    }
}, []) // <--- array vacio es el valor inicial del acumulador

console.log(doubleEvenNumbers) // [6, 8, 10]


// ---------------------------------------------------------------------------------
// --------------------------------- MATRICES ---------------------------------
// ---------------------------------------------------------------------------------

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// interacion sobre matrices 

for (let i = 0; i < matriz.length; i++) { // {1} 
    for (let j = 0; j < matriz[i].length; j++) { // {2}
        console.log(matriz[i][j])
    }
}

// ejemplo del tres en raya 
const tablero = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
]

// para buscar un ganador en filas

function buscarGanadorEnFilas(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        const fila = tablero[i]
        if (fila[0] === fila[1] && fila[1] === fila[2]) {
            return fila[0] // devuelve el ganador
        }
    }
    return null // si no hay ganador
}