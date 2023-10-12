import { useContext } from "react";
import {AlbumContext} from '../utils/AlbumContext';
import PropTypes from 'prop-types';




export const Albums = () => {
    const {albums} = useContext(AlbumContext)
    return(
        <div id="albums">
        {albums.slice(0,50).map((album)=>{
            return(
                <div key={album.id}>
                <h3>{album.title}</h3>
                <p>User Id: {album.userId}</p>
                </div>
            )
        })}
        </div>

    )
} 
Albums.propTypes = {
    listOAlbums:PropTypes.arrayOf(PropTypes.object),
}