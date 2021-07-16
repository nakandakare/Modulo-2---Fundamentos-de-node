//Requerimos FileSystem.
const fs = require('fs');

//Seteamos un valor por el cual vamos a multiplicar 
const numeroFijo = 5;
//Seteamos la cantidad de veces que vamos a multiplicar
const cantMax = 10;
//Creamos una variable para concatear los resultados.
let resultados = '';

//Creamos una funcion reutilizable con validaciones para imprimir el resultado. 
const concatenarMultiplicacion = (numeroFijo, num) => {
    if (!numeroFijo || !num) {
        console.log('Error: No se encontraron los numeros para multiplicar.');
        return;
    }

    if (isNaN(numeroFijo) || isNaN(num)) {
        console.log('Error: Compruebe que los argumentos sean numeros.');
        return;
    }

    resultados += `${numeroFijo} x ${num} = ${numeroFijo * num}\n`
}

//Creamos una funcion reutilizable para generar el archivo.
const generarArchivo = (fileName, dato) => {
    fs.writeFile(fileName, dato, (err) => {
        if (err) throw err;

        console.log('El archivo se guardao con exito!');
      });
}

//Realizamos la iteración.
for (let i = 1; i <= cantMax; i++) {
    concatenarMultiplicacion(numeroFijo, i);
}

//Generamos y guardamos el archivo Txt.
generarArchivo('tabla-5.txt', resultados);