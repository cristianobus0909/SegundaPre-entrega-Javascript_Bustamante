
let presupuesto = Number(prompt("Ingresa el monto de tu presupuesto"));
let total = 0;
let totalCompra = 0;

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const listaDeCompras = [
    new Producto("leche", 250),
    new Producto("huevo", 1300),
    new Producto("aceite", 1800),
    new Producto("fideo", 500),
    new Producto("harina", 250),
    new Producto("carne", 1600),
];


let carrito = [];
let seleccion = prompt(`¿Desea agregar un producto? "si" o "no"`);

while (seleccion !== "no" && seleccion !== "si") {
    alert("Por favor ingrese una respuesta válida");
    seleccion = prompt(`¿Desea agregar un producto? "si" o "no"`);
}

while (seleccion !== "no") {
    alert("Elija el producto que desea a continuación");
    // Usamos la función map para crear un nuevo array con los nombres y precios de todos los productos
    // Luego, usamos la función join para unir todos los elementos del array con un guión y mostrarlos en un solo string
    let todosLosProductos = listaDeCompras.map((producto) => `${producto.nombre} $${producto.precio}`).join(" - ");
    alert(todosLosProductos);

    let producto = prompt("Agrega un producto a tu carrito:");
    let precio = 0;
    
    // Usamos la estructura switch para asignar el precio al producto elegido
    switch (producto) {
        case "leche":
            precio = 250;
            break;
        case "huevo":
            precio = 1300;
            break;
        case "aceite":
            precio = 1800;
            break;
        case "fideo":
            precio = 500;
            break;
        case "harina":
            precio = 250;
            break;
        case "carne":
            precio = 1600;
            break;
        default:
            // Si el producto no está en la lista, mostramos un mensaje de error
            alert("No tenemos ese producto.");
            continue; 
    }

    let unidades = parseInt(prompt("Indique cuántas unidades quiere agregar:"));

    // Verificamos que la cantidad de unidades sea un número válido
    if (isNaN(unidades) || unidades <= 0) {
        alert("Ingrese una cantidad de unidades válida.");
        continue; 
    }

    // Si todo está correcto, agregamos el producto al carrito
    carrito.push({ producto, unidades, precio });
    console.log(carrito);

    seleccion = prompt("¿Quiere seguir comprando? (sí o no)");
}

// Si el usuario no agregó ningún producto, mostramos un mensaje y salimos del programa
if (carrito.length === 0) {
    alert("No se agregó ningún producto.");
} else {
    // Mostramos el detalle de la compra
    alert("Detalle de la compra:");
    carrito.forEach((producto) => {
        alert(`Producto: ${producto.producto}, Unidades: ${producto.unidades}, Total a pagar por producto: $${producto.unidades * producto.precio}`);
    });

    // Calculamos el total de la compra
    const totalCompra = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    if (totalCompra > presupuesto) {
        alert(`Lo siento, no tienes suficiente presupuesto para comprar todos los productos. Tu presupuesto es de $${presupuesto} y tu total a pagar es de $${totalCompra}.`);
    } else {
        alert(`Tu compra ha sido realizada con éxito. Tu presupuesto es de $${presupuesto} y tu total a pagar es de $${totalCompra}.`);
    }
}


