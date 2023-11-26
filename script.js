const contenedorCards = document.querySelector("#contenedorCards");
const API_HP = "https://hp-api.onrender.com/api/characters"

async function botonFetch() {
    const respuesta = await fetch(API_HP);
    const datos = await respuesta.json();
    console.log(datos);
    datos.forEach((dato) => {
        contenedorCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${dato.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dato.name}</h5>
                <p class="card-text">${dato.house}</p>
            </div>
        </div>`;
    });
}