//'use strict'
/*
console.log("Hola Mundo")
function miFuncion(a) {
    let potencia = 10;
    return a * potencia; //Devuelve a multiplicado por 10
}*/

/*

const b=5;

console.log(b);
console.log(miFuncion(10));

if(b==4) {console.log("ok")} else {console.log("Not ok")};

let dia=4;
switch (dia){
case 1:
    console.log("Lunes");
    break;

    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miercoles");
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    case 6:
    console.log("Sabado");
    break;
    case 4:
    console.log("Domingo");
    break;
    default: 
    console.log("No hay valor");
    break;
        
}
*/
let edad=45;
switch (true){
case edad<5:
    console.log("Lunes");
    break;
    case edad >=5 && edad<16:
    console.log("Martes");
    break;
    case edad >=17 && edad<=66:
    console.log("Miercoles");
    break;
    case edad >=67 && edad<=99:
    console.log("Jueves");
    break;
    case edad >=98:
    console.log("Viernes");
    break;
    default: 
    console.log("No hay valor");
    break;
        
}

let value = 1;

do{console.log(value++)}while (value <= 5);

/*Las siguientes tres lineas de codigo son para desplazamiento de bits. Un uso extremo para reducir el consumo de recursos de una cpu dejando de usar multiplicaciones y divisiones utilizando el desplazamieto para dividir y sumar. 
let jj = -8;
console.log(jj>>2);
console.log(jj>>>2);
*/
let limit = 5;
for (let i = 1, j = limit; i <= limit && j > 0; i++, j--) {
console.log(i + " - " + j);
};

// FOR, FOR OF Y FOR IN
let a=["a","b","c"];
//UN FOR CLASICO
for(let i=0; i<a.length;i++) console.log(a[i]);
//FOR OF IMPRIME LOS VALORES - LA SALIDA TENDRIA Q SER A B C 
for (let k of a) console.log(k);
//FOR IN IMPRIME LAS KEYS - LA SALIDA TENDRIA QUE SER 0 1 2
for(let id in a) console.log(id);

document.write("<br>hola");
let respuesta=window.prompt("Escribe tu nombre")