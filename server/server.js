require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded/use son middleware
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require('./routes/usuario'));

mongoose.connect(
    process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err, res) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        console.log('Base de datos ONLINE');

        const server = app.listen(process.env.PORT || 8000, () => {
            let port = server.address().port;
            console.log('Escuchando por el puerto: ', port);
        });
    }
);

// app.listen(process.env.PORT || 8000, () => {
//     console.log('Escuchando por el puerto: ', process.env.PORT);
// });