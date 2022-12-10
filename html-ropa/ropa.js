const stockProductos = [
    {
        id: 1,
        nombre: "Camisa gucci",
        precio: 1000,
        img: "img/1.webp",
        desc: "Me la regalo mi tío",
    },
    {
        id: 2,
        nombre: "Remera lisa negra",
        precio: 40000,
        img: "img/2.webp",
        desc: "me queda chica",
    },
    {
        id: 3,
        nombre: "Remera blanca talle S BillaBong",
        precio: 200,
        img: "img/3.webp",
        desc: "no me gusta",
    },
    {
        id: 4,
        nombre: "Camisa con palmeras talle 4",
        precio: 199000,
        img: "img/4.webp",
        desc: "Original, talle 4",
    },
    {
        id: 5,
        nombre: "Chomba addidas",
        precio: 19000,
        img: "img/5.webp",
        desc: "sin descripción",
    },
    {
        id: 6,
        nombre: "Musculosa BillaBong",
        precio: 199000,
        img: "img/6.webp",
        desc: "Era de mi abuelo",
    },
    {
        id: 7,
        nombre: "Remera negra Jaguar",
        precio: 19000,
        img: "img/7.webp",
        desc: "talle xxxl",
    },
    {
        id: 8,
        nombre: "Musculosa AllStar",
        precio: 19000,
        img: "img/8.webp",
        desc: "Sin descripción",
    },
    {
        id: 9,
        nombre: "Remera que uso maradona en el napoli",
        precio: 500000000000,
        img: "img/9.webp",
        desc: "mouse logitech + auricular sin sonido, es puro plastico",
    },
    {
        id: 10,
        nombre: "Remera AllStar",
        precio: 0,
        img: "img/10.webp",
        desc: "Shakira le regalo esta remera a pique, pero como se separaron la regala!",
    },
    {
        id: 11,
        nombre: "Remera marca MESSI",
        precio: 99000,
        img: "img/11.webp",
        desc: "Original talle xxxl",
    },
    {
        id: 12,
        nombre: "Remera pumas",
        precio: 50000,
        img: "img/12.webp",
        desc: "Talle xl, usada",
    },
    {
        id: 13,
        nombre: "Remera marca Puma",
        precio: 60000,
        img: "img/13.webp",
        desc: "Puma nueva, talle xl",
    },
    {
        id: 14,
        nombre: "Chomba marca Aire",
        precio: 90000,
        img: "img/14.webp",
        desc: "Chomba talle S, sin uso",
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

    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

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




