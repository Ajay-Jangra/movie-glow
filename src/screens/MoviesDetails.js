import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import './MoviesDetails.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { API_KEY } from '../Requests';
 


import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./MoviesDetails.css";



const base_url = "https://image.tmdb.org/t/p/original//";     // it is the url where all the poster will find 

const MoviesDetails = () => {

  const { movieId  } = useParams();
   
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [movie, setMovie] = useState({ movieDetail: 'null' , similarMovie: 'null' });
  const [movie, setMovie] = useState([]);
  const [similar, setSimilar] = useState();



  // get the selected movie  and similar movie in  Movie and Similar state 
  
  
   
  useEffect(() => {

    const fetchProductDetails = async () => {

      const response2 = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`).catch((error) => {
        console.log(error);
      });
      //  console.log(response2.data.results);
      setSimilar(response2.data.results);

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en`).catch((error) => {
        console.log(error);
      });
      setMovie(response.data);
      dispatch(selectedProduct(response.data));
    };

    if (movieId && movieId !== "") {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    }

  }, [dispatch,movieId]);

   


  const { poster_path, tagline, budget, revenue, overview,status, title, vote_average, release_date, genres } = movie;
// console.log(movie);
 // navigator to home page 
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const goToDetailsFromAnotherMovie=(value)=>{
    navigate(`/movie/${value.id}`);
  }
  //  trailer 
   const opts = {
      height: "420",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtue/player_parameters
        autoplay: 1,
      },
    };

  const handleTrailer = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          // console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
     }
  };


  

  return (
    <>
      <Nav />
   {Object.keys(movie).length === 0 ? (<div className='loaderMain'><div className="loader"></div></div>) : (
    <div className='movieDetailsPage'> 
      <div className="main-div">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        <div className='aboutMovieMainDiv'>
             
            <div className='selectedMoviePoster'>
              <img
                className="selectedPoster"
                src={`${base_url}${poster_path}`}
                alt={title}
                 
              />
            </div>
            <div className='selectedMovieDetails'>
               <div className='selectedMovieTitle'>
                <h1>{title}</h1>
                <p>&nbsp; &nbsp; 
                {genres.map((value)=>{
                  return(
                    <>{value.name},</>
                  )
                })}
                  &nbsp; &nbsp; &nbsp; &nbsp; Release Data:- {release_date}</p>
               </div>
               <div className='selectedMovieTrailer'>
                <div className='selectedMovieReating'><p>{vote_average} ⭐</p></div>
                <div className='selectedMovieBudget'><p>{ Math.round(budget/10000000)} M </p></div>
                <div className='selectedMovieRevenue'><p>{ Math.round(revenue / 10000000)} M</p></div>
                <button className='playTrailer' onClick={() => handleTrailer()}>
                  {trailerUrl ? (<>Stop Trailer</>) : (<>Play Trailer</>)}
                </button>
                <button  className="backToHome" onClick={home}>
                  Back to Home
                </button>
               </div>
               <div className='sectectMovieDiscription' >
                <p className='tagline' >{tagline}</p>
                <h3>Overview</h3>
                <p className='selectedMovieOverView'>{overview}</p>
                <p>STATUS:- {status}</p>
               </div>
            </div>    
        </div>
             
        

       

        {/* Similar movies  */}
        <h1 className='similarMovieHeading'>Similar Movies </h1>
          <div className='similarMovieMainDiv'>
            {
              similar.map((value) => {
                return (
                  <>
                    <div className='similarMovieResult' >
                      <img src={`${base_url}${value.poster_path}`} alt='movie' className='similarMovieImage' onClick={() => goToDetailsFromAnotherMovie(value)}></img>
                        <h4>{value.title}</h4>
                        {/* <button className='similarAddInFav'><i className='fa fa-plus'></i></button> */}
                    </div>
                  </>
                )
              })
            }
          </div>
         </div>
        </div>
      )}
    </>
  );
}

export default MoviesDetails