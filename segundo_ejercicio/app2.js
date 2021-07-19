//Requerimos FileSystem.
const fs = require('fs');

//Seteamos un valor por el cual vamos a multiplicar 
const base = 5;
//Seteamos la cantidad de veces que vamos a multiplicar
const cantMax = 10;
//Creamos una variable para concatear los resultados.
let resultados = '';

//Creamos una funcion reutilizable con validaciones para imprimir el resultado. 
const concatenarMultiplicacion = (base = 5) => {
    for (let i = 1; i <= cantMax; i++) {
        resultados += `${base} x ${i} = ${base * i}\n`
    }
}

//Creamos una funcion reutilizable para generar el archivo.
const generarArchivo = (fileName, dato) => {
    fs.writeFile(fileName, dato, (err) => {
        if (err) throw err;

        console.log('El archivo se guardao con exito!');
      });
}

concatenarMultiplicacion(base);

//Generamos y guardamos el archivo Txt.
generarArchivo(`tabla-${base}.txt`, resultados);