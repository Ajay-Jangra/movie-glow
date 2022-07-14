import React from "react";


import "./HomeScreen.css";
import Row from "../Row";

import requests from "../Requests";
import Banner from "../Banner";
import Nav from "../Nav";

const HomeScreen=()=>{
    
    return (
      <>
        <div className="App">
          {/* navbar */}
          <Nav />
          {/* banner */}
          <Banner />
          <Row
            id="1"
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
          />
          <Row id="2" title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row id="3" title="Up-Coming" fetchUrl={requests.fetchgetupcoming} />
          <Row id="4" title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row id="5" title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row id="6" title="Now Playing" fetchUrl={requests.fetchgetnowplaying} />
          <Row id="7" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row id="8" title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row id="9" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row id="10" title="Mystery" fetchUrl={requests.fetchMystery} />
          <Row id="11" title="SciFi" fetchUrl={requests.fetchWestern} />
          <Row id="12" title="Animation" fetchUrl={requests.fetchAnimation} />
          <Row id="13" title="TV" fetchUrl={requests.fetchTV} />
          <Row id="14" title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

          <footer>
            <h1>Footer</h1>
            <div className="footer-about-dev">
              <p>Devloper : Ajay Jangra</p>
              <p>Devlope only for project perspective </p>
              <p>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/ajay-jangra-376ba1202/"
                >
                  Linked In
                </a>
              </p>
            </div>
          </footer>
        </div>
      </>
    );
}
export default  HomeScreen;