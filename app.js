const inputBuscador = document.getElementById('input-buscador');
const busquedaResultados = document.getElementById('busqueda-resultados')
const loader = document.getElementById('loader')
let modal = document.createElement('div');
let body = document.getElementById('modalBody');
body.appendChild(modal)

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&total_page=1';
const posterImgAPI = "https://image.tmdb.org/t/p/w1280";


sectionPeliculas(API_URL);

function sectionPeliculas(url){
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            
            let listaPeliculas = document.getElementById('lista-peliculas')
            const peliculas = data.results;
            let peliculasDestacadas = peliculas.slice(0,12);
            peliculasDestacadas.forEach((p) => {
                console.log(p);
                //datos
                let peliTitulo = p.title;
                let posterPeli = posterImgAPI + p.poster_path;
                
                //section principal
                let peliContenedor = document.createElement('div');

                let poster = document.createElement('img');
                poster.src = posterPeli;
                poster.alt = peliTitulo;
                peliContenedor.appendChild(poster);
                
                let titulo = document.createElement('h1');
                peliContenedor.addEventListener('click', () => {
                    paginaDetalles(API_URL, peliculasDestacadas.indexOf(p));
                    console.log('ju')
                });
                
                titulo.textContent = peliTitulo;
                peliContenedor.appendChild(titulo);

                titulo.classList.add('tituloPeli')
                poster.classList.add('peliculas-img');
                peliContenedor.classList.add('peliculas');
                listaPeliculas.appendChild(peliContenedor);
        });
    });
}


function paginaDetalles(url,id){
    modal.classList.add('show')
    modal.classList.add('modal')
    console.log(id)
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            const peliculas = data.results;
            let peliculasDes = peliculas.slice(0,12)
            const API_Video = 'https://api.themoviedb.org/3/movie/${peliculasDes[id].id}/videos?api_key=3330650ee96720ab5bb53a76eaf7b423&language=en-US'
            let content = `<div class='modal_content'> <i id="icono" class="fa-solid fa-xmark"></i><video src="${API_Video + peliculasDes[id].video}" alt=""></video>
            <h1>${peliculasDes[id].title}</h1><p>${peliculasDes[id].overview}</p><p>Popularity: ${peliculasDes[id].popularity
            }</p><p>Date of issue: ${peliculasDes[id].release_date}</p><p>Votes: ${peliculasDes[id].vote_average}</p></div>`
            modal.innerHTML = content;

            const icono = document.getElementById('icono');
            icono.addEventListener('click', () =>{
                modal.classList.add('quitar')
            })
            
            modal.classList.remove('quitar')
        })   
}

function busquedaPelis(letras){
    fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        const peliculas = data.results
        .filter(pelicula =>
            pelicula.title.toLowerCase().includes(letras.toLowerCase()));

            busquedaResultados.innerHTML = '';

        peliculas.forEach(pelicula => {
            const peliTitulo = `${pelicula.title}`;
            const posterPeli = `${posterImgAPI + pelicula.poster_path}`;
            const peliContenedor = document.createElement('div');

            const poster = document.createElement('img');
            poster.src = posterPeli;
            poster.alt = peliTitulo;
            peliContenedor.appendChild(poster);
                
            const titulo = document.createElement('h2');
            titulo.textContent = peliTitulo;
            peliContenedor.appendChild(titulo);

            poster.classList.add('peliculas-img');
            peliContenedor.classList.add('peliculas');
            busquedaResultados.appendChild(peliContenedor); 
        });
        loader.classList.add('ocultar')
    })
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
        clearTimeout(timeout);
        func(...args);
    };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


const busquedaPelisDebounced = debounce(busquedaPelis, 1000);

inputBuscador.addEventListener('input', event => {
    const resultado = event.target.value.trim();
    if (resultado) {
        busquedaPelisDebounced(resultado);
    }else {
        busquedaResultados.innerHTML = '';
    }
    console.log(busquedaResultados)
    loader.classList.remove('ocultar')
});


