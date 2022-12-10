const formularioUsuario = document.getElementById('formulario')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const botonSweet = document.getElementById('sweetAlert')

//objeto para guardar informacion del usuario
const infoUsuario = {}

//evento submit
formularioUsuario.onsubmit = (e) => {
    e.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value

    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage);

if (infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    botonSweet.onclick = () => {
        Swal.fire(`Bienvenido ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido} a Mercado Trucho`)
        setTimeout(() => {
            location.assign('index.html')
        }, 2000);
        
    }
}