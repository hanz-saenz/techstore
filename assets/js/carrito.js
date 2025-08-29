let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
function agregarAlCarrito(id) {
    let producto = productos.find(p => p.id === id);
    if (producto.stock > 0) {
        // Lógica para agregar el producto al carrito
        console.log(`Producto agregado al carrito: ${producto.nombre}`);
        let itemAgregar = { ...producto, cantidad: 1};
        let existente = carrito.find(item => item.id === id);
        if(existente) {
            existente.cantidad++;
        } else {
            carrito.push(itemAgregar);
        }
        producto.stock--; // Disminuir el stock
        console.log(`Stock disponible: ${producto.stock}`);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        console.log(`Producto agotado: ${producto.nombre}`);
    }
}