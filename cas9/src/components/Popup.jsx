// import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = (
    // {zatvoriSlika,izbranaSlika}
    ) =>{
        const {selectedImage,setSelectedImage, deleteImage} = useContext(GalleryContext);
    return(
        <div id="popup">
          <button onClick={deleteImage} className='delete-button'>
            Delete
          </button>
            <button onClick={()=>{setSelectedImage("")}} className="close-popup">
                &times;
            </button>
            <div className="popup-container">
                <img src={selectedImage} alt="" />
            </div>
        </div>
    )
}

// Popup.propTypes = {
//     zatvoriSlika:PropTypes.func,
//     izbranaSlika:PropTypes.string
// }