// lista de productos
const productos = [


    // Tecnologia
    {
        id: 1,
        nombre: "Smartphone XYZ",
        precio: 699,
        categoria: "tecnologia",
        imagen: "assets/imagenes/smartphone-xyz.jpg",
        stock: 3,
        descripcion: "El Smartphone XYZ ofrece una experiencia móvil excepcional con su pantalla AMOLED de 6.5 pulgadas, cámara de 48MP y batería de larga duración. Ideal para quienes buscan rendimiento y estilo."
    },
    {
        id: 2,
        nombre: "Laptop ABC",
        precio: 999,
        categoria: "tecnologia",
        imagen: "assets/imagenes/laptop-abc.jpg",
        stock: 50,
        descripcion: "El Laptop ABC combina potencia y portabilidad, con un procesador de última generación y una pantalla Full HD de 15.6 pulgadas. Perfecto para profesionales y estudiantes."
    },
    {
        id: 3,
        nombre: "Tablet 123",
        precio: 499,
        categoria: "tecnologia",
        imagen: "assets/imagenes/tablet-123.jpg",
        stock: 50,
        descripcion: "El Tablet 123 es ligero y portátil, con una pantalla de 10.2 pulgadas y un rendimiento fluido. Ideal para el entretenimiento y la productividad en movimiento."
    },
    // Perifericos

    {
        id: 4,
        nombre: "Mouse Inalámbrico",
        precio: 49,
        categoria: "perifericos",
        imagen: "assets/imagenes/mouse-inalambrico.jpg",
        stock: 100,
        descripcion: "Este mouse inalámbrico ofrece comodidad y precisión, con un diseño ergonómico y conexión Bluetooth. Ideal para trabajar o jugar sin cables."
    },
    {
        id: 5,
        nombre: "Teclado Mecánico",
        precio: 89,
        categoria: "perifericos",
        imagen: "assets/imagenes/teclado-mecanico.jpg",
        stock: 75,
        descripcion: "El teclado mecánico proporciona una experiencia de escritura superior, con retroiluminación RGB y switches personalizables. Perfecto para gamers y profesionales."
    },
    {
        id: 6,
        nombre: "Auriculares Gaming",
        precio: 129,
        categoria: "perifericos",
        imagen: "assets/imagenes/auriculares-gaming.jpg",
        stock: 60,
        descripcion: "Estos auriculares gaming ofrecen sonido envolvente y micrófono ajustable, ideales para largas sesiones de juego y comunicación clara."
    },

    // gamer
    {
        id: 7,
        nombre: "Monitor Gaming 24\"",
        precio: 199,
        categoria: "gamer",
        imagen: "assets/imagenes/monitor-gaming.jpg",
        stock: 30,
        descripcion: "Este monitor gaming de 24\" ofrece una tasa de refresco de 144Hz y tiempo de respuesta de 1ms, ideal para juegos de alta velocidad."
    },
    {
        id: 8,
        nombre: "Silla Gaming Ergonomica",
        precio: 299,
        categoria: "gamer",
        imagen: "assets/imagenes/silla-gaming.jpg",
        stock: 20,
        descripcion: "La silla gaming ergonómica proporciona soporte lumbar y ajuste de altura, perfecta para largas sesiones de juego."
    },
    {
        id: 9,
        nombre: "Mesa Gaming",
        precio: 399,
        categoria: "gamer",
        imagen: "assets/imagenes/mesa-gaming.jpg",
        stock: 15,
        descripcion: "Esta mesa gaming cuenta con un diseño espacioso y gestión de cables, ideal para montar tu setup de juego."
    },
    // oficina
    {
        id: 10,
        nombre: "Escritorio Ergonomico",
        precio: 299,
        categoria: "oficina",
        imagen: "assets/imagenes/escritorio-ergonomico.jpg",
        stock: 25,
        descripcion: "Este escritorio ergonómico se ajusta a tu altura y postura, promoviendo una mejor salud y productividad en el trabajo."
    },
    {
        id: 11,
        nombre: "Silla de Oficina",
        precio: 199,
        categoria: "oficina",
        imagen: "assets/imagenes/silla-oficina.jpg",
        stock: 30,
        descripcion: "La silla de oficina ofrece comodidad y soporte lumbar, ideal para largas jornadas de trabajo."
    },
    {
        id: 12,
        nombre: "Lámpara de Escritorio LED",
        precio: 49,
        categoria: "oficina",
        imagen: "assets/imagenes/lámpara-escritorio.jpg",
        stock: 100,
        descripcion: "Esta lámpara de escritorio LED es regulable y eficiente, perfecta para iluminar tu espacio de trabajo."
    }

]


//cargar nuestros productos

let divProductos = document.querySelector(".productos__grid");

function htmlProducto(producto) {
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

function mostrarProductos(categoria="todos") {
    divProductos.innerHTML = "";
    productos
        .filter(producto => categoria ===  "todos" || producto.categoria === categoria)
        .forEach(producto => {
            htmlProducto(producto);
        })
}

mostrarProductos();

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
            htmlProducto(producto);
        })
}

mostrarProductosSeleccionados();