window.mostrar = (personajes)=>{

    const molde = document.querySelector(".molde-personaje");
    const contenedor = document.querySelector(".contenedor");
    for (let i=0; i < personajes.length; ++i) {
        let p = personajes[i];
        let copia = molde.cloneNode(true);
        copia.querySelector('.nombre-titulo').innerText = p.name;
        copia.querySelector('.imagen-personaje').src = p.image;
        contenedor.appendChild(copia);
    }
};

window.addEventListener('DOMContentLoaded',async ()=>{
    let respuesta = await axios.get("https://rickandmortyapi.com/api/character");
    let personajes = respuesta.data.results;
    window.mostrar(personajes);
});
