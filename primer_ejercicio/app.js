//Seteamos un valor por el cual vamos a multiplicar 
const numeroFijo = 5;
//Seteamos la cantidad de veces que vamos a multiplicar
const cantMax = 10;
//Creamos una variable para concatear los resultados.
let resultado = '';

//Creamos una funcion reutilizable con validaciones para concatenar el resultado. 
const concatenarMultiplicacion = (numeroFijo, num) => {
    if (!numeroFijo || !num) {
        console.log('Error: No se encontraron los numeros para multiplicar.');
        return;
    }

    if (isNaN(numeroFijo) || isNaN(num)) {
        console.log('Error: Compruebe que los argumentos sean numeros.');
        return;
    }

    resultado += `${numeroFijo} x ${num} = ${numeroFijo * num}\n`
}

//Realizamos la iteración.
for (let i = 1; i <= cantMax; i++) {
    concatenarMultiplicacion(numeroFijo, i);
}

//Mostramos el resultado con el console.log
console.log(resultado);