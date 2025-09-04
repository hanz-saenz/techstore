//cargar nuestros productos

let divProductos = document.querySelector(".productos__grid");

function htmlProducto(producto, divProductos) {
    let descripcionCorta = producto.descripcion.length > 80
                ? producto.descripcion.substring(0, 77) + "..."
                : producto.descripcion;
    return divProductos.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__imagen">
                <h3 class="producto__nombre">${producto.nombre}</h3>
                <p class="producto__precio">Precio: $${producto.precio}</p>
                <p class="producto__stock">Stock: ${producto.stock}</p>
                <p class="producto__descripcion">${descripcionCorta}</p>
                <button class="producto__boton" ${producto.stock === 0 ? 'disabled' : ''} onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
            `
}

function mostrarProductos(categoria="todos", divProductos) {
    // divProductos.innerHTML = "";
    productos
        .filter(producto => categoria ===  "todos" || producto.categoria === categoria)
        .forEach(producto => {
            htmlProducto(producto, divProductos);
        })
}

mostrarProductos(divProductos);

function mostrarProductosSeleccionados() {
    let categoriasSeleccionados = document.getElementById("filtro-producto");

    //obtener la lista de categorias
    let categorias = Array.from(categoriasSeleccionados.selectedOptions).map(option => option.value);
    console.log(categorias);
    divProductos.innerHTML = "";
    productos
        .filter(producto => 
            categoriasSeleccionados.value === "todos" || categorias.includes(producto.categoria))
        .forEach(producto => {
            htmlProducto(producto, divProductos);
        })
}

mostrarProductosSeleccionados(divProductos);