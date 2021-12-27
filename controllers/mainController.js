// Acá nos falta nuestra fuente de datos
const path = require('path');
// var otroArray = [
//     {
//         name: cosito,
//         id: otroCosito
//     }
// ]; 

var platos = [
    {
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos',
        price: 'U$S 65.50',
        pic: '/images/Carpaccio-de-salmon.jpg'
    },
    {
        name: 'Risotto de berenjena',
        description: 'Risotto de berenjena y queso de cabra',
        price: 'U$S 47.00',
        pic: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        name: 'Mousse de arroz',
        description: 'Mousse de arroz con leche y aroma de azahar',
        price: 'U$S 27.50',
        pic: '/images/Mousse-de-arroz-con-leche.jpg'
    },
    {
        name: 'Espárragos blancos',
        description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        price: 'U$S 37.50',
        pic: '/images/esparragos.png'
    },
    {
        name: 'Mole con arroz',
        price: 'No tiene precio'
    },
    {
        name: 'Puchero',
        price: 'No tiene precio'
    }
]


// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    home: function(req,res){
        return res.render('index.ejs', {platos: platos})
    },
    details: function(req,res){
        res.locals.query = req.params.id;
        return res.render('detalleMenu.ejs', {platos: platos})
    }
}
// Acá exportamos el resultado
module.exports = controller;