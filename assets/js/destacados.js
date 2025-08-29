let grid = document.querySelector(".destacados__grid");
productos.slice(0, 4).forEach(producto => {
    
    let descripcionCorta = producto.descripcion.length > 80
        ? producto.descripcion.substring(0, 77) + "..."
        : producto.descripcion;
    grid.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__imagen">
            <h3 class="producto__nombre">${producto.nombre}</h3>
            <p class="producto__precio">Precio: $${producto.precio}</p>
            <p class="producto__stock">Stock: ${producto.stock}</p>
            <p class="producto__descripcion">${descripcionCorta}</p>
            <button class="producto__boton" ${producto.stock === 0 ? 'disabled' : ''} onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `
});