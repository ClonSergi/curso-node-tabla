const fs = require('fs');
const colors = require('colors');
//async

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for ( let i = 1; i <= hasta; i++) {
            salida += `${base}  x ${ i } = ${base * i}\n`;
            consola += `${base} ${ 'x'.magenta } ${ i } ${ '='.magenta } ${base * i}\n`;
        }

        if (listar) {
            console.log('==============='.green);
            console.log(' Tabla del: '.green, colors.blue( base ) );
            console.log('==============='.green);
            console.log( consola );
        }


        //fs.writeFileSync

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

        // fs.writeFile

        // fs.writeFile( `tabla-${ base }.txt`, salida, err => {
        //     if ( err )  throw err;

        //     console.log( `tabla-${ base }.txt creada correctamente` );
        // 
    } catch (err) {
        throw err;
    }

}

// Promise
// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {

//         console.log('===============');
//         console.log(' Tabla del: ', base);
//         console.log('===============');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida);

//         //fs.writeFileSync

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);

//         // fs.writeFile

//         // fs.writeFile( `tabla-${ base }.txt`, salida, err => {
//         //     if ( err )  throw err;

//         //     console.log( `tabla-${ base }.txt creada correctamente` );
//         // 
//     });

// }

module.exports = {
    crearArchivo
}