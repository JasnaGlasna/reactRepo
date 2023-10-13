import React from 'react';
import {Movie} from './components/Movie';

let myMovies = [{
  name: 'Loki',
  date: '2021',
  genre: 'Adventure,Fantasy',
  imdbLink: 'https://www.imdb.com/title/tt9140554/',
  imageUrl: 'https://i5.walmartimages.com/seo/Marvel-Loki-One-Sheet-Wall-Poster-22-375-x-34_84257619-07d9-4edb-ad2b-4ac8e3e9d783.2258443c63fd383a733a59126166eb78.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
},
{ 
  name: 'Four Brothers',
  date: '2005',
  genre: 'Action',
  imdbLink:'https://www.imdb.com/title/tt0430105/',
  imageUrl:'https://img.moviepostershop.com/four-brothers-movie-poster-2005-1020273597.jpg'

},
{
  name: 'Fantastic Beasts',
  date: '2018',
  genre: 'Adventure,Fantasy',
  imdbLink:'https://www.imdb.com/title/tt4123430/',
  imageUrl:'https://images.ctfassets.net/usf1vwtuqyxm/4537ySbIRYPZQvWMwsG3xJ/f53f3ffc98c6578bdd59850780380676/fb3-poster-pickett.jpg?w=914&q=70&fm=webp'
},
{
  name: 'House of Dragon',
  date: '2022',
  genre: 'Action, Adventure',
  imdbLink: 'https://www.imdb.com/title/tt11198330/',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Wallpapersden.com_house-of-the-dragon-poster_2160x3840.jpg',
},
{
  name: 'The Godfather',
  date: '1972',
  genre: 'Crime, Drama',
  imdbLink: 'https://www.imdb.com/title/tt0068646/',
  imageUrl: 'https://vignette.wikia.nocookie.net/godfather/images/c/cf/Coppola%2C_Pacino%2C_Brando.jpg',
}]

export function App() {
  return (
    <div id="app">
      <Movie filmovi={myMovies}/>
      
    </div>
  );
}
