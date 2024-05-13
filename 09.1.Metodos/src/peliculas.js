//-------------------------------------------------------------------NO MODIFICAR 👇-------------------------------------------------------------------//

const peliculas = [
    {titulo: "Titanic",año: 1997,produccion: "Estados Unidos",genero: "Drama",estreno: false, img:'./src/img/titanic.jpg'},
    {titulo: "Inception",año: 2010,produccion: "Estados Unidos",genero: "Ciencia ficción",estreno: false, img:'./src/img/Inception.jpg'},
    {titulo: "The 'odfather",año: 1972,produccion: "Estados Unidos",genero: "Crimen",estreno: false, img:"./src/img/thegodfather.jpg"},
    {titulo: "The Shawshank Redemption",año: 1994,produccion: "Estados Unidos",genero: "Drama",estreno: false, img:"./src/img/shawshank.jpg"},
    {titulo: "Oppenheimer",año: 2023 ,produccion: "Estados Unidos",genero: "Drama",estreno: true, img:"./src/img/oppenheimer.jpg"},
    {titulo: "My Adventures with Superman",año: 2023,produccion: "Estados Unidos",genero: "Acción",estreno: true, img:"./src/img/my_adventures_with_superman.jpg"},
    {titulo: "Black Widow",año: 2021,produccion: "Estados Unidos",genero: "Acción",estreno: false, img:"./src/img/5915477.jpg"},
    {titulo: "Hijack",año: 2023,produccion: "Reino Unido",genero: "Drama",estreno: true, img:"./src/img/hijack.jpg"},
    {titulo: "Barrabrava",año: 2023,produccion: "Argentina",genero: "Crimen",estreno: true, img:"./src/img/barrabrava_2023.jpg"},
    {titulo: "Spider-Man: No Way Home",año: 2021,produccion: "Estados Unidos",genero: "Acción",estreno: false, img:"./src/img/0243323.jpg"},
    {titulo: "DUNC",año: 2022,produccion: "Estados Unidos",genero: "Ciencia ficción",estreno: false, img:"./src/img/Dune-209834814-large.jpg"}
];


const pelis = document.querySelector('.peli') // Obtenemos sección de pelis. donde se deben agregar las img de cada pelicula

//-------------------------------------------------------------------NO MODIFICAR 👆-------------------------------------------------------------------//


//BOTON TODOS => Debe devolver todas las portadas (img) de las peliculas que hay.
const allFilms = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Iterar sobre cada película y agregar su imagen a la sección
    peliculas.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}

//BOTON ESTRENOS => Debe devolver las portadas (img) solo de las peliculas que esten en estreno 'estreno: true'
const estrenos = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Filtrar solo las películas en estreno
    const estrenos = peliculas.filter(pelicula => pelicula.estreno);

    // Iterar sobre las películas en estreno y agregar sus imágenes a la sección
    estrenos.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}

//BOTON ACCION => Debe devolver solo aquellas peliculas que contengan como genero ‘Acción’.
const accion = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Filtrar solo las películas de acción
    const peliculasAccion = peliculas.filter(pelicula => pelicula.genero === 'Acción');

    // Iterar sobre las películas de acción y agregar sus imágenes a la sección
    peliculasAccion.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}

//BOTON DRAMA => Debe devolver solo aquellas peliculas que contengan como genero ‘Drama’.
const drama = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Filtrar solo las películas de drama
    const peliculasDrama = peliculas.filter(pelicula => pelicula.genero === 'Drama');

    // Iterar sobre las películas de drama y agregar sus imágenes a la sección
    peliculasDrama.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}

//BOTON CRIMEN => Debe devolver solo aquellas peliculas que contengan como genero ‘Crimen’.
const crimen = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Filtrar solo las películas de crimen
    const peliculasCrimen = peliculas.filter(pelicula => pelicula.genero === 'Crimen');

    // Iterar sobre las películas de crimen y agregar sus imágenes a la sección
    peliculasCrimen.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}

//BOTON TODOS => debe devolver aquellas peliculas que NO estén dentro de los generos anteriores.
const otros = () => {
    pelis.innerHTML = ''; // Limpiar sección de películas

    // Filtrar solo las películas que no son de acción, drama ni crimen
    const peliculasOtros = peliculas.filter(pelicula => pelicula.genero !== 'Acción' && pelicula.genero !== 'Drama' && pelicula.genero !== 'Crimen');

    // Iterar sobre las otras películas y agregar sus imágenes a la sección
    peliculasOtros.forEach(pelicula => {
        const img = document.createElement('img');
        img.src = pelicula.img;
        pelis.appendChild(img);
    });
}