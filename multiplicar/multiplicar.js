const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.green);
            }
        });
    });
}

const listarTabla = (base, limite) => {
    console.log('================='.green);
    console.log(`Tabla del ${base}`.red);
    console.log('================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i * base}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}