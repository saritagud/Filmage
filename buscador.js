const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&total_page=1';
const posterImgAPI = "https://image.tmdb.org/t/p/w1280";

const inputBuscador = document.getElementById('input-buscador');
const busquedaResultados = document.getElementById('busqueda-resultados')


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
});
























/* fetch(API_URL)
        .then((response) => response.json())
        .then(data => {
            const renderResultadosDebounce = debounce(resultados, 1000)
            inputBuscador.addEventListener('keyup', e => {
            renderResultadosDebounce(e.target.value);
        })

        function resultados(peliculas){
            console.log('ejecutando resultados');
    
            const resultados = data
            .filter(pelicula =>{
                if(data.match(`.*${peliculas}`)){
                    return pelicula;
                }
            })
    
            .map(pelicula => `<div>${pelicula}</div>`)
            .join('');
    
            busquedaResultados.innerHTML = resultados;
        }
    
        function debounce(funcion, tiempo){
            let timeoutId;
            return function(){
                if(timeoutId){
                    clearTimeout(timeoutId);
                }
                const context = this;
                const args = arguments;
                timeoutId = setTimeout(() =>{
                    funcion.apply(context, args)
                }, tiempo)
                };
            };
});
     */

    



/* function buscador() {
    fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
        console.log(data);

        const result = data.result;

        result.forEach(data => {
            const peliTitulo = `${data.title}`;
            const posterPeli = `${posterImgAPI + data.poster_path}`;
            const poster = document.createElement('img');
            poster.src = posterPeli;
            poster.alt = peliTitulo;
            busquedaResultados.appendChild(poster);
                    
            const titulo = document.createElement('h2');
            titulo.textContent = peliTitulo;
            busquedaResultados.appendChild(titulo);
            
            busquedaResultados.innerHTML = query;
            console.log(busquedaResultados.innerHTML)
        });
    });
}

function debounce(funcion, time) {
    let timeout;
    return function executedFunction(...args){
        const later = () => {
            clearTimeout(timeout);
            funcion(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later,time);
    };
};

const buscadorPeliculasDebounce = debounce(buscador, 1000);

inputBuscador.addEventListener('input', e => {
    busquedaResultados.innerHTML = '';
    const busqueda = e.target.value.trim();

    buscadorPeliculasDebounce(busqueda);
    console.log(busqueda)
    }); */