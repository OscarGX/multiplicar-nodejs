const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(file => {
                console.log(`Archivo creado: ${file}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log(`No se reconoce el comando ${argv._[0]}`);
}