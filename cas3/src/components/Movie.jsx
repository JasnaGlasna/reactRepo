import PropTypes from "prop-types";


export const Movie = ({filmovi}) => {
    console.log(filmovi)
    return(
        <div id="movie">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>imbdLinks</th>
                        <th>imageUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {filmovi.map((film,i)=>{
                        return(
                            <tr key={i}>
                                <td>{film.name}</td>
                                <td>{film.date}</td>
                                <td>{film.genre}</td>
                                <td>
                                    <a href={film.imdbLink} target='_blank' rel="noopener noreferrer">
                                        ImdbLink
                                    </a>
                                </td>
                                <td>
                                    <img src={film.imageUrl} alt={'${film.name} Poster'} />
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

Movie.propTypes = {
    filmovi: PropTypes.arrayOf(PropTypes.object)
};