const detalles = document.getElementById("detalles");
const titulo = document.getElementById('titulo');
const video = document.getElementById('video');
const poster = document.getElementById('poster');
const pDescrip = document.getElementById('pDescrip')
const pFecha = document.getElementById('pFecha')
const pPopularidad = document.getElementById('pPopularidad')
const pVotos = document.getElementById('pVotos')
const listaPeliculas = document.getElementById('peliculas'); 

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&total_page=1";
const posterImgAPI = "https://image.tmdb.org/t/p/w1280";
const videoAPI = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=3330650ee96720ab5bb53a76eaf7b423&language=en-US'


detalles(API_URL)
function detalles(url){
    
}

/* paginaDetalles(API_URL)
function paginaDetalles(url) {
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            const peliculas = data.results;
            const peliculasDestacadas6 = peliculas.slice(0,6);
            
            peliculasDestacadas6.forEach(peliculas => {
                console.log(peliculas);
                
                const peliID = `${peliculas.id}`
                const posterPeli = `${posterImgAPI + peliculas.poster_path}`;
                const peliTitulo = `${peliculas.title}`;
                const descripcion = `${peliculas.overview}`;
                const fecha = `${peliculas.release_date}`;
                const video = `https://api.themoviedb.org/3/movie/${peliID}/videos?api_key=3330650ee96720ab5bb53a76eaf7b423&language=en-US + ${peliculas.video}`;
                const popularidad = `${peliculas.popularity}`;
                const votos = `${peliculas.vote_average}`;

                titulo.innerHTML = peliTitulo;
                video.src = video;
                video.alt = video;
                poster.src = posterPeli;
                poster.alt = posterPeli;
                pDescrip.innerText = descripcion;
                pFecha.innerText = fecha;
                pPopularidad.innerText = popularidad;
                pVotos.innerText = votos;


                const contador = 0;

                function id(){
                    contador++;
                    return 'peli#' + contador;
                }

                peliContenedor = id();

                const detalles = peliContenedor;


                detalles.addEventListener('click', () =>{
                    if (detalles == id()) return{
                      paginaDetalles
                    }
                    
                })
        });
    })
}




 */