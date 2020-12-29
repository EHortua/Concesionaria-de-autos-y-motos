let vehiculos = require("./vehiculos");                  //Importé mi modulo propio

let formatterPeso = new Intl.NumberFormat('es-CO', {    //Para poder convertir number en moneda
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
});


for(let i=0; i<vehiculos.length; i++){                  //Ciclo que me muestra los vehículos
    if (vehiculos[i].cilindrada == undefined){
        console.log('Marca: ' + vehiculos[i].marca, ' // Modelo: '+ vehiculos[i].modelo, ' // Puertas: '+ vehiculos[i].puertas, ' // Precio: ' +formatterPeso.format(vehiculos[i].precio));

    } else{
        console.log('Marca: ' + vehiculos[i].marca, ' // Modelo: '+ vehiculos[i].modelo, ' // Cilindrada: '+ vehiculos[i].cilindrada, ' // Precio: ' +formatterPeso.format(vehiculos[i].precio));
    }
};

let sortedByPrecio = vehiculos.sort(function(a, b){    //Vehículos ordenados de mayor a menor
    return b.precio - a.precio;
});
console.log('=============================\nVehículo más caro: ' +sortedByPrecio[0].marca, sortedByPrecio[0].modelo);    // Mostrando el más caro
console.log('Vehículo más barato: ' +sortedByPrecio[3].marca, sortedByPrecio[3].modelo);  // Mostrando el más barato

for(let i=0; i<vehiculos.length; i++){               //ciclo para encontrar la letra Y
    let modelos = vehiculos[i].modelo;
    if(modelos.includes('Y') === false){
        i = i++
    } else{
        console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + vehiculos[i].marca , vehiculos[i].modelo , formatterPeso.format(vehiculos[i].precio));
    }
}
function listado(sortedByPrecio){                 // Función para mostrar por consola la lista que hice mas arriba
    console.log('=============================\nVehículos ordenados por precio de mayor a menor: ' );
    for(let i=0; i<sortedByPrecio.length; i++){
        console.log(sortedByPrecio[i].marca, sortedByPrecio[i].modelo);
    }
}
listado(sortedByPrecio);


