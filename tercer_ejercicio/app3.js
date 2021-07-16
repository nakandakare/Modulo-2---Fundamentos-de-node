//Requerimos la funcion para generar archivos.
const generarArchivo = require('./generarArchivo');

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

//Realizamos la iteración.
for (let i = 1; i <= cantMax; i++) {
    concatenarMultiplicacion(numeroFijo, i);
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

generarArchivoAsync();