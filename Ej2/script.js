const contenedorCards = document.querySelector("#contenedorCards");
const API_TIENDA = "https://fakestoreapi.com/products"

async function botonFetch() {
    const respuesta = await fetch(API_TIENDA);
    const datos = await respuesta.json();
    console.log(datos);
    datos.forEach((dato) => {
        contenedorCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${dato.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dato.title}</h5>
                <p class="card-text">${dato.price}$</p>
            </div>
        </div>`;
    });
}