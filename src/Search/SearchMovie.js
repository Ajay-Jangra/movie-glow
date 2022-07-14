import React, { useState, useEffect } from 'react'
import { API_KEY } from '../Requests';
import Nav from '../Nav';
import "./searchMovie.css";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToFavorites } from '../redux/actions/productActions.js';


const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("tom");
  // const [favourites, setFavourites] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original//";
  // const dispatch= useDispatch();

   
  // add in Fav
  // const addFavouriteMovie = (movie) => {
  //   // const newFavouriteList = [...favourites, movie];
  //   dispatch(addToFavorites(movie));
  // };

  useEffect(() => {
    const getMovieRequest = async (searchValue) => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`;

      const response = await fetch(url);
      const responseJson = await response.json();
      // console.log(responseJson.results[0].poster_path);
      setMovies(responseJson.results);

    };
    getMovieRequest(searchValue);
  }, [searchValue]);

  const navigate = useNavigate();

  const goToDetailsFromSearch=(movie)=>{
    navigate(`/movie/${movie.id}`);
  }

  // console.log(searchValue);
  // console.log(movies);
  return (
    <>
     <Nav />  
      {Object.keys(movies).length === 0 ? (<div className='loaderMain'><div className="loader"></div></div>) : (
      <div className='searchMainPage' >
        <div className='searchBar'>
          <input
            className='searchInput'
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Type to search...'
          >
          </input>
        </div>


        <div className='searchMovieMainDiv'>
          {movies ? (movies.map((movie, index) => (
            <div className='searchMovieResult'>
              <img src={`${base_url}${movie.poster_path}`} alt='movie' className='searchMovieImage' onClick={()=>goToDetailsFromSearch(movie)}></img>
              <h4>{movie.title}</h4>
              {/* <button className='searchAddInFav' ><i className='fa fa-plus'></i></button> */}
            </div>
          ))
          ) : (<>
                <div className="loader"></div>
          </>)
          }
        </div>

        {/* pagination */}

        {/* <div class="pagination">
        <button  onClick={()}>&laquo;</button>
        <button  onClick={()}>1</button>
        <button  onClick={()}>2</button>
        <button  onClick={()}>3</button>
        <button  onClick={()}>4</button>
        <button  onClick={()}>5</button>
        <button  onClick={()}>&raquo;</button>
      </div> */}
      </div>
      )}
    </>
  )
}

export default SearchMovie