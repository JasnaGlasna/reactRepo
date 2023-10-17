import { createContext, useState, useContext } from 'react';

export const GalleryContext = createContext();

export function GalleryProvider({ children, initialListOfPhotos }) {
  const [listOfPhotos, setListOfPhotos] = useState(initialListOfPhotos);
  const [selectedImage, setSelectedImage] = useState('');

  const deleteImage = () => {
    const updatedList = listOfPhotos.filter(photo => photo.url !== selectedImage);
    setListOfPhotos(updatedList);
    setSelectedImage('');
  };

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage, listOfPhotos, setListOfPhotos, deleteImage }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
