const contenedorCards = document.querySelector("#contenedorCards");
const API_RANDOM_USER = "https://randomuser.me/api/?results=10"

async function botonFetch() {
    const respuesta = await fetch(API_RANDOM_USER);
    const datos = await respuesta.json();
    console.log(datos);
    const usuario = datos.results;
    usuario.forEach((usuario) => {
        contenedorCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${usuario.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${usuario.name.first}</h5>
                <p class="card-text">${usuario.email}$</p>
            </div>
        </div>`;
    });
}