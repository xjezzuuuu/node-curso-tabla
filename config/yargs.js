const { describe, demandOption } = require('yargs')

const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Mostrar la tabla en consola'
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Cantidad de veces a iterar'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero!'
    }

    if(isNaN(argv.h)){
        throw 'La cantidad de iteraciones debe ser un numero!'
    }

    return true
})
.argv

module.exports = argv