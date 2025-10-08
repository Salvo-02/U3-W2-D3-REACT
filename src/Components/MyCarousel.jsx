import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router";

import Slider from "react-slick";

class MyCarousel extends Component {
  state = {
    movies: [],
  };
  fetchMovies = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=fde552e4&s=" + this.props.search + "&type=movie");
      if (resp.ok) {
        const dataObj = await resp.json();
        this.setState({ movies: dataObj.Search });
      } else {
        throw new Error("Errore nella richiesta" + resp.status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 5,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Container fluid>
          <h2>{this.props.title}</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {this.state.movies.map((movie, index) => (
                <Link to={`details/${movie.imdbID}`}>
                  <div key={movie.imdbID + " " + index}>
                    <img className=" img-fluid mx-auto w-xs-" src={movie.Poster} alt={movie.Title} />
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </Container>
      </>
    );
  }
}
export default MyCarousel;
