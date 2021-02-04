const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 5, listar, x) => {
    
    try {
        let consola, salida = '';

        for (let i = 1; i <= x; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if(listar){
            console.log('==============='.green);
            console.log(`= TABLA DEL ${colors.red(base)} ${'='.green}`.green);
            console.log('==============='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `Archivo tabla-${base}.txt creado con exito!`;
    } catch (err) {
        throw err
    }
}

module.exports = {crearTabla}