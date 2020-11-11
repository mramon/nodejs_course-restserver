require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    // res.render('home', {
    //     nombre: 'miKe'
    // });
    res.json({
        id
    });
});

app.post('/usuarios', (req, res) => {
    let body = req.body;
    // res.render('home', {
    //     nombre: 'miKe'
    // });
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    }else{
        res.json({
            body: body
        });
    }
})

app.put('/', (req, res) => {
    // res.render('home', {
    //     nombre: 'miKe'
    // });
    res.send('hola mundo');
});

app.delete('/', (req, res) => {
    // res.render('home', {
    //     nombre: 'miKe'
    // });
    res.send('hola mundo');
});

app.listen(process.env.PORT, () => {console.log(`Escuchando peticiones en el puerto {$process.env.PORT}...`)})