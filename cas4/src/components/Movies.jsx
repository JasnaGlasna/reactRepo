import PropTypes from 'prop-types';

export const Movies = ({filmovi}) =>{
    console.log(filmovi)
    return(
        <div id="movies">
            {filmovi.map((film,i)=>{
                return(
                    <div key={i}>
                        <h3><span>Title: </span>{film.name}</h3>
                        <p><span>Released: </span>{film.date}</p>
                        <p><span>Genre: </span>{film.genre}</p>
                        <p><span>Plot: </span>{film.plot}</p>
                        <a target='_blank' rel="noreferrer" href={film.imdbLink}>Go to IMDb</a>
                        <br/>
                        <img src={film.imgUrl} alt={film.name} width={250} height={350} />
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

Movies.propTypes = {
    filmovi: PropTypes.arrayOf(PropTypes.object)
}