
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv)


//puedo borrar la carpeta de node_modeules y reinstalarlas con npm install



//console.log(process.argv);
// const[ , ,base = 'base=5']=process.argv;
// console.log(base);
// const[,numbase= 5]=base.split('=');
// console.log(numbase);
//const base = 46
// crearArchivo(numbase)
// .then((repuesta)=>console.log(repuesta))
// .catch((error)=>console.log(error))