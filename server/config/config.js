//Puerto

process.env.PORT = process.env.PORT || 3000;

// Entorno

// process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datos

let urlDB;
console.log('entorno', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cursoNode';
    console.log('local');
} else {
    urlDB =
        'mongodb+srv://smith8776:Ls13246102@cluster0.hcptq.mongodb.net/cursoNode?retryWrites=true&w=majority';
    console.log('desarrollo');
}

process.env.URLDB = urlDB;