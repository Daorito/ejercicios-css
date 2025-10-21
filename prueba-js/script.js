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