/////////RECIBIR INFO DE PROPS/////////////
import React from 'react';

function Footer(props) {

  console.log(props)
  
  return (
    <div>
      {props.valor} 
    </div>
  );
}

export default Footer;


const rentals = [
  {
    id: 1,
    title: "Casa en peladas nosara",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "355mil colones por mes",
    date: "Marzo 8 - abril 9",
    guests: "6 cuartos · 3 baños",
    rating: "4.8",
    reviews: "17",
    imgSrc: "URL_DE_LA_IMAGEN1", 
  },
  {
    id: 2,
    title: "Casa en arenales",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "281mil colones por mes",
    date: "Marzo 29 - Abril 5",
    guests: "3 cuartos · 2 baños",
    rating: "5.0",
    reviews: "84",
    imgSrc: "URL_DE_LA_IMAGEN2", 
  },
  {
    id: 3,
    title: "Villa en Nosara con aire acondicionado",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "250mil colones por mes",
    date: "Noviembre 25 - Diciembre 2",
    guests: "2 cuartos · 2 baños",
    rating: "5.0",
    reviews: "2",
    imgSrc: "URL_DE_LA_IMAGEN3", 
  },
  {
    id: 4,
    title: "Casa en nosara centro",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "150mil colones por mes",
    date: "marzo 8 - noviembre 23",
    guests: "2 cuartos . 1 baño",
    rating: "4.5",
    reviews: "2",
    imgSrc: "URL_DE_LA_IMAGEN4", 
  },
  {
    id: 5,
    title: "Casa En frente del gollo nosara",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "180mil colones por mes",
    date: "Agosto 13 - Septiembre 14",
    guests: "2 cuartos . 2 baños",
    rating: "4.5",
    reviews: "3",
    imgSrc: "casas-rurales.jpg",
  },
  {
    id: 6,
    title: "Casa a los 100mtrs del cementerio de nosara",
    location: "Nosara, Guanacaste Province, Costa Rica",
    price: "150mil colones por mes",
    date: "Septiembre 1 - 2 Noviembre",
    guests: "2 cuatros . 1 baño",
    rating: "4.5",
    reviews: "2",
    imgSrc: "alquiler-casas-lujo.jpg",
  },

];