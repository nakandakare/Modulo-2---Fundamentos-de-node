//Seteamos un valor por el cual vamos a multiplicar 
const numeroFijo = 5;
//Seteamos la cantidad de veces que vamos a multiplicar
const cantMax = 10;
//Creamos una variable para concatear los resultados.
let resultado = '';

//Creamos una funcion reutilizable con validaciones para concatenar el resultado. 
const concatenarMultiplicacion = () => {
    for (let i = 1; i <= cantMax; i++) {
        resultado += `${numeroFijo} x ${i} = ${numeroFijo * i}\n`
    }
}

concatenarMultiplicacion();

//Mostramos el resultado con el console.log
console.log(resultado);