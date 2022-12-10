const boton = document.getElementById('todos')
const lista = document.getElementById('lista')

boton.onclick = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(response => {
            const personajes = response.results
            personajes.forEach(personajes => {
                const {name, image, species, status} = personajes
                const li = document.createElement('li')
                li.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}">
            <p>${species} ${status}</p>
            `
                lista.append(li)
            })
        })
        .catch(error => console.log(error))

}