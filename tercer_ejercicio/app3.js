//Requerimos la funcion para generar archivos.
const generarArchivo = require('./generarArchivo');

//Seteamos un valor por el cual vamos a multiplicar 
const numeroFijo = 5;
//Seteamos la cantidad de veces que vamos a multiplicar
const cantMax = 10;
//Creamos una variable para concatear los resultados.
let resultados = '';

//Creamos una funcion reutilizable con validaciones para imprimir el resultado. 
const concatenarMultiplicacion = () => {
    for (let i = 1; i <= cantMax; i++) {
        resultados += `${numeroFijo} x ${i} = ${numeroFijo * i}\n`
    }
}

//Generamos y guardamos el archivo Txt tratando como Promesas.
const generarArchivoAsync = async () => {
    try {
        await generarArchivo('tabla-5.txt', resultados);
        console.log('Archivo generado con exito!')
    } catch (err) {
        console.log('Error al generar el archivo', err);
    }
}

concatenarMultiplicacion();

generarArchivoAsync();