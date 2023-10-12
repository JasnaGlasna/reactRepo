import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';
import { GalleryContext } from '../utils/GalleryContext';

export const Gallery = ({listOfPhotos,deleteImage
    // setImage,
    // selektiranaSlika,
    // removePhoto
}) => {
    const {selectedImage,setSelectedImage} = useContext(GalleryContext);
    return(
        <div id="gallery">
            {listOfPhotos.slice(0,50).map((photo)=>{
            return(
                <div 
                className='image-holder' 
                key={photo.id}
                onClick={()=>{setSelectedImage(photo.url)}}
                >
                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                </div>
            )})}
           {selectedImage !== "" && (
            <div className="button-container">
           <Popup deleteImage={deleteImage}/>
           
         {/* zatvoriSlika={removePhoto} 
         izbranaSlika={selektiranaSlika} */}
         </div>
           )}
        </div>
    );
};

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object),
    // setImage: PropTypes.func,
    // selektiranaSlika:PropTypes.string,
    // removePhoto:PropTypes.func
}