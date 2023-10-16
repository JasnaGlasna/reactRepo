import {useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import {Gallery} from './components/Gallery';
import {Home} from './components/Home';
import {Nav} from './components/Nav';
import axios from 'axios';
import {API_URL} from './utils/constants';
import "./css/App.css";
import {GalleryContext} from './utils/GalleryContext';
import {Albums} from './components/Albums';
import { AlbumContext } from "./utils/AlbumContext";

export function App(){
  const [albums, setAlbums] = useState([]);

  const [photos,setPhotos] = useState([]);
  const [selectedImage,setSelectedImage] = useState("");

  useEffect(()=>{
    axios(`${API_URL}/photos`)
      .then(res=> setPhotos(res.data))
      .catch(err=>alert(err))
  },[])

  useEffect(()=> {
    axios(`${API_URL}/albums`)
    .then(res=> setAlbums(res.data))
    .catch(err=>alert(err))
  },[]);

  const deleteImage = () => {
    setSelectedImage('');
  };

  // function openPhoto(url){
  //   setSelectedImage(url);
  //   console.log(url)
  // }

  // function closePhoto(){
  //   setSelectedImage("");
  // }

  return(
    <div id="app">
      <Nav/>
          <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
            <AlbumContext.Provider value={{albums,setAlbums}}>
        <Routes>
          <Route path="/albums" element={
            <Albums
          />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" 
          element={
          <Gallery 
          listOfPhotos={photos}
          deleteImage={deleteImage}
          // setImage={openPhoto}
          // selektiranaSlika={selectedImage}
          // removePhoto={closePhoto}
           />
          }/>
        </Routes>
        </AlbumContext.Provider>
        </GalleryContext.Provider>
        
    </div>
  );
}