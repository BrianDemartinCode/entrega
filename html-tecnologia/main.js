const stockProductos = [
    {
        id: 1,
        nombre: "gazebo",
        precio: 1000,
        img: "img/carpa copy.webp",
        desc: "gazebo de 3 metros de altura x 2 metros de ancho, especial para vender tortas fritas",
    },
    {
        id: 2,
        nombre: "monitor",
        precio: 40000,
        img: "img/monitor.webp",
        desc: "monitor de 29 pulgadas, nuevo sin uso",
    },
    {
        id: 3,
        nombre: "figurita",
        precio: 200,
        img: "img/sobre-mundial.webp",
        desc: "pack de 10 figuritas del mundial de Qatar 2022",
    },
    {
        id: 4,
        nombre: "smart tv",
        precio: 199000,
        img: "img/tele.webp",
        desc: "Smart tv trucho, lo compre en la saladita de mi barrio",
    },
    {
        id: 5,
        nombre: "monitor gamer",
        precio: 19000,
        img: "img/monitor.webp",
        desc: "monitor gamer, especial para videojuegos de baja resolución porque es trucho",
    },
    {
        id: 6,
        nombre: "pc gamer",
        precio: 199000,
        img: "img/compu2.webp",
        desc: "pc gamer ya lista para usar, con windows xp del 1988 a.c",
    },
    {
        id: 7,
        nombre: "monitor razer",
        precio: 19000,
        img: "img/monitor.webp",
        desc: "monitor razer, es original, lo compre porque me sobra la plata",
    },
    {
        id: 8,
        nombre: "cooler",
        precio: 19000,
        img: "img/cooler.webp",
        desc: "cooler roto, solo le andan las luces",
    },
    {
        id: 9,
        nombre: "mouse logitech + auricular",
        precio: 10000,
        img: "img/mouse.webp",
        desc: "mouse logitech + auricular sin sonido, es puro plastico",
    },
    {
        id: 10,
        nombre: "gabinete",
        precio: 10000,
        img: "img/compu.webp",
        desc: "gabinete de pc, no trae componentes integrados",
    },
    {
        id: 11,
        nombre: "onix",
        precio: 99000,
        img: "img/onix.webp",
        desc: "ni se que marca es, pero lo vendo",
    },
    {
        id: 12,
        nombre: "hilux",
        precio: 50000,
        img: "img/camioneta.webp",
        desc: "hilux 2008, no tiene papeles, falta pagar la patente",
    },
    {
        id: 13,
        nombre: "toyota",
        precio: 60000,
        img: "img/camioneta2.webp",
        desc: "toyota nueva, recien sacada del concecionario, ",
    },
    {
        id: 14,
        nombre: "jeep",
        precio: 90000,
        img: "img/jeep.webp",
        desc: "jeep recien sacada del horno",
    },
]
let carrito = []

const contenedor = document.querySelector('#contenedor')
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal = document.querySelector('#precioTotal')

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})

stockProductos.forEach((prod) => {
    const { id, nombre, precio, img, desc } = prod
    contenedor.innerHTML += `
    <div class="card mx-auto" style="width: 18rem;">
  <img class="card-img-top mt-2" src="${img}" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">Precio: ${precio}</p>
    <p class="card-text">Descripción: ${desc}</p>
    <button onclick="agregarProductos(${id})" class="btn btn-primary">Agregar al carrito</button>
  </div>
</div>
    `
})

function agregarProductos(id) {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')

    modalBody.innerHTML = ''
    carrito.forEach((prod) => {
        const { id, nombre, precio, img, desc } = prod
        modalBody.innerHTML += `
        <div class="modal-contenedor">
    <div>
        <img class="img-fluid img-carrito" src="${img}">
    </div>

    <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Descripcion: ${desc}</p
    </div>

    <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar</button>

</div>
        `
    })

    if(carrito.length === 0){
       modalBody.innerHTML = `
       <p class="text-center text-primary">¡Aun no agregaste nada!</p>
       `
    }

    carritoContenedor.textContent = carrito.length

    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio,0)

    guardarStorage()
}

function eliminarProducto(id){
    const juegoId = id
    carrito = carrito.filter((juego) => juego.id !== juegoId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



