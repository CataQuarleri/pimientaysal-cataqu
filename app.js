// Módulos
const express = require('express');
const app = express();


// Configuración
app.use(express.static('public'));
app.set('view engine', 'ejs')

// Rutas
const mainRouter = require('./routes/mainRouter.js')
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRouter)

app.listen(process.env.PORT || 3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})