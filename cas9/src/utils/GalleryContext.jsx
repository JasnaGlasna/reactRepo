import { createContext, useState, useContext } from 'react';

export const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState('');

  const deleteImage = () => {
    console.log("Delete function called");
    setSelectedImage('');
  };

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage, deleteImage }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
