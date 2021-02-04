const colors = require('colors');
const argv = require('./config/yargs');
const {crearTabla} = require('./helpers/multiplicar');

console.clear()

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);

crearTabla(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg.rainbow))
    .catch(err => console.log(err))