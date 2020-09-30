const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicacion');
const argv = require('./config/yargs').argv;

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log('Limite', argv.limite);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("La opcion no existe");

}




/**/